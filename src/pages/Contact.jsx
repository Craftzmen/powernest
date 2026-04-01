import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import ContactSection from "../components/home/ContactSection";
import FooterSection from "../components/home/FooterSection";

export default function Contact() {
  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,63,94,0.08)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 backdrop-blur-sm mb-8"
          >
            <Mail className="w-4 h-4 text-rose-400" />
            <span className="text-sm text-rose-300 font-medium">Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind? Let's discuss how Power Nest can help turn your vision into reality.
          </motion.p>
        </div>
      </section>

      <ContactSection />
      <FooterSection />
    </div>
  );
}