/**
 * lib/leadApi.js
 * Call this from any component to submit the lead form.
 */

export async function submitLeadForm(formData) {
  const payload = {
    name: formData.name,
    email: formData.email,
    number: formData.number,
    company_name: formData.company_name,
    message: formData.message || "",
    source_page: window.location.pathname, // auto-captures current page path
  };

  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    // Throw so the calling component can handle it
    throw { status: res.status, ...data };
  }

  return data; // { success: true, message: "...", id: 42 }
}

/* ── Usage example inside any component ──────────────────────────────────────

"use client";
import { useState } from "react";
import { submitLeadForm } from "@/lib/leadApi";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", number: "",
    company_name: "", message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitLeadForm(form);
      setStatus({ type: "success", message: res.message });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name"         onChange={handleChange} placeholder="Name"         required />
      <input name="email"        onChange={handleChange} placeholder="Email"        required />
      <input name="number"       onChange={handleChange} placeholder="Phone"        required />
      <input name="company_name" onChange={handleChange} placeholder="Company Name" required />
      <textarea name="message"   onChange={handleChange} placeholder="Message" />
      <button type="submit">Submit</button>
      {status && <p>{status.message}</p>}
    </form>
  );
}

─────────────────────────────────────────────────────────────────────────── */
