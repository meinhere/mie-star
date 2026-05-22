import React from "react";

const ITEMS = [
    "Every Bite A Star Moment",
    "Bold Flavor",
    "Where Coffee Meets Chá",
    "Autentik Indonesia",
    "Sip Your Moment",
    "Daily Escape",
    "Bumbu Asli",
];

export default function Marquee() {
    return (
        <div className="bg-[#3D1F00] border-y-4 border-[#FF6B00] py-5 overflow-hidden">
            <div className="flex gap-12 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
                {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
                    <div key={i} className="flex items-center gap-12">
                        <span className="font-display italic text-2xl md:text-4xl text-white">
                            {t}
                        </span>
                        <span className="text-[#FFD700] text-2xl">✦</span>
                    </div>
                ))}
            </div>
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}
