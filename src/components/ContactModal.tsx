import { motion, AnimatePresence } from "motion/react";
import { Send } from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";
import type { Dictionary } from "@/i18n";

export function ContactModal({
  isOpen,
  onClose,
  content,
}: {
  isOpen: boolean;
  onClose: () => void;
  content: Dictionary["contact"];
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-[#121214] p-8 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2
                id="contact-modal-title"
                className="text-xl font-bold text-white"
              >
                {content.modalTitle}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer text-xl text-slate-500 hover:text-white"
                aria-label={content.closeLabel}
              >
                ×
              </button>
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <div className="bg-accent-soft text-accent mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <Send className="ml-1 h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-white">
                  {content.successTitle}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {content.successDescription}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  id="name"
                  type="text"
                  required
                  className="focus:border-accent w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  placeholder={content.namePlaceholder}
                />
                <input
                  id="email"
                  type="email"
                  required
                  className="focus:border-accent w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  placeholder={content.emailPlaceholder}
                />
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="focus:border-accent w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                  placeholder={content.messagePlaceholder}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-accent-strong mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-xs font-bold tracking-widest text-black uppercase disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/25 border-t-black" />
                  ) : (
                    <>{content.submitLabel}</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
