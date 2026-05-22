import React from "react";
import { motion } from "framer-motion";

const SERIES = [
    {
        name: "Aren Latte Series",
        desc: "Classic, Caramel, Vanilla, Sea Salt",
        price: "22K — 25K",
        img: "/__generating__/img_6f7b40aa6d1c.png",
    },
    {
        name: "Special Cold Coffee",
        desc: "Cafe Mocha, Coconut Latte, Lemonade Americano",
        price: "22K — 33K",
        img: "/__generating__/img_57b6136a4f73.png",
    },
    {
        name: "Milk Tea Series",
        desc: "Signature, Jasmine, Peach Oolong, Camellia",
        price: "18K — 26K",
        img: "/__generating__/img_b3b9dbdd276b.png",
    },
    {
        name: "Lemon Tea Series",
        desc: "Signature, Peach Oolong, Jasmine",
        price: "15K — 25K",
        img: "/__generating__/img_8f99c5d03a39.png",
    },
    {
        name: "Coconut Ice Shaken",
        desc: "Mango, Lychee Lime, Strawberry, Orange",
        price: "25K",
        img: "/__generating__/img_92927c3220b6.png",
    },
];

export default function StarMomentSection() {
    return (
        <section
            className="relative py-24 md:py-32 overflow-hidden"
            style={{ background: "#3D1F00" }}
        >
            <div className="absolute inset-0 kinetic-grid opacity-20 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                {/* Brand header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://media.base44.com/images/public/69e594c805887fc699edc09a/a08a6ad51_StarMomentCoffeecha-logoblack-02.png"
                            alt="Star Moment Coffee × Chá"
                            className="h-24 md:h-36 w-auto mb-6"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                        <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">
                            Where coffee meets chá,
                            <br />
                            <em className="text-[#FFD700]">
                                the world meets you.
                            </em>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <div className="p-6 rounded-2xl border border-[#FF6B00]/30 bg-white/5 mb-5">
                            <div className="text-[#FFD700] text-xs font-bold tracking-widest uppercase mb-2">
                                Brand Proposition
                            </div>
                            <div className="font-display text-2xl text-white mb-2">
                                "Sip Your Moment"
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Star Moment menghadirkan milk tea, cha, dan kopi
                                sebagai bagian dari momen kecil yang berarti.
                                Dengan beragam pilihan rasa — creamy,
                                refreshing, hingga bold — setiap minuman
                                dirancang untuk menemani ritme hidup urban.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl border border-[#FFD700]/30 bg-[#FFD700]/10">
                            <div className="text-[#FFD700] text-xs font-bold tracking-widest uppercase mb-2">
                                Brand Vision
                            </div>
                            <div className="font-display text-2xl text-white mb-2">
                                "Your Daily Escape, In Every Cup"
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Star Moment menjadi ruang singkat untuk pause —
                                membuat hari terasa lebih ringan, dalam setiap
                                tegukan.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div
                    className="w-full h-px mb-14"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent, #FF6B00, #FFD700, transparent)",
                    }}
                />

                {/* Menu image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl overflow-hidden shadow-2xl border border-[#FF6B00]/30"
                >
                    <img
                        src="https://media.base44.com/images/public/69e594c805887fc699edc09a/87e4f314f_Screenshot2026-04-21at23627PM.png"
                        alt="Star Moment Menu"
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
}
