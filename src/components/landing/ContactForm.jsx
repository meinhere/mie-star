import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, Camera } from "lucide-react";
const initialFormData = {
    full_name: "",
    email: "",
    phone: "",
    city: "",
    interest: "combo",
    message: "",
};

export default function ContactForm() {
    const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL;
    const [data, setData] = useState(initialFormData);
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState("");

    const onChange = (k) => (e) => setData({ ...data, [k]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");

        try {
            if (!contactApiUrl) {
                throw new Error(
                    "VITE_CONTACT_API_URL belum diisi di environment frontend.",
                );
            }

            const response = await fetch(contactApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const payload = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(
                    payload?.error || "Gagal mengirim inquiry. Coba lagi.",
                );
            }

            setDone(true);
            setData(initialFormData);
        } catch (submitError) {
            setError(
                submitError instanceof Error
                    ? submitError.message
                    : "Gagal mengirim inquiry. Coba lagi.",
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative py-24 md:py-32 overflow-hidden bg-[#FAF7F2]"
        >
            <div
                className="absolute top-0 right-0 w-80 h-80 rounded-bl-full opacity-10"
                style={{ background: "#FF6B00" }}
            />
            <div
                className="absolute bottom-0 left-0 w-60 h-60 rounded-tr-full opacity-10"
                style={{ background: "#FFD700" }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase">
                                Contact Us
                            </span>
                            <h2 className="font-display text-5xl md:text-7xl text-[#3D1F00] mt-4 leading-none">
                                Let's build
                                <br />
                                <em className="text-[#FF6B00]">
                                    moments together.
                                </em>
                            </h2>
                            <p className="mt-6 text-[#3D1F00]/70 text-lg">
                                Kirim minat franchise Anda — tim kami akan
                                menghubungi dalam 1×24 jam.
                            </p>

                            <div
                                className="w-48 h-1 rounded-full my-10"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #FF6B00, #FFD700)",
                                }}
                            />

                            <div className="space-y-5">
                                {[
                                    {
                                        icon: Mail,
                                        label: "Email",
                                        value: "franchisemiestarglobal@gmail.com",
                                        href: "mailto:franchisemiestarglobal@gmail.com",
                                    },
                                    {
                                        icon: Phone,
                                        label: "WhatsApp",
                                        value: "0821-1998-808",
                                        href: "https://wa.me/6282119998808",
                                    },
                                    {
                                        icon: Camera,
                                        label: "Instagram",
                                        value: "@franchisemiestarglobal",
                                        href: "https://instagram.com/franchisemiestarglobal",
                                    },
                                ].map(({ icon: Icon, label, value, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-11 h-11 rounded-full border-2 border-[#FF6B00]/30 flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white text-[#FF6B00] transition">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] uppercase tracking-widest text-[#3D1F00]/50 font-bold">
                                                {label}
                                            </div>
                                            <div className="font-bold text-sm text-[#3D1F00]">
                                                {value}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:col-span-7"
                    >
                        <div className="p-8 md:p-10 rounded-3xl bg-white shadow-2xl border border-[#FF6B00]/10">
                            {done ? (
                                <div className="py-20 text-center">
                                    <CheckCircle2 className="w-16 h-16 text-[#FF6B00] mx-auto mb-4" />
                                    <h3 className="font-display text-3xl text-[#3D1F00] mb-2">
                                        Terkirim!
                                    </h3>
                                    <p className="text-[#3D1F00]/60">
                                        Tim kami akan menghubungi Anda dalam
                                        1×24 jam.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={submit} className="space-y-5">
                                    <h3 className="font-display text-3xl text-[#3D1F00] mb-6">
                                        Franchise Inquiry
                                    </h3>
                                    {error ? (
                                        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                                            {error}
                                        </div>
                                    ) : null}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <Field
                                            label="Full Name"
                                            value={data.full_name}
                                            onChange={onChange("full_name")}
                                            required
                                        />
                                        <Field
                                            label="Email"
                                            type="email"
                                            value={data.email}
                                            onChange={onChange("email")}
                                            required
                                        />
                                        <Field
                                            label="WhatsApp"
                                            value={data.phone}
                                            onChange={onChange("phone")}
                                            required
                                        />
                                        <Field
                                            label="Target City"
                                            value={data.city}
                                            onChange={onChange("city")}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] uppercase tracking-widest text-[#3D1F00]/50 font-bold mb-2">
                                            I'm interested in
                                        </label>
                                        <select
                                            value={data.interest}
                                            onChange={onChange("interest")}
                                            className="w-full bg-[#FAF7F2] border-2 border-[#3D1F00]/10 text-[#3D1F00] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6B00] font-semibold"
                                        >
                                            <option value="mie">
                                                Mie Star Only — Rp 235 jt
                                            </option>
                                            <option value="combo">
                                                Mie Star + Star Moment — Rp 320
                                                jt
                                            </option>
                                            <option value="star">
                                                Star Moment Only — Rp 128 jt
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[11px] uppercase tracking-widest text-[#3D1F00]/50 font-bold mb-2">
                                            Message (optional)
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={data.message}
                                            onChange={onChange("message")}
                                            placeholder="Lokasi target, timeline, pertanyaan lainnya..."
                                            className="w-full bg-[#FAF7F2] border-2 border-[#3D1F00]/10 text-[#3D1F00] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6B00] resize-none placeholder:text-[#3D1F00]/30"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full inline-flex items-center justify-center gap-3 text-white py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition disabled:opacity-50"
                                        style={{ background: "#FF6B00" }}
                                    >
                                        {submitting
                                            ? "Sending…"
                                            : "Submit Franchise Inquiry"}
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Field({ label, ...rest }) {
    return (
        <div>
            <label className="block text-[11px] uppercase tracking-widest text-[#3D1F00]/50 font-bold mb-2">
                {label}
            </label>
            <input
                {...rest}
                className="w-full bg-[#FAF7F2] border-2 border-[#3D1F00]/10 text-[#3D1F00] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF6B00] font-semibold placeholder:text-[#3D1F00]/30"
            />
        </div>
    );
}
