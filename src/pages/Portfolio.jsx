import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import PortfolioSection from "../components/home/PortfolioSection";
import FooterSection from "../components/home/FooterSection";

export default function Portfolio() {
  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.08)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm mb-8"
          >
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Our Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Projects That{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Make Impact
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our portfolio of successful projects across web, mobile, and AI. 
            Each solution crafted with precision to deliver exceptional results.
          </motion.p>
        </div>
      </section>

      <PortfolioSection />
      <FooterSection />
    </div>
  );
}