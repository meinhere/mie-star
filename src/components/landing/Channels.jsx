import React from "react";
import { motion } from "framer-motion";
import {
    ShoppingBag,
    Utensils,
    Smartphone,
    Ticket,
    Terminal,
    Truck,
} from "lucide-react";

const CHANNELS = [
    { name: "ShopeeFood", icon: ShoppingBag, color: "#EE4D2D" },
    { name: "GoFood", icon: Utensils, color: "#27AE60" },
    { name: "GrabFood", icon: Truck, color: "#00B14F" },
    { name: "TikTokGo", icon: Smartphone, color: "#010101" },
    { name: "Qpon", icon: Ticket, color: "#E91E8C" },
    { name: "POS System", icon: Terminal, color: "#FF6B00" },
];

export default function Channels() {
    return (
        <section className="bg-white py-20 md:py-28 border-t border-[#3D1F00]/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="max-w-2xl mb-12">
                    <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase">
                        Channels & Systems
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl text-[#3D1F00] mt-3 leading-none">
                        Plug into a proven <em>ecosystem.</em>
                    </h2>
                    <p className="text-[#3D1F00]/60 mt-4">
                        Mitra franchise terhubung dengan delivery partners utama
                        dan POS system terintegrasi — operasional lebih lancar,
                        revenue lebih banyak.
                    </p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {CHANNELS.map((c, i) => (
                        <motion.div
                            key={c.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="aspect-square flex flex-col items-center justify-center gap-3 bg-[#FAF7F2] border-2 border-transparent rounded-2xl hover:border-[#FF6B00] hover:-translate-y-1 transition-all"
                        >
                            <c.icon
                                className="w-7 h-7"
                                style={{ color: c.color }}
                            />
                            <div className="text-xs font-bold text-[#3D1F00]/70 text-center">
                                {c.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
