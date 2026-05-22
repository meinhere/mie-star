import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
    const [hover, setHover] = useState(null);

    const mieWidth = hover === "mie" ? "60%" : hover === "star" ? "40%" : "50%";
    const starWidth =
        hover === "star" ? "60%" : hover === "mie" ? "40%" : "50%";

    return (
        <section
            id="top"
            className="relative min-h-screen pt-20 overflow-hidden"
        >
            {/* Split canvas */}
            <div className="absolute inset-0 flex">
                <motion.div
                    animate={{ width: mieWidth }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                    style={{
                        background:
                            "linear-gradient(135deg, #FF6B00 0%, #e55e00 100%)",
                    }}
                    onMouseEnter={() => setHover("mie")}
                    onMouseLeave={() => setHover(null)}
                >
                    <div className="absolute inset-0 noise-bg opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#3D1F00]/60" />
                </motion.div>
                <motion.div
                    animate={{ width: starWidth }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                    style={{
                        background:
                            "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                    }}
                    onMouseEnter={() => setHover("star")}
                    onMouseLeave={() => setHover(null)}
                >
                    <div className="absolute inset-0 noise-bg opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#3D1F00]/40" />
                </motion.div>
            </div>

            {/* Center divider star emblem */}
            <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            >
                <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-2 border-white/40"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 50,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-3 rounded-full border border-white/20"
                    />
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#3D1F00] flex items-center justify-center shadow-[0_0_60px_rgba(61,31,0,0.5)]">
                        <Star className="w-7 h-7 md:w-10 md:h-10 text-[#FFD700] fill-[#FFD700]" />
                    </div>
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 min-h-[calc(100vh-5rem)] grid grid-cols-1 md:grid-cols-2">
                {/* Mie Star side */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20 md:py-0"
                >
                    <div className="mb-6">
                        <img
                            src="https://media.base44.com/images/public/user_69e210d93ba76a81dd34ba72/7352662c1_LOGOMIESTAR_Logo1.png"
                            alt="Mie Star"
                            className="h-20 md:h-28 w-auto drop-shadow-2xl"
                        />
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
                        Every Bite,
                        <br />
                        <em>A Star Moment.</em>
                    </h1>
                    <p className="mt-5 text-base md:text-lg text-white/90 max-w-md font-semibold drop-shadow">
                        Bold flavor, everyday moment. Mie autentik Indonesia —
                        hangat, konsisten, dan selalu bisa diandalkan.
                    </p>
                    <div className="mt-8">
                        <a
                            href="#menu"
                            className="group inline-flex items-center gap-3 bg-[#3D1F00] text-white px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#3D1F00]/80 transition shadow-xl"
                        >
                            Explore Flavors
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </a>
                    </div>
                </motion.div>

                {/* Star Moment side */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20 md:py-0 md:items-end md:text-right"
                >
                    <div className="mb-6">
                        <img
                            src="https://media.base44.com/images/public/69e594c805887fc699edc09a/a08a6ad51_StarMomentCoffeecha-logoblack-02.png"
                            alt="Star Moment"
                            className="h-20 md:h-28 w-auto drop-shadow-2xl"
                            style={{ filter: "brightness(0)" }}
                        />
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#3D1F00] leading-tight drop-shadow">
                        Sip Your
                        <br />
                        <em>Moment.</em>
                    </h1>
                    <p className="mt-5 text-base md:text-lg text-[#3D1F00]/90 max-w-md md:ml-auto font-semibold">
                        Coffee × Chá yang menemani ritme hidup urban — dari pagi
                        yang terburu-buru hingga sore yang santai.
                    </p>
                    <div className="mt-8 flex md:justify-end">
                        <a
                            href="#franchise"
                            className="group inline-flex items-center gap-3 bg-[#3D1F00] text-[#FFD700] px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#3D1F00]/80 transition shadow-xl"
                        >
                            Own a Franchise
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent"
                />
            </div>
        </section>
    );
}
