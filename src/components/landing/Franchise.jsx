import React, { useState } from "react";
import { motion } from "framer-motion";
import { pushDataLayerEvent } from "@/lib/dataLayer";
import {
    Check,
    ArrowRight,
    FileText,
    MessageSquare,
    PenTool,
    MapPinned,
    GraduationCap,
    PartyPopper,
} from "lucide-react";

const PACKAGES = [
    {
        id: "mie",
        name: "Mie Star",
        subtitle: "Noodle-only outlet",
        normal: "288.000.000",
        program: "235.000.000",
        saving: "53 juta",
        color: "#FF6B00",
        highlights: [
            "Franchise Fee GRATIS 3 tahun",
            "Management Fee 0 (20 mitra pertama)",
            "Training 0 (20 mitra pertama)",
            "Royalty hanya 5%",
        ],
    },
    {
        id: "combo",
        name: "Mie Star + Star Moment",
        subtitle: "Dual-brand flagship",
        featured: true,
        normal: "398.000.000",
        program: "320.000.000",
        saving: "78 juta",
        color: "#3D1F00",
        highlights: [
            "Franchise Fee GRATIS 3 tahun",
            "Dual-brand synergy & cross-selling",
            "Equipment & desain support",
            "Bahan baku awal lengkap",
        ],
    },
    {
        id: "star",
        name: "Star Moment",
        subtitle: "Beverage-only kiosk",
        normal: "181.000.000",
        program: "128.000.000",
        saving: "60 juta",
        color: "#7A4F1E",
        highlights: [
            "Franchise Fee GRATIS 3 tahun",
            "Low CAPEX, high traffic potential",
            "Coffee & milk tea SOP lengkap",
            "Support dari central kitchen",
        ],
    },
];

const STEPS = [
    { icon: FileText, label: "Pengajuan", desc: "Isi form minat franchise." },
    {
        icon: MessageSquare,
        label: "Konsultasi",
        desc: "Diskusi kebutuhan & lokasi.",
    },
    { icon: PenTool, label: "Perjanjian", desc: "Konfirmasi & tanda tangan." },
    {
        icon: MapPinned,
        label: "Tinjau Lokasi",
        desc: "Survey & desain outlet.",
    },
    {
        icon: GraduationCap,
        label: "Pelatihan",
        desc: "Training tim sebelum buka.",
    },
    {
        icon: PartyPopper,
        label: "Grand Opening",
        desc: "Peresmian & dukungan lanjutan.",
    },
];

function InvestRow({ label, a, b, c, bold = "" }) {
    return (
        <div
            className={`grid grid-cols-4 gap-3 px-5 py-3 text-sm ${bold ? "bg-[#FFD700]/20 font-bold" : ""}`}
        >
            <div className="text-white/80">{label}</div>
            <div className="text-white/50">{a}</div>
            <div className="text-[#FFD700] font-semibold">{b}</div>
            <div className="text-white/50">{c}</div>
        </div>
    );
}

