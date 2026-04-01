import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Users, Award, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Zap, text: "Agile Development Process" },
  { icon: Shield, text: "Enterprise-Grade Security" },
  { icon: Users, text: "Dedicated Project Teams" },
  { icon: Award, text: "Award-Winning Solutions" },
  { icon: TrendingUp, text: "Scalable Architecture" },
  { icon: CheckCircle2, text: "24/7 Technical Support" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-[#030712] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Concentric rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/[0.04]"
                  style={{ inset: `${i * 60}px` }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className="absolute w-3 h-3 rounded-full bg-blue-500/60"
                    style={{ top: "10%", left: "50%" }}
                  />
                </motion.div>
              ))}

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-blue-600/20"
                  >
                    <span className="text-4xl font-black text-white">PN</span>
                  </motion.div>
                  <p className="text-sm text-gray-500 font-medium">Since 2018</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">
              About Power Nest
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Engineering Tomorrow's{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technology
              </span>{" "}
              Today
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Power Nest is a premier IT company specializing in building transformative digital 
              solutions. We partner with startups and enterprises alike to craft technology 
              that doesn't just meet expectations — it redefines them.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our team of expert engineers, designers, and strategists work collaboratively 
              to turn complex challenges into elegant solutions. With a proven track record 
              across three core verticals — web, mobile, and AI — we deliver excellence at every level.
            </p>

            {/* Highlight grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/[0.04] bg-white/[0.01]"
                >
                  <item.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}