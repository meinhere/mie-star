import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Eye, Store } from "lucide-react";

function CountUp({ end, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      setVal(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  const display =
    end >= 1000000
      ? (val / 1000000).toFixed(1) + "M"
      : end >= 1000
      ? Math.round(val / 1000) + "K"
      : Math.round(val);

  return <span ref={ref}>{display}{suffix}</span>;
}

const STATS = [
  { icon: Store, label: "Outlets Aktif", value: 10, suffix: "+", accent: "orange" },
  { icon: TrendingUp, label: "Total Sales", value: 300000, suffix: "+", accent: "yellow" },
  { icon: Eye, label: "Views / Bulan", value: 7500000, suffix: "", accent: "brown" },
  { icon: Users, label: "Community Leaders", value: 1000, suffix: "+", accent: "orange" },
];

export default function BrandStrength() {
  return (
    <section className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase">
            Kekuatan Brand
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-[#3D1F00] mt-4 leading-none">
            Numbers that <em>speak.</em>
          </h2>
          <p className="text-[#3D1F00]/60 mt-5 text-lg">
            Brand yang tumbuh cepat, viral di Jakarta, dan didukung komunitas loyal — dari pelanggan harian hingga celebrity marketing.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 md:p-8 rounded-3xl overflow-hidden"
              style={{
                background: s.accent === "orange" ? "#FF6B00" : s.accent === "yellow" ? "#FFD700" : "#3D1F00",
                color: s.accent === "yellow" ? "#3D1F00" : "#fff",
              }}
            >
              <s.icon className="w-6 h-6 mb-4 opacity-80" />
              <div className="font-display text-4xl md:text-6xl leading-none">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider mt-3 opacity-80">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "93% Rating Positif", desc: "Konsisten unggul di 5 platform review & delivery." },
            { title: "Ekspansi Cepat", desc: "10 stores dalam kurang dari 1 tahun operasional." },
            { title: "Viral di Jakarta", desc: "10M+ celebrity marketing engagement per bulan." },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-white border-l-4 border-[#FF6B00] rounded-2xl shadow-md"
            >
              <div className="font-display text-2xl text-[#3D1F00] mb-2">{p.title}</div>
              <div className="text-sm text-[#3D1F00]/60">{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
