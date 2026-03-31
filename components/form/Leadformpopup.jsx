"use client";

import { useState, useEffect, useCallback } from "react";
import { submitLeadForm } from "@/lib/leadApi";

const INITIAL_FORM = {
    name: "",
    email: "",
    number: "",
    company_name: "",
    message: "",
};

export default function LeadFormPopup({
    isOpen,
    onClose,
    title = "Get In Touch",
    subtitle = "Fill in your details and we'll get back to you shortly.",
}) {
    const [form, setForm] = useState(INITIAL_FORM);
    const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
    const [errorMsg, setErrorMsg] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") handleClose();
        };
        if (isOpen) document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen]);

    // Prevent body scroll when open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (status === "loading") return;
        setForm(INITIAL_FORM);
        setStatus(null);
        setErrorMsg("");
        setFieldErrors({});
        onClose();
    }, [status, onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear field error as user types
        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    // ── Frontend validation ───────────────────────────────────────────────────
    const validate = () => {
        const errors = {};

        if (!form.name.trim()) {
            errors.name = "Name is required";
        } else if (form.name.trim().length < 2) {
            errors.name = "Name must be at least 2 characters";
        }

        if (!form.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errors.email = "Enter a valid email address";
        }

        if (!form.number.trim()) {
            errors.number = "Phone number is required";
        } else if (!/^[+\d\s\-().]{7,20}$/.test(form.number)) {
            errors.number = "Enter a valid phone number";
        }

        if (!form.company_name.trim()) {
            errors.company_name = "Company name is required";
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Run frontend validation first
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        setStatus("loading");
        setErrorMsg("");
        setFieldErrors({});

        try {
            await submitLeadForm(form);
            setStatus("success");
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message || "Something went wrong. Please try again.");
            if (err.errors?.length) {
                const mapped = {};
                err.errors.forEach(({ field, message }) => {
                    mapped[field] = message;
                });
                setFieldErrors(mapped);
            }
        }
    };

    if (!isOpen) return null;

    // ── Input class helper ────────────────────────────────────────────────────
    const inputClass = (field) =>
        `w-full px-4 py-2.5 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 focus:border-orange-400 ${fieldErrors[field]
            ? "border-red-400 bg-red-50 focus:ring-red-300 focus:border-red-400"
            : "border-gray-200"
        }`;

    return (
        <>
            {/* Minimal animations only — not possible with pure Tailwind */}
            <style>{`
        @keyframes lf-spin { to { transform: rotate(360deg); } }
        @keyframes lf-slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes lf-pop {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        .lf-card { animation: lf-slide-up 0.28s cubic-bezier(0.16,1,0.3,1); }
        .lf-spinner {
          display: inline-block; width: 15px; height: 15px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff; border-radius: 50%;
          animation: lf-spin 0.7s linear infinite;
          vertical-align: middle; margin-right: 6px;
        }
        .lf-success-icon { animation: lf-pop 0.35s cubic-bezier(0.16,1,0.3,1); }
      `}</style>

            {/* ── Overlay ──────────────────────────────────────────────────────────── */}
            <div
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                onClick={(e) => e.target === e.currentTarget && handleClose()}
            >
                <div
                    className="lf-card bg-white rounded-2xl shadow-2xl w-full max-w-lg relative"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="lf-title"
                >
                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        aria-label="Close"
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-all text-sm font-medium"
                    >
                        ✕
                    </button>

                    {/* ── Success State ─────────────────────────────────────────────────── */}
                    {status === "success" ? (
                        <div className="flex flex-col items-center text-center py-12 px-8">
                            <div className="lf-success-icon w-16 h-16 rounded-full bg-green-50 border-2 border-green-400 flex items-center justify-center text-2xl text-green-500 mb-4">
                                ✓
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Thanks for reaching out. We'll get back to you within 24 hours.
                            </p>

                        </div>
                    ) : (
                        <div className="p-8">
                            {/* ── Header ──────────────────────────────────────────────────── */}
                            <h2
                                id="lf-title"
                                className="text-2xl font-bold text-gray-900 mb-2 tracking-tight"
                            >
                                {title}
                            </h2>
                            <p className="text-sm text-gray-400 mb-6 md:block hidden">{subtitle}</p>

                            {/* ── API Error Banner ─────────────────────────────────────────── */}
                            {status === "error" && errorMsg && (
                                <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-500 text-sm">
                                    ⚠ {errorMsg}
                                </div>
                            )}

                            {/* ── Form ────────────────────────────────────────────────────── */}
                            <form onSubmit={handleSubmit} noValidate>

                                {/* Name + Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                            Name <span className="text-orange-500">*</span>
                                        </label>
                                        <input
                                            className={inputClass("name")}
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                        />
                                        {fieldErrors.name && (
                                            <span className="text-xs text-red-500 mt-0.5">{fieldErrors.name}</span>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                            Phone <span className="text-orange-500">*</span>
                                        </label>
                                        <input
                                            className={inputClass("number")}
                                            name="number"
                                            value={form.number}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                        />
                                        {fieldErrors.number && (
                                            <span className="text-xs text-red-500 mt-0.5">{fieldErrors.number}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:mb-3">

                                    <div className="flex flex-col gap-1 mb-3">
                                        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                            Email <span className="text-orange-500">*</span>
                                        </label>
                                        <input
                                            className={inputClass("email")}
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                        />
                                        {fieldErrors.email && (
                                            <span className="text-xs text-red-500 mt-0.5">{fieldErrors.email}</span>
                                        )}
                                    </div>

                                    {/* Company Name */}
                                    <div className="flex flex-col gap-1 mb-3">
                                        <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                            Company Name <span className="text-orange-500">*</span>
                                        </label>
                                        <input
                                            className={inputClass("company_name")}
                                            name="company_name"
                                            value={form.company_name}
                                            onChange={handleChange}
                                            placeholder="Acme Pvt. Ltd."
                                        />
                                        {fieldErrors.company_name && (
                                            <span className="text-xs text-red-500 mt-0.5">{fieldErrors.company_name}</span>
                                        )}
                                    </div>
                                </div>
                                {/* Message */}
                                <div className="flex flex-col gap-1 mb-5">
                                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                        Message
                                    </label>
                                    <textarea
                                        className={`${inputClass("message")} resize-none md:h-24`}
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-orange-100"
                                >
                                    {status === "loading" ? (
                                        <><span className="lf-spinner" />Sending...</>
                                    ) : (
                                        "Send Message →"
                                    )}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}