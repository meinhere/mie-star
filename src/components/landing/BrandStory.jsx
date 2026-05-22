import React from "react";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section id="brand" className="relative bg-[#FAF7F2] py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-br-full opacity-10" style={{ background: "#FF6B00" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-tl-full opacity-10" style={{ background: "#FFD700" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-[#FF6B00] text-xs font-bold tracking-[0.3em] uppercase">
            Brand Story — Mie Star
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-[#3D1F00] mt-4">
            Born from a simple idea.
          </h2>
        </motion.div>

        <div className="w-full max-w-4xl h-px my-12" style={{ background: "linear-gradient(90deg, #FF6B00, #FFD700, transparent)" }} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-[#3D1F00]/80 text-lg leading-relaxed"
          >
            <p>
              Mie Star lahir dari ide sederhana — menghadirkan makanan cepat, enak, dan tetap autentik.
              Sebuah brand yang <em className="text-[#FF6B00] font-bold not-italic">affordable</em> namun
              tetap memberi <em className="text-[#FF6B00] font-bold not-italic">premium experience</em>,
              dengan karakter kuat dan mudah diingat.
            </p>
            <p>
              Bagi Mie Star, mie bukan hanya makanan — tapi bagian dari keseharian anak muda maupun keluarga.
              Teman di setiap cerita, di setiap momen kecil yang berarti.
            </p>
            <p className="font-display italic text-3xl md:text-4xl text-[#FF6B00] pt-4">
              "Every Bite, A Star Moment."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#FF6B00]">
              <div className="text-[#FF6B00] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                Brand Proposition
              </div>
              <h3 className="font-display text-2xl text-[#3D1F00] mb-3">
                Bold Flavor, Everyday Moment
              </h3>
              <p className="text-[#3D1F00]/70 text-sm leading-relaxed">
                Di tengah hari yang padat, Mie Star hadir sebagai jeda kecil yang berarti —
                semangkuk mie dengan rasa bold, konsisten, hangat dan selalu bisa diandalkan.
              </p>
            </div>

            <div className="p-8 rounded-2xl relative overflow-hidden border-l-4 border-[#FFD700]" style={{ background: "#3D1F00" }}>
              <div className="text-[#FFD700] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                Brand Vision
              </div>
              <h3 className="font-display text-2xl text-white mb-3">
                The Go-To Noodle Brand for Everyday Cravings
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Rasa yang familiar namun tetap berkarakter — Mie Star menjadi teman sehari-hari yang selalu dapat diandalkan.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Warmth", color: "#FF6B00", desc: "Hangat seperti rumah — setiap mangkuk." },
            { label: "Togetherness", color: "#FFD700", desc: "Momen kecil yang berarti — bersama." },
            { label: "Moments", color: "#7A4F1E", desc: "Rasa bold & autentik, konsisten setiap hari." },
          ].map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-8 bg-white rounded-2xl shadow-lg border-t-4 hover:-translate-y-1 transition"
              style={{ borderTopColor: p.color }}
            >
              <div className="font-bold text-xs tracking-[0.3em] uppercase mb-3" style={{ color: p.color }}>
                0{i + 1}
              </div>
              <div className="font-display text-3xl text-[#3D1F00] mb-2">
                {p.label}
              </div>
              <p className="text-[#3D1F00]/60 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
