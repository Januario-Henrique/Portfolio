# Januario Henrique — Software Engineering Portfolio

A modern, premium, recruiter-ready personal portfolio website for **Januario Henrique**, Software Engineering student and aspiring Full Stack / Backend Developer based in Kigali, Rwanda.

---

## 🌟 Overview & Highlights

- **Visual Identity**: Dark mode by default (`#0A0A0A` canvas, `#0D1117` secondary, `#111827`/`#151B23` cards, `#10B981` Emerald Green accent).
- **Recruiter-First UX**: Communicates core competencies, hands-on projects, formal engineering methodology, and contact methods within 30 seconds.
- **Real Full-Stack Contact API**: Working `POST /api/contact` endpoint featuring honeypot spam protection, IP rate limiting, input sanitization, and support for Resend & SMTP email forwarding.
- **Case Study Modals**: Deep dives into problem statements, architectural layers, data schemas, and key features.
- **ATS-Friendly CV Viewer**: Integrated in-browser Curriculum Vitae modal with print/save-to-PDF functionality alongside the downloadable `/assets/Januario-Henrique-CV.pdf`.
- **Live GitHub Activity**: Seamless integration querying public repositories with resilient offline fallbacks.

---

## 🏗️ Architecture & Component Directory

```text
src/
├── assets/
│   └── images/                # High-fidelity project mockups and workspace visuals
├── components/
│   ├── Navbar/
│   │   └── Navbar.tsx         # Sticky 3-zone header with mobile drawer
│   ├── Hero/
│   │   └── Hero.tsx           # Positioning headline, CTAs, and interactive code inspector
│   ├── About/
│   │   └── About.tsx          # Engineering lifecycle stepper (Problem → Design → Code → Test → Deploy)
│   ├── TechStack/
│   │   └── TechStack.tsx      # Categorized skill chips with interactive filters
│   ├── Projects/
│   │   ├── Projects.tsx       # Featured projects (MotoSys, SMS, Up Skills Hub, Gemini, Weather)
│   │   ├── ProjectModal.tsx   # In-depth architectural case study modal
│   │   └── JavaProjects.tsx   # Secondary Java OOP & enterprise desktop systems
│   ├── Engineering/
│   │   └── Engineering.tsx    # Formal methodology (UML, ERD, OOP, REST, Git practices)
│   ├── Learning/
│   │   └── Learning.tsx       # Currently Learning & Open Source community interests
│   ├── Education/
│   │   └── Education.tsx      # Software Engineering degree & certifications
│   ├── GitHubActivity/
│   │   └── GitHubActivity.tsx # GitHub repository showcase with live API integration
│   ├── Resume/
│   │   ├── Resume.tsx         # Call-to-action banner for CV download & review
│   │   └── CvModal.tsx        # In-browser ATS-formatted resume viewer
│   ├── Contact/
│   │   └── Contact.tsx        # Functional contact form with validation & delivery feedback
│   └── Footer/
│       └── Footer.tsx         # Copyright, credentials, and quick-scroll button
│
├── data/
│   ├── social.ts              # Social links, bio statement, location, and metadata
│   ├── technologies.ts        # Categorized technical skills and learning roadmap
│   ├── projects.ts            # Featured and Java engineering project records
│   ├── engineering.ts         # Software engineering pillars and lifecycle steps
│   └── education.ts           # University coursework and certifications
│
├── App.tsx                    # Main layout composition
├── main.tsx                   # React root entry point
├── index.css                  # Tailwind CSS configuration and theme tokens
└── server.ts                  # Express backend proxy & contact API handler
```

---

## 📬 Contact Form & Email Integration

The contact form is backed by a secure Express endpoint at `POST /api/contact`.

### How Email Forwarding Works

1. **Visitor Submission**: Visitor enters Name, Email, Subject, and Message.
2. **Security & Spam Protection**:
   - Hidden honeypot field (`_honeypot`) traps malicious bots.
   - Client-side and server-side regex validation and length constraints.
   - IP rate limiting (maximum 5 requests per 15-minute window).
3. **Delivery Mechanism**:
   - **Resend API (Recommended)**: Set `RESEND_API_KEY` in `.env` to dispatch clean transactional emails to `januarioinocenciohenriques@gmail.com`.
   - **SMTP / Nodemailer**: Set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` in `.env` to send via your custom email server (Gmail, Outlook, AWS SES).
   - **Fallback Mechanism**: In offline or non-SMTP environments, messages are logged securely with timestamps on the server, and a direct mail client draft button is provided to the user.

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
CONTACT_EMAIL="januarioinocenciohenriques@gmail.com"

# Option A: Resend Cloud Email (https://resend.com)
RESEND_API_KEY="re_123456789"
RESEND_FROM="Portfolio Contact <onboarding@resend.dev>"

# Option B: Standard SMTP (Gmail, Zoho, SendGrid)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
SMTP_SECURE="false"
```

---

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The application runs on `http://localhost:3000`.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Run Production Server**:
   ```bash
   npm start
   ```

---

## 🔧 Personalization & Updating Information

All content is cleanly decoupled into the `src/data/` directory:

1. **Social & Personal Information (`src/data/social.ts`)**:
   - Update `email`, `github`, `linkedin`, or `location`.
2. **Projects (`src/data/projects.ts`)**:
   - Modify repository links, screenshots, live demo links, or problem/solution statements.
3. **Skills (`src/data/technologies.ts`)**:
   - Add newly acquired frameworks or update the "Currently Learning" roadmap.
4. **CV File (`/public/assets/Januario-Henrique-CV.pdf`)**:
   - Replace this file with your official PDF resume.
