import React from "react";

export default function Footer() {
    return (
        <footer
            style={{ background: "#3D1F00" }}
            className="text-white border-t-4 border-[#FF6B00] py-12"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-5">
                            <img
                                src="https://media.base44.com/images/public/user_69e210d93ba76a81dd34ba72/7352662c1_LOGOMIESTAR_Logo1.png"
                                alt="Mie Star"
                                className="h-12 w-auto"
                            />
                            <div className="h-8 w-px bg-[#FF6B00]/50" />
                            <img
                                src="https://media.base44.com/images/public/69e594c805887fc699edc09a/a08a6ad51_StarMomentCoffeecha-logoblack-02.png"
                                alt="Star Moment"
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-white/60 text-sm max-w-md leading-relaxed">
                            Every bite, every sip, a star moment. Dual-brand F&B
                            dari Indonesia yang menghadirkan noodles autentik
                            dan coffee × chá premium untuk keseharian yang lebih
                            berarti.
                        </p>
                    </div>

                    <div>
                        <div className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-4">
                            Navigate
                        </div>
                        <ul className="space-y-2 text-sm text-white/70">
                            {[
                                "#brand|Brand Story",
                                "#menu|Menu",
                                "#outlets|Outlets",
                                "#franchise|Franchise",
                            ].map((l) => {
                                const [href, label] = l.split("|");
                                return (
                                    <li key={href}>
                                        <a
                                            href={href}
                                            className="hover:text-[#FFD700] transition"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <div className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-4">
                            Get In Touch
                        </div>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>franchisemiestarglobal@gmail.com</li>
                            <li>+62 821-1998-808</li>
                            <li>@franchisemiestarglobal</li>
                            <li className="pt-2">
                                <span className="text-[#FFD700] font-bold">
                                    2026 Goal:
                                </span>{" "}
                                100 Stores
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="w-full h-px my-10"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent, #FF6B00, #FFD700, transparent)",
                    }}
                />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <div>© 2025 PT Mie Star Global. All rights reserved.</div>
                    <div className="font-display italic text-[#FFD700]/70 text-base">
                        "Every Bite, Every Sip, A Star Moment!"
                    </div>
                </div>
            </div>
        </footer>
    );
}
