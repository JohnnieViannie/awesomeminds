import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

/* Brevo embedded-form endpoint, e.g. https://xxxx.sibforms.com/serve/MUIFA...
   Copy it from the `action` attribute of the form Brevo generates (Contacts > Forms > Share). */
const BREVO_FORM_URL = import.meta.env.VITE_BREVO_FORM_URL as string | undefined;

type Status = "idle" | "sending" | "done" | "error";

export function NewsletterSignup({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!BREVO_FORM_URL) {
      setStatus("error");
      setMessage("Sign-up isn't connected yet. Please try again soon.");
      return;
    }
    const data = new FormData(e.currentTarget);
    data.set("locale", "en");
    data.set("html_type", "simple");
    setStatus("sending");
    try {
      // Brevo's form endpoint doesn't send CORS headers, so the response is opaque; reaching it is the success signal
      await fetch(BREVO_FORM_URL, { method: "POST", mode: "no-cors", body: data });
      setStatus("done");
      setMessage("You're in. Check your inbox to confirm your subscription.");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const dark = tone === "dark";
  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)}>
      <div className={cn("flex flex-col sm:flex-row gap-2 p-1.5 rounded-3xl sm:rounded-full", dark ? "bg-white/10" : "bg-white shadow-soft border border-border")}>
        <label htmlFor={`newsletter-email-${tone}`} className="sr-only">
          Email address
        </label>
        <input
          id={`newsletter-email-${tone}`}
          type="email"
          name="EMAIL"
          required
          autoComplete="email"
          placeholder="Your email address"
          disabled={status === "sending"}
          className={cn(
            "flex-1 min-w-0 bg-transparent px-5 py-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent",
            dark ? "text-white placeholder:text-white/60" : "text-foreground placeholder:text-muted-foreground"
          )}
        />
        {/* Brevo's honeypot: must stay empty */}
        <input type="text" name="email_address_check" defaultValue="" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            "px-6 py-3 rounded-full font-heading font-bold transition-colors disabled:opacity-60",
            "bg-accent text-white hover:bg-accent/90"
          )}
        >
          {status === "sending" ? "Signing up…" : "Subscribe"}
        </button>
      </div>
      <p
        role="status"
        className={cn(
          "min-h-[1.5rem] mt-2 px-4 text-sm",
          status === "error" ? (dark ? "text-pink" : "text-destructive") : dark ? "text-white/80" : "text-muted-foreground"
        )}
      >
        {message}
      </p>
    </form>
  );
}
