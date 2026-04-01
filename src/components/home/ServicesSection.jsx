import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, ArrowUpRight, Code2, Database, Cpu } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance, scalable web applications built with cutting-edge frameworks. From enterprise portals to e-commerce platforms.",
    features: ["React & Next.js", "Full-Stack Solutions", "E-Commerce", "Progressive Web Apps"],
    gradient: "from-blue-500 to-cyan-500",
    bgGlow: "rgba(59,130,246,0.1)",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences that captivate users. iOS, Android, and hybrid solutions.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    gradient: "from-purple-500 to-pink-500",
    bgGlow: "rgba(139,92,246,0.1)",
  },
  {
    icon: Brain,
    title: "AI Development",
    description: "Intelligent solutions powered by machine learning and deep learning. Transform your data into actionable insights.",
    features: ["Machine Learning", "NLP & Chatbots", "Computer Vision", "Predictive Analytics"],
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "rgba(16,185,129,0.1)",
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 h-full transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
        {/* Glow effect */}
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none"
          style={{ background: service.bgGlow }}
          animate={{ opacity: isHovered ? 0.6 : 0, scale: isHovered ? 1.2 : 0.8 }}
          transition={{ duration: 0.5 }}
        />

        {/* Icon */}
        <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
          {service.title}
          <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-gray-400" />
        </h3>
        <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/[0.06]"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services That Drive{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We combine technical excellence with creative vision to deliver solutions 
            that set new standards in digital innovation.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Code2, label: "Projects Delivered", value: "500+" },
            { icon: Database, label: "Data Processed", value: "10TB+" },
            { icon: Cpu, label: "AI Models Built", value: "150+" },
            { icon: Globe, label: "Countries Served", value: "25+" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center p-6 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}