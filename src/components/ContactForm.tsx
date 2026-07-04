"use client";

import { useState, type FormEvent } from "react";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import { button } from "../../styled-system/recipes";

const inputStyle = css({
  w: "full",
  px: "4",
  py: "3",
  fontSize: "sm",
  border: "1px solid",
  borderColor: "gray.300",
  borderRadius: "sm",
  _focus: { outline: "2px solid", outlineColor: "brand.blue", borderColor: "brand.blue" },
});

const labelStyle = css({
  fontSize: "sm",
  fontWeight: "600",
  color: "brand.navy",
  mb: "1.5",
  display: "block",
});

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ formType }: { formType: "general" | "career" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, formType }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className={css({ bg: "brand.blueLight", borderRadius: "md", p: "6", textAlign: "center" })}>
        <p className={css({ fontWeight: "700", color: "brand.navy" })}>Thank you — your message has been sent.</p>
        <p className={css({ mt: "1", fontSize: "sm", color: "muted" })}>We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={css({ display: "flex", flexDirection: "column", gap: "4" })}>
      <div className={flex({ direction: { base: "column", sm: "row" }, gap: "4" })}>
        <div className={css({ flex: 1 })}>
          <label className={labelStyle} htmlFor="name">Name</label>
          <input className={inputStyle} type="text" id="name" name="name" required />
        </div>
        <div className={css({ flex: 1 })}>
          <label className={labelStyle} htmlFor="email">Email</label>
          <input className={inputStyle} type="email" id="email" name="email" required />
        </div>
      </div>

      <div>
        <label className={labelStyle} htmlFor="phone">Phone (optional)</label>
        <input className={inputStyle} type="tel" id="phone" name="phone" />
      </div>

      {formType === "career" && (
        <div>
          <label className={labelStyle} htmlFor="position">Position of Interest</label>
          <input className={inputStyle} type="text" id="position" name="position" />
        </div>
      )}

      <div>
        <label className={labelStyle} htmlFor="message">
          {formType === "career" ? "Tell us about your experience" : "Message"}
        </label>
        <textarea className={inputStyle} id="message" name="message" rows={5} required />
      </div>

      {status === "error" && (
        <p className={css({ fontSize: "sm", color: "red.600" })}>{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={button({ visual: "solid", size: "lg" })}
        style={{ alignSelf: "flex-start", opacity: status === "submitting" ? 0.7 : 1 }}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
