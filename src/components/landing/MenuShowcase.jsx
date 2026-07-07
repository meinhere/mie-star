import React from "react";
import { motion } from "framer-motion";
import menuShowcaseImage from "@/assets/menu_showcase.jpeg";

export default function MenuShowcase() {
    return (
        <section id="menu" className="bg-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-12">
                    <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase">
                        The Flavor Gallery
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl text-[#3D1F00] mt-4 leading-none">
                        Crafted to <em>crave.</em>
                    </h2>
                    <p className="mt-4 text-[#3D1F00]/60 max-w-xl">
                        Autentik bumbu Indonesia — every dish paired with the
                        perfect sip from Star Moment.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl overflow-hidden shadow-2xl border border-[#FF6B00]/20 w-100 h-100"
                >
                    <img
                        src={menuShowcaseImage}
                        alt="Mie Star Menu"
                        className="w-full h-auto object-cover block"
                    />
                </motion.div>
            </div>
        </section>
    );
}
