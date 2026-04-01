import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingOrb = ({ delay, size, x, y, color }) => (
  <motion.div
    className="absolute rounded-full blur-3xl opacity-20"
    style={{ width: size, height: size, left: x, top: y, background: color }}
    animate={{
      y: [0, -30, 0, 30, 0],
      x: [0, 20, 0, -20, 0],
      scale: [1, 1.1, 1, 0.9, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
        <FloatingOrb delay={0} size={600} x="10%" y="20%" color="#3B82F6" />
        <FloatingOrb delay={2} size={400} x="60%" y="10%" color="#8B5CF6" />
        <FloatingOrb delay={4} size={500} x="70%" y="60%" color="#06B6D4" />
        <FloatingOrb delay={1} size={300} x="20%" y="70%" color="#8B5CF6" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient cursor follower */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        animate={{ x: mousePos.x * 200 - 100, y: mousePos.y * 200 - 100 }}
        transition={{ type: "spring", damping: 30 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-sm text-blue-200 font-medium tracking-wide">Innovating the Digital Future</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight"
        >
          We Build
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Digital Excellence
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Power Nest delivers cutting-edge web development, mobile applications, 
          and AI solutions that transform businesses and drive unprecedented growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-base rounded-xl group transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-xl backdrop-blur-sm"
          >
            <Play className="mr-2 w-4 h-4" />
            Watch Showreel
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">Trusted by industry leaders</p>
          <div className="flex items-center gap-8 opacity-40">
            {["TechCorp", "InnovateLabs", "DataFlow", "CloudNine", "NextGen"].map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="text-white font-semibold text-sm tracking-wider"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  );
}