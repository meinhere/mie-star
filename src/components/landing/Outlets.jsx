import React from "react";
import { motion } from "framer-motion";
import { MapPin, TrendingUp } from "lucide-react";

const OUTLETS = [
    {
        name: "Patra Jasa Office Tower",
        img: "https://media.base44.com/images/public/69e594c805887fc699edc09a/92c6a035a_Screenshot2026-04-20at101301AM.png",
    },
    {
        name: "Melawai - Blok M",
        img: "https://media.base44.com/images/public/69e594c805887fc699edc09a/72bd79da5_Screenshot2026-04-20at101316AM.png",
    },
    {
        name: "South Quarter",
        img: "https://media.base44.com/images/public/69e594c805887fc699edc09a/bd452018d_Screenshot2026-04-20at101322AM.png",
    },
    {
        name: "Tanjung Duren",
        img: "https://media.base44.com/images/public/69e594c805887fc699edc09a/eda37f95a_Screenshot2026-04-20at101329AM.png",
    },
    {
        name: "Atma Jaya",
        img: "https://media.base44.com/images/public/69e594c805887fc699edc09a/d44bd5168_Screenshot2026-04-20at101337AM.png",
    },
    {
        name: "Fatmawati",
        img: "https://media.base44.com/images/public/69e594c805887fc699edc09a/6e26ca2b8_Screenshot2026-04-21at20059PM.png",
    },
    {
        name: "Surya Kencana",
        img: "https://media.base44.com/images/public/69e594c805887fc699edc09a/bb3bf764c_Screenshot2026-04-21at20109PM.png",
    },
    {
        name: "Jembatan Lima",
        img: "https://media.base44.com/images/public/69e594c805887fc699edc09a/bc35750f3_Screenshot2026-04-21at22605PM.png",
    },
];

export default function Outlets() {
    return (
        <section
            id="outlets"
            className="bg-[#FAF7F2] py-24 md:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
                    <div>
                        <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase">
                            Our Footprint
                        </span>
                        <h2 className="font-display text-5xl md:text-7xl text-[#3D1F00] mt-4 leading-none">
                            <span className="text-[#FF6B00]">10 Stores</span>
                            <br />
                            <em>Across Jakarta.</em>
                        </h2>
                    </div>
                    <div className="flex gap-4 flex-col sm:flex-row">
                        <div
                            className="p-6 rounded-2xl text-white text-center min-w-[150px]"
                            style={{ background: "#FF6B00" }}
                        >
                            <div className="font-display text-4xl font-bold">
                                10
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-90">
                                Active Outlets
                            </div>
                        </div>
                        <div
                            className="p-6 rounded-2xl text-[#3D1F00] text-center min-w-[150px]"
                            style={{ background: "#FFD700" }}
                        >
                            <div className="font-display text-4xl font-bold">
                                100
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider mt-1 opacity-80">
                                Target 2026
                            </div>
                        </div>
                    </div>
                </div>

                {/* Outlet photo grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {OUTLETS.map((o, i) => (
                        <motion.div
                            key={o.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                        >
                            <div
                                className={`${i === 0 ? "aspect-square" : "aspect-video"} overflow-hidden`}
                            >
                                <img
                                    src={o.img}
                                    alt={o.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#3D1F00]/80 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-[#FFD700] flex-shrink-0" />
                                <span className="text-white font-bold text-xs md:text-sm truncate">
                                    {o.name}
                                </span>
                            </div>
                            {o.name.includes("Upcoming") && (
                                <div className="absolute top-3 right-3 bg-[#FF6B00] text-white text-[10px] font-bold uppercase px-2 py-1 rounded-full">
                                    Coming Soon
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Revenue callout */}
                <motion.div
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
                </motion.div>
            </div>
        </section>
    );
}
