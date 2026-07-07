import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import melawaiBlokM from "@/assets/outlets/melawai-blok-m.jpeg";
import petraOfficeTower from "@/assets/outlets/petra-office-tower.png";
import southQuarter from "@/assets/outlets/south-quarter.png";
import tanjungDuren from "@/assets/outlets/tanjung-duren.png";
import fatmawati from "@/assets/outlets/fatmawati.png";
import suryaKencana from "@/assets/outlets/surya-kencana.png";
import jembatanLima from "@/assets/outlets/jembatan-lima.png";

const OUTLETS = [
    {
        name: "Patra Jasa Office Tower",
        img: petraOfficeTower,
    },
    {
        name: "Melawai - Blok M",
        img: melawaiBlokM,
    },
    {
        name: "South Quarter",
        img: southQuarter,
    },
    {
        name: "Tanjung Duren",
        img: tanjungDuren,
    },
    {
        name: "Fatmawati",
        img: fatmawati,
    },
    {
        name: "Surya Kencana",
        img: suryaKencana,
    },
    {
        name: "Jembatan Lima",
        img: jembatanLima,
    },
];

export default function Outlets() {
    const [selected, setSelected] = useState(1);

    return (
        <section
            id="outlets"
            className="bg-[#3D1F00] py-24 md:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
                    {/* Left - flagship image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden col-span-3 order-2 md:order-1"
                    >
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl">
                            <img
                                src={OUTLETS[selected].img}
                                alt={OUTLETS[selected].name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute left-6 bottom-6 text-white">
                            <div className="text-xs text-[#FF6B00] font-bold uppercase tracking-widest">
                                Flagship Store
                            </div>
                            <div className="mt-2 text-2xl md:text-3xl font-bold flex gap-1 items-center">
                                <MapPin className="w-8 h-8 text-[#FF6B00] flex-shrink-0" />
                                {OUTLETS[selected].name}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - content */}
                    <div className="relative col-span-2 order-1 md:order-2">
                        <div className="flex justify-end mb-6">
                            <div className="flex gap-4">
                                <div className="p-4 rounded-2xl text-white text-center min-w-[120px] bg-[#FF6B00]">
                                    <div className="font-display text-2xl font-bold">
                                        7
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-90">
                                        Active Stores
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl text-[#3D1F00] text-center min-w-[120px] bg-[#FFD700]">
                                    <div className="font-display text-2xl font-bold">
                                        100
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-80">
                                        Target 2026
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase">
                                Our Footprint
                            </span>
                            <div className="font-display text-5xl md:text-7xl text-white">
                                <div className="flex items-baseline gap-2 md:-mb-3 md:-mt-6">
                                    <span className="text-[#FF6B00] text-7xl md:text-8xl">
                                        7
                                    </span>
                                    <span>Stores</span>
                                </div>
                                <span className="text-5xl md:text-6xl">
                                    Across Jakarta.
                                </span>
                            </div>
                        </div>

                        <p className="text-white/80 mb-8">
                            From neighborhood destinations to lifestyle hubs,
                            MIE STAR × STAR MOMENT continues expanding across
                            Jakarta with a scalable multi-brand concept.
                        </p>

                        <ul className="space-y-1">
                            {OUTLETS.map((o, i) => (
                                <li
                                    key={o.name}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => setSelected(i)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ")
                                            setSelected(i);
                                    }}
                                    className={`flex items-center gap-4 py-2 border-b border-white/10 cursor-pointer ${selected === i ? "text-[#FF6B00]" : "text-white/90"}`}
                                >
                                    <MapPin className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                                    <span
                                        className={`font-medium ${selected === i ? "font-bold" : ""}`}
                                    >
                                        {o.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Revenue callout */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-10 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
                    style={{ background: "#3D1F00" }}
                >
                    <div>
                        <div className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-2">
                            Omset per bulan · Melawai Blok M (Flagship)
                        </div>
                        <div className="font-display text-5xl md:text-6xl text-white font-bold">
                            ~Rp 300 Juta
                        </div>
                    </div>
                    <a
                        href="#franchise"
                        className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#e55e00] transition flex-shrink-0"
                    >
                        <TrendingUp className="w-5 h-5" />
                        Join the Network
                    </a>
                </motion.div> */}
            </div>
        </section>
    );
}
