// Vercel Serverless Function for Portfolio Contact Form
// Handles POST /api/contact on Vercel infrastructure
import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // CORS & Security Headers
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
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    } else if (!body || typeof body !== "object") {
      body = {};
    }

    const { name, email, subject, message, _honeypot } = body;

    // Honeypot spam protection
    if (_honeypot && String(_honeypot).trim().length > 0) {
      res.status(200).json({ success: true, message: "Message processed" });
      return;
    }

    // Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      res.status(400).json({
        error: "Please enter your name (minimum 2 characters).",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      res.status(400).json({
        error: "Please enter a valid email address.",
      });
      return;
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      res.status(400).json({
        error: "Please enter a subject (minimum 3 characters).",
      });
      return;
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      res.status(400).json({
        error: "Please enter your message (minimum 10 characters).",
      });
      return;
    }

    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().slice(0, 120);
    const sanitizedSubject = subject.trim().slice(0, 150);
    const sanitizedMessage = message.trim().slice(0, 4000);

    const recipientEmail =
      process.env.CONTACT_EMAIL || "januarioinocenciohenriques@gmail.com";

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpUser = process.env.SMTP_USER || "januarioinocenciohenriques@gmail.com";
    const smtpPass = process.env.SMTP_PASS;
    const resendApiKey = process.env.RESEND_API_KEY;

    let delivered = false;

    // 1. Try Gmail / Nodemailer SMTP
    if (smtpUser && smtpPass) {
      try {
        const cleanPass = smtpPass.replace(/\s+/g, "");
        const isGmail = smtpHost.includes("gmail") || smtpUser.includes("@gmail.com");

        const transporter = nodemailer.createTransport(
          isGmail
            ? {
                service: "gmail",
                auth: {
                  user: smtpUser,
                  pass: cleanPass,
                },
              }
            : {
                host: smtpHost,
                port: parseInt(process.env.SMTP_PORT || "465", 10),
                secure: process.env.SMTP_SECURE === "true",
                auth: {
                  user: smtpUser,
                  pass: cleanPass,
                },
              }
        );

        await transporter.sendMail({
          from: `"Portfolio Contact" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: sanitizedEmail,
          subject: `[Portfolio Contact] ${sanitizedSubject}`,
          text: `New message from ${sanitizedName} (${sanitizedEmail}):\n\nSubject: ${sanitizedSubject}\n\n${sanitizedMessage}`,
        });

        delivered = true;
        console.log("[SMTP SENT] Successfully sent via Nodemailer on Vercel");
      } catch (smtpErr) {
        console.error("Nodemailer SMTP failed on Vercel:", smtpErr);
      }
    }

    // 2. Try Resend if SMTP wasn't configured
    if (!delivered && resendApiKey) {
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
            text: `New message from ${sanitizedName} (${sanitizedEmail}):\n\nSubject: ${sanitizedSubject}\n\n${sanitizedMessage}`,
          }),
        });

        if (resendRes.ok) {
          delivered = true;
        }
      } catch (err) {
        console.error("Resend delivery failed in serverless function:", err);
      }
    }

    // Always respond with success JSON so client knows it was handled
    res.status(200).json({
      success: true,
      delivered,
      message:
        "Thank you! Your message has been sent successfully. I'll get back to you as soon as possible.",
    });
  } catch (err: any) {
    console.error("Serverless handler error:", err);
    res.status(500).json({
      error:
        "An unexpected error occurred while processing your message. Please reach out directly via email.",
    });
  }
}
