import React, { useState } from "react";
import { PROFILE } from "../../data/social";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honeypot: string; // Anti-spam trap
}

interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honeypot: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [showMailtoFallback, setShowMailtoFallback] = useState(false);

  const validate = (): boolean => {
    const errs: ValidationErrors = {};

    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Please enter a valid email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      errs.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please enter your message (at least 10 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(
          data.message ||
            "Thank you! Your message has been sent successfully. I'll get back to you as soon as possible."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          _honeypot: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          data.error || "Unable to send message through the server. You can also email me directly."
        );
        setShowMailtoFallback(true);
      }
    } catch (err) {
      setSubmitStatus("error");
      setStatusMessage(
        "Network connection or server error. You can directly reach me via email below."
      );
      setShowMailtoFallback(true);
    } finally {
      setSubmitting(false);
    }
  };

  // Generate mailto link as resilient backup
  const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    formData.subject || "Software Engineering Inquiry"
  )}&body=${encodeURIComponent(
    `Hello Januario,\n\n${formData.message}\n\nFrom:\n${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
                08. Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                Let's Build Something Together
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Whether you have an internship opportunity, a software project, an open-source collaboration,
                or a technical inquiry, feel free to drop a message.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#151B23] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {PROFILE.email}
                  </span>
                </div>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#151B23] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                    <span>januario-henrique</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </span>
                </div>
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#151B23] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">GitHub Profile</span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                    <span>@{PROFILE.githubUsername}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111827] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-[#151B23] flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {PROFILE.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-8">
                Your message is securely forwarded directly to my primary inbox.
              </p>

              {/* Status Banner */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-emerald-200">Message Received!</p>
                    <p className="text-xs mt-1 text-emerald-300/90">{statusMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <p className="text-xs">{statusMessage}</p>
                    {showMailtoFallback && (
                      <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-900/60 hover:bg-rose-800 text-rose-100 rounded text-xs font-medium transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in your Email Client instead</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Anti-spam honeypot field (hidden from legitimate users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_honeypot">Leave this blank</label>
                  <input
                    type="text"
                    id="_honeypot"
                    name="_honeypot"
                    tabIndex={-1}
                    value={formData._honeypot}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      disabled={submitting}
                      className={`w-full px-4 py-2.5 bg-[#151B23] border text-sm text-white rounded-xl placeholder-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.name ? "border-rose-500" : "border-white/10 hover:border-white/20"
                      } disabled:opacity-60`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      disabled={submitting}
                      className={`w-full px-4 py-2.5 bg-[#151B23] border text-sm text-white rounded-xl placeholder-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                        errors.email ? "border-rose-500" : "border-white/10 hover:border-white/20"
                      } disabled:opacity-60`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    disabled={submitting}
                    className={`w-full px-4 py-2.5 bg-[#151B23] border text-sm text-white rounded-xl placeholder-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.subject ? "border-rose-500" : "border-white/10 hover:border-white/20"
                    } disabled:opacity-60`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                  >
                    Message <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    disabled={submitting}
                    className={`w-full px-4 py-2.5 bg-[#151B23] border text-sm text-white rounded-xl placeholder-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-y ${
                      errors.message ? "border-rose-500" : "border-white/10 hover:border-white/20"
                    } disabled:opacity-60`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
