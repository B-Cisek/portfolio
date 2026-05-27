import { motion, AnimatePresence } from "motion/react";
import { Send } from "lucide-react";
import { useState, useEffect, useRef, type FormEvent } from "react";
import type { Dictionary } from "@/i18n";

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-accent focus:bg-white/6";
const turnstileSiteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;
const invalidInputClassName =
  "border-red-500/60 bg-red-500/8 focus:border-red-400";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactField = keyof ContactFormValues;
type FieldErrors = Partial<Record<ContactField, string>>;

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "flexible" | "compact";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

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

    setIsSubmitting(false);
    setSuccess(false);
    setErrorMessage(null);
    setFieldErrors({});
    setTurnstileToken(null);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !turnstileSiteKey || !turnstileContainerRef.current) return;

    let isCancelled = false;
    let retryTimeout: number | null = null;

    const renderWidget = () => {
      if (isCancelled || !turnstileContainerRef.current) return;

      if (!window.turnstile) {
        retryTimeout = window.setTimeout(renderWidget, 250);
        return;
      }

      turnstileWidgetIdRef.current = window.turnstile.render(
        turnstileContainerRef.current,
        {
          sitekey: turnstileSiteKey,
          theme: "dark",
          size: "flexible",
          callback: (token) => {
            setTurnstileToken(token);
            setErrorMessage((currentError) =>
              currentError === content.turnstileError ? null : currentError,
            );
          },
          "expired-callback": () => {
            setTurnstileToken(null);
          },
          "error-callback": () => {
            setTurnstileToken(null);
          },
        },
      );
    };

    renderWidget();

    return () => {
      isCancelled = true;

      if (retryTimeout) {
        window.clearTimeout(retryTimeout);
      }

      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, [content.turnstileError, isOpen]);

  const resetTurnstile = () => {
    setTurnstileToken(null);

    if (turnstileWidgetIdRef.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  };

  const validateField = (field: ContactField, value: string) => {
    if (field === "name") {
      if (!value) return content.nameRequiredError;
      if (value.length < 2 || value.length > 50)
        return content.nameInvalidError;
      return null;
    }

    if (field === "email") {
      if (!value) return content.emailRequiredError;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return content.emailInvalidError;
      }
      return null;
    }

    if (!value) return content.messageRequiredError;
    if (value.length < 10 || value.length > 5000) {
      return content.messageInvalidError;
    }
    return null;
  };

  const setFieldError = (field: ContactField, value: string) => {
    const error = validateField(field, value.trim());

    setFieldErrors((currentErrors) => {
      if (!error && !currentErrors[field]) return currentErrors;

      return {
        ...currentErrors,
        [field]: error ?? undefined,
      };
    });
  };

  const applyServerFieldErrors = (
    errors: Partial<Record<ContactField | "turnstileToken", string>>,
  ) => {
    setFieldErrors({
      name: errors.name,
      email: errors.email,
      message: errors.message,
    });

    if (errors.turnstileToken) {
      setErrorMessage(content.turnstileError);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: ContactFormValues & { turnstileToken: string | null } = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      turnstileToken,
    };

    const nextFieldErrors: FieldErrors = {
      name: validateField("name", payload.name) ?? undefined,
      email: validateField("email", payload.email) ?? undefined,
      message: validateField("message", payload.message) ?? undefined,
    };

    setFieldErrors(nextFieldErrors);

    if (
      nextFieldErrors.name ||
      nextFieldErrors.email ||
      nextFieldErrors.message
    ) {
      setErrorMessage(content.validationError);
      return;
    }

    if (!payload.turnstileToken) {
      setErrorMessage(content.turnstileError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        resetTurnstile();
        const responseBody = (await response.json().catch(() => null)) as {
          fieldErrors?: Partial<
            Record<ContactField | "turnstileToken", string>
          >;
        } | null;

        if (responseBody?.fieldErrors) {
          applyServerFieldErrors(responseBody.fieldErrors);
        }

        throw new Error("Request failed");
      }

      form.reset();
      setFieldErrors({});
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch {
      setIsSubmitting(false);
      setErrorMessage(content.errorDescription);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            aria-describedby="contact-modal-description"
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-[#121214] shadow-2xl sm:rounded-[36px]"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="bg-accent/12 absolute top-0 right-0 h-72 w-72 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
            </div>

            <div className="relative border-b border-white/8 px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <h2
                    id="contact-modal-title"
                    className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                  >
                    {content.modalTitle}
                  </h2>
                  <p
                    id="contact-modal-description"
                    className="mt-2 max-w-xl text-sm leading-6 whitespace-pre-line text-slate-400"
                  >
                    {content.modalDescription}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  aria-label={content.closeLabel}
                >
                  ×
                </button>
              </div>
            </div>

            <div className="relative max-h-[calc(100vh-2rem)] overflow-y-auto">
              {success ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full flex flex-col items-center px-6 py-16 text-center sm:px-8"
                >
                  <div className="bg-accent-soft text-accent mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                    <Send className="ml-1 h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-medium text-white">
                    {content.successTitle}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-slate-400">
                    {content.successDescription}
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 px-5 py-5 sm:px-7 sm:py-7"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-200"
                      >
                        {content.nameLabel}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={100}
                        autoComplete="name"
                        className={`${inputClassName} ${fieldErrors.name ? invalidInputClassName : ""}`}
                        placeholder={content.namePlaceholder}
                        onBlur={(event) =>
                          setFieldError("name", event.currentTarget.value)
                        }
                        onChange={(event) => {
                          if (fieldErrors.name) {
                            setFieldError("name", event.currentTarget.value);
                          }
                        }}
                        aria-invalid={fieldErrors.name ? "true" : "false"}
                        aria-describedby={
                          fieldErrors.name ? "contact-name-error" : undefined
                        }
                      />
                      {fieldErrors.name ? (
                        <p
                          id="contact-name-error"
                          className="text-sm text-red-300"
                        >
                          {fieldErrors.name}
                        </p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-slate-200"
                      >
                        {content.emailLabel}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={`${inputClassName} ${fieldErrors.email ? invalidInputClassName : ""}`}
                        placeholder={content.emailPlaceholder}
                        onBlur={(event) =>
                          setFieldError("email", event.currentTarget.value)
                        }
                        onChange={(event) => {
                          if (fieldErrors.email) {
                            setFieldError("email", event.currentTarget.value);
                          }
                        }}
                        aria-invalid={fieldErrors.email ? "true" : "false"}
                        aria-describedby={
                          fieldErrors.email ? "contact-email-error" : undefined
                        }
                      />
                      {fieldErrors.email ? (
                        <p
                          id="contact-email-error"
                          className="text-sm text-red-300"
                        >
                          {fieldErrors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-slate-200"
                    >
                      {content.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      minLength={10}
                      maxLength={5000}
                      className={`${inputClassName} min-h-[180px] resize-none ${fieldErrors.message ? invalidInputClassName : ""}`}
                      placeholder={content.messagePlaceholder}
                      onBlur={(event) =>
                        setFieldError("message", event.currentTarget.value)
                      }
                      onChange={(event) => {
                        if (fieldErrors.message) {
                          setFieldError("message", event.currentTarget.value);
                        }
                      }}
                      aria-invalid={fieldErrors.message ? "true" : "false"}
                      aria-describedby={
                        fieldErrors.message
                          ? "contact-message-error"
                          : undefined
                      }
                    />
                    {fieldErrors.message ? (
                      <p
                        id="contact-message-error"
                        className="text-sm text-red-300"
                      >
                        {fieldErrors.message}
                      </p>
                    ) : null}
                  </div>
                  {errorMessage ? (
                    <div
                      role="alert"
                      className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100"
                    >
                      <p className="font-medium">{content.errorTitle}</p>
                      <p className="mt-1 text-red-100/80">{errorMessage}</p>
                    </div>
                  ) : null}
                  <div ref={turnstileContainerRef} />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent-strong flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-xs font-bold tracking-widest text-black uppercase transition disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/25 border-t-black" />
                        <span>{content.submitPendingLabel}</span>
                      </>
                    ) : (
                      <>{content.submitLabel}</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
