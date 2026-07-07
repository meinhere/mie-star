import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoMieStar from "@/assets/logo_miestar.png";

const LINKS = [
    { label: "Brand", href: "#brand" },
    { label: "Menu", href: "#menu" },
    { label: "Outlets", href: "#outlets" },
    { label: "Franchise", href: "#franchise" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-[#3D1F00]/95 backdrop-blur-xl border-b border-[#FF6B00]/30"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
                {/* Dual-brand logo */}
                <a
                    href="#top"
                    className="flex items-center gap-3 flex-shrink-0"
                >
                    <img
                        src={logoMieStar}
                        alt="Mie Star"
                        className="h-11 w-auto"
                    />
                </a>

                <nav className="hidden lg:flex items-center gap-10">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm font-bold tracking-wider uppercase text-white/80 hover:text-[#FFD700] transition-colors relative group"
                        >
                            {l.label}
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B00] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#franchise"
                        className="hidden lg:inline-flex items-center gap-2 bg-[#FF6B00] text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#e55e00] transition shadow-lg"
                    >
                        Own a Franchise
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden text-white p-2"
                        aria-label="Menu"
                    >
                        {open ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden bg-[#3D1F00] border-t border-[#FF6B00]/20"
                    >
                        <nav className="px-6 py-6 flex flex-col gap-5">
                            {LINKS.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="text-white/80 uppercase tracking-wider text-sm font-bold hover:text-[#FFD700]"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#franchise"
                                onClick={() => setOpen(false)}
                                className="bg-[#FF6B00] text-white px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wider text-center"
                            >
                                Own a Franchise
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
