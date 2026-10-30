import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);

app.use(express.json());

// In-memory rate limiting map: IP -> timestamp[]
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (time) => now - time < windowMs
  );

  if (timestamps.length >= maxRequests) {
    return false;
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

// Contact Form API Endpoint
app.post("/api/contact", async (req: Request, res: Response): Promise<void> => {
  try {
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
      req.socket.remoteAddress ||
      "unknown";

    // Rate Limiting Check
    if (!checkRateLimit(clientIp)) {
      res.status(429).json({
        error: "Too many messages sent from this IP. Please try again in 15 minutes.",
      });
      return;
    }

    const { name, email, subject, message, _honeypot } = req.body;

    // Honeypot spam trap
    if (_honeypot && _honeypot.trim().length > 0) {
      console.warn(`[SPAM BLOCKED] Honeypot triggered from ${clientIp}`);
      res.status(200).json({ success: true, message: "Message processed" });
      return;
    }

    // Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      res.status(400).json({ error: "Please enter your name (minimum 2 characters)." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      res.status(400).json({ error: "Please enter a valid email address." });
      return;
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      res.status(400).json({ error: "Please enter a subject (minimum 3 characters)." });
      return;
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      res.status(400).json({ error: "Please enter your message (minimum 10 characters)." });
      return;
    }

    // Sanitization
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().slice(0, 120);
    const sanitizedSubject = subject.trim().slice(0, 150);
    const sanitizedMessage = message.trim().slice(0, 4000);

    const recipientEmail =
      process.env.CONTACT_EMAIL || "januarioinocenciohenriques@gmail.com";

    console.log(`[CONTACT RECEIVED] From: ${sanitizedName} <${sanitizedEmail}>`);
    console.log(`Subject: ${sanitizedSubject}`);
    console.log(`Recipient: ${recipientEmail}`);

    // Check if SMTP or Resend credentials are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const resendApiKey = process.env.RESEND_API_KEY;

    let emailDelivered = false;
    let deliveryMethod = "server-logged";

    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || "Portfolio Contact <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: sanitizedEmail,
            subject: `[Portfolio Contact] ${sanitizedSubject}`,
            text: `New message from Januario Henrique Portfolio:\n\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`,
          }),
        });

        if (resendRes.ok) {
          emailDelivered = true;
          deliveryMethod = "resend-api";
          console.log("[EMAIL SENT] Successfully sent via Resend API");
        } else {
          const errText = await resendRes.text();
          console.error("[RESEND ERROR]", errText);
        }
      } catch (resendErr) {
        console.error("[RESEND FAILED]", resendErr);
      }
    } else if (smtpUser && smtpPass) {
      try {
        const cleanPass = smtpPass.replace(/\s+/g, "");
        const isGmail = smtpHost?.includes("gmail") || smtpUser.includes("@gmail.com");

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
          text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`,
        });

        emailDelivered = true;
        deliveryMethod = "smtp-gmail";
        console.log("[EMAIL SENT] Successfully sent via Gmail SMTP");
      } catch (smtpErr) {
        console.error("[SMTP ERROR]", smtpErr);
      }
    }

    res.status(200).json({
      success: true,
      delivered: emailDelivered,
      method: deliveryMethod,
      message:
        "Thank you! Your message has been sent successfully. I'll get back to you as soon as possible.",
    });
  } catch (error) {
    console.error("[API CONTACT ERROR]", error);
    res.status(500).json({
      error: "An unexpected error occurred while sending your message. Please try again or email directly.",
    });
  }
});

// Setup Vite in development or serve static in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === "production";

  // Direct CV PDF Endpoints
  const cvFilePath = path.resolve(__dirname, "public/assets/Januario-Henrique-CV.pdf");
  app.get(["/cv", "/download-cv", "/assets/Januario-Henrique-CV.pdf"], (_req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'inline; filename="Januario-Henrique-CV.pdf"');
    res.sendFile(cvFilePath);
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
