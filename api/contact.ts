// Vercel Serverless Function for Portfolio Contact Form
// Deployed automatically to /api/contact when hosted on Vercel

export interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  _honeypot?: string;
}

export default async function handler(req: any, res: any) {
  // Set CORS headers for safe cross-origin handling if necessary
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed. Use POST." });
    return;
  }

  try {
    const body: ContactRequestBody =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    const { name, email, subject, message, _honeypot } = body;

    // Honeypot spam check
    if (_honeypot && _honeypot.trim().length > 0) {
      console.warn("[SPAM BLOCKED] Honeypot triggered in Vercel Function");
      res.status(200).json({ success: true, message: "Message processed" });
      return;
    }

    // Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      res
        .status(400)
        .json({ error: "Please enter your name (minimum 2 characters)." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      res.status(400).json({ error: "Please enter a valid email address." });
      return;
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      res
        .status(400)
        .json({ error: "Please enter a subject (minimum 3 characters)." });
      return;
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      res.status(400).json({
        error: "Please enter your message (minimum 10 characters).",
      });
      return;
    }

    // Sanitization
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().slice(0, 120);
    const sanitizedSubject = subject.trim().slice(0, 150);
    const sanitizedMessage = message.trim().slice(0, 4000);

    const recipientEmail =
      process.env.CONTACT_EMAIL || "januarioinocenciohenriques@gmail.com";

    console.log(
      `[VERCEL CONTACT] From: ${sanitizedName} <${sanitizedEmail}> | Subj: ${sanitizedSubject}`
    );

    // Optional email dispatch via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    let delivered = false;
    let deliveryMethod = "serverless-logged";

    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from:
              process.env.RESEND_FROM ||
              "Portfolio Contact <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: sanitizedEmail,
            subject: `[Portfolio Contact] ${sanitizedSubject}`,
            text: `New message from Januario Henrique Portfolio:\n\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`,
          }),
        });

        if (resendRes.ok) {
          delivered = true;
          deliveryMethod = "resend-api";
          console.log("[EMAIL SENT] Successfully sent via Resend API");
        } else {
          const errText = await resendRes.text();
          console.error("[RESEND ERROR]", errText);
        }
      } catch (resendErr) {
        console.error("[RESEND FAILED]", resendErr);
      }
    }

    res.status(200).json({
      success: true,
      delivered,
      method: deliveryMethod,
      message:
        "Thank you! Your message has been sent successfully. I'll get back to you as soon as possible.",
    });
  } catch (err: any) {
    console.error("[VERCEL HANDLER ERROR]", err);
    res.status(500).json({
      error:
        "An unexpected error occurred while sending your message. Please reach out directly via email.",
    });
  }
}
