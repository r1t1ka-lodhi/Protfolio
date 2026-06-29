import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useHireModal } from "@/hooks/use-hire-modal";

// ─── Replace these with your EmailJS credentials ───────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "aBcDeFgHiJkLmNoP"
// ───────────────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

export function HireModal() {
  const { isOpen, closeModal } = useHireModal();
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<Status>("idle");
  const overlayRef            = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleClose = () => {
    if (status === "sending") return;
    closeModal();
    // Reset after animation
    setTimeout(() => { setName(""); setEmail(""); setSubject(""); setMessage(""); setStatus("idle"); }, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    name,
          from_email:   email,
          subject:      subject,
          message:      message,
          to_name:      "Ritika",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h2 className="text-base font-bold font-mono text-foreground">Get In Touch</h2>
                  <p className="text-xs text-muted-foreground font-mono">ritikalodhi3@gmail.com</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                disabled={status === "sending"}
                className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Success State */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-6 py-12 flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg font-bold font-mono text-foreground">Message Sent!</h3>
                <p className="text-sm text-muted-foreground font-mono">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2 px-6 py-2.5 bg-primary text-primary-foreground font-bold font-mono text-sm rounded-sm hover:bg-primary/90 transition-all"
                >
                  Close
                </button>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-6 py-12 flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-lg font-bold font-mono text-foreground">Something went wrong</h3>
                <p className="text-sm text-muted-foreground font-mono">
                  Please try emailing me directly at<br />
                  <a href="mailto:ritikalodhi3@gmail.com" className="text-primary hover:underline">
                    ritikalodhi3@gmail.com
                  </a>
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-6 py-2.5 border border-border text-muted-foreground font-mono text-sm rounded-sm hover:bg-muted transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase tracking-wide">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-background border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase tracking-wide">
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-background border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase tracking-wide">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project Opportunity / Collaboration"
                    className="w-full bg-background border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase tracking-wide">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Ritika, I'd love to discuss..."
                    className="w-full bg-background border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors font-mono resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold font-mono text-sm py-2.5 rounded-sm hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={status === "sending"}
                    className="px-4 py-2.5 border border-border text-muted-foreground font-mono text-sm rounded-sm hover:bg-muted hover:text-foreground transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