export default function Franchise() {
    const [selected, setSelected] = useState("combo");

    return (
        <section
            id="franchise"
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ background: "#3D1F00" }}
        >
            <div className="absolute inset-0 kinetic-grid opacity-20 pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <span className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase">
                            The Star Blueprint
                        </span>
                        <h2 className="font-display text-5xl md:text-7xl text-white mt-4 leading-none">
                            Build your own
                            <br />
                            <em className="text-[#FFD700]">star moment.</em>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:col-span-5 text-white/70 text-lg leading-relaxed self-end"
                    >
                        Gabung sebagai mitra Mie Star × Star Moment. Deposit Rp
                        2.000.000 untuk kunci slot 20 mitra pertama —{" "}
                        <span className="text-[#FFD700] font-bold">
                            fully refundable
                        </span>
                        .
                    </motion.p>
                </div>

                {/* Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
                    {PACKAGES.map((p, i) => {
                        const isSelected = selected === p.id;
                        return (
                            <motion.button
                                key={p.id}
                                onClick={() => {
                                    setSelected(p.id);
                                    pushDataLayerEvent(
                                        "franchise_package_select",
                                        {
                                            package_id: p.id,
                                            package_name: p.name,
                                        },
                                    );
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`text-left relative p-8 rounded-3xl border-2 transition-all ${p.featured ? "md:scale-105" : ""}`}
                                style={{
                                    background: isSelected
                                        ? p.color
                                        : "rgba(255,255,255,0.05)",
                                    borderColor: isSelected
                                        ? p.color
                                        : "rgba(255,255,255,0.12)",
                                }}
                            >
                                {p.featured && (
                                    <div
                                        className={`absolute -top-3 left-8 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${isSelected ? "bg-[#FFD700] text-[#3D1F00]" : "bg-[#FF6B00] text-white"}`}
                                    >
                                        Most Popular
                                    </div>
                                )}
                                <div
                                    className={`text-xs font-bold uppercase tracking-widest mb-2 ${isSelected ? "text-white/70" : "text-[#FFD700]"}`}
                                >
                                    {p.subtitle}
                                </div>
                                <div className="font-display text-3xl text-white mb-6">
                                    {p.name}
                                </div>
                                <div className="mb-6">
                                    <div className="text-xs line-through text-white/30">
                                        Rp {p.normal}
                                    </div>
                                    <div className="font-display text-4xl text-white leading-none mt-1">
                                        Rp {p.program}
                                    </div>
                                    <div className="text-xs mt-2 font-bold text-[#FFD700]">
                                        Potongan {p.saving}
                                    </div>
                                </div>
                                <ul className="space-y-2.5">
                                    {p.highlights.map((h) => (
                                        <li
                                            key={h}
                                            className="flex items-start gap-2 text-sm text-white/80"
                                        >
                                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FFD700]" />
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Breakdown table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border border-[#FF6B00]/30 rounded-3xl overflow-hidden"
                >
                    <div className="grid grid-cols-4 gap-3 px-5 py-4 text-xs uppercase tracking-widest bg-[#FF6B00]/20">
                        <div className="text-[#FFD700] font-bold">Item</div>
                        <div className="text-white/50">Normal</div>
                        <div className="text-[#FFD700] font-bold">Program</div>
                        <div className="text-white/50">Note</div>
                    </div>
                    <div className="divide-y divide-white/5">
                        <InvestRow
                            label="Franchise Fee"
                            a="Rp 25–50 jt"
                            b="Rp 0"
                            c="Gratis 3 tahun"
                        />
                        <InvestRow
                            label="Management Fee"
                            a="Rp 20 jt"
                            b="Rp 0"
                            c="20 mitra pertama"
                        />
                        <InvestRow
                            label="Deposit"
                            a="Rp 20 jt"
                            b="Rp 20 jt"
                            c="Refundable"
                        />
                        <InvestRow
                            label="Peralatan"
                            a="Rp 8–70 jt"
                            b="Sama"
                            c="Sesuai paket"
                        />
                        <InvestRow
                            label="Perlengkapan"
                            a="Rp 65–160 jt"
                            b="Sama"
                            c="Sesuai paket"
                        />
                        <InvestRow
                            label="Bahan Baku Awal"
                            a="Rp 30–65 jt"
                            b="Sama"
                            c="Stok awal"
                        />
                        <InvestRow
                            label="Training"
                            a="Rp 2 jt"
                            b="Rp 0"
                            c="20 mitra pertama"
                        />
                        <InvestRow
                            label="Desain"
                            a="Rp 6 jt"
                            b="Rp 0"
                            c="20 mitra pertama"
                        />
                    </div>
                    <div className="px-5 py-5 bg-[#FF6B00]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="text-sm text-white/70">
                            Periode kontrak{" "}
                            <span className="text-[#FFD700] font-bold">
                                3 tahun
                            </span>{" "}
                            · Royalty{" "}
                            <span className="text-[#FFD700] font-bold">5%</span>
                        </div>
                        <a
                            href="#contact"
                            onClick={() =>
                                pushDataLayerEvent("cta_click", {
                                    location: "franchise",
                                    label: "Claim Program Slot",
                                    target: "#contact",
                                })
                            }
                            className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#e55e00] transition"
                        >
                            Claim Program Slot{" "}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Process timeline */}
                <div className="mt-24">
                    <span className="text-[#FFD700] text-xs font-bold tracking-[0.3em] uppercase">
                        Tahapan Franchise
                    </span>
                    <h3 className="font-display text-4xl md:text-5xl text-white mt-3 mb-12">
                        From inquiry to <em>grand opening.</em>
                    </h3>
                    <div className="relative">
                        <div
                            className="absolute top-10 left-0 right-0 hidden md:block h-px"
                            style={{
                                background:
                                    "linear-gradient(90deg, transparent, #FF6B00, #FFD700, transparent)",
                            }}
                        />
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                            {STEPS.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                    }}
                                    className="text-center"
                                >
                                    <div
                                        className="mx-auto w-20 h-20 rounded-full flex items-center justify-center relative z-10 mb-4 border-2 border-[#FF6B00]"
                                        style={{ background: "#3D1F00" }}
                                    >
                                        <s.icon className="w-7 h-7 text-[#FFD700]" />
                                    </div>
                                    <div className="text-[#FF6B00] text-xs font-bold tracking-widest mb-1">
                                        0{i + 1}
                                    </div>
                                    <div className="font-bold text-white mb-1 text-sm">
                                        {s.label}
                                    </div>
                                    <div className="text-xs text-white/50 leading-snug">
                                        {s.desc}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
