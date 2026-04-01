import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinFlow Banking Platform",
    category: "Web Development",
    tag: "web",
    description: "A next-gen banking dashboard with real-time analytics, transaction management, and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "MediCare Health App",
    category: "Mobile Development",
    tag: "mobile",
    description: "Cross-platform health tracking app with telemedicine integration and wearable device sync.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    tech: ["React Native", "Firebase", "HealthKit"],
  },
  {
    title: "SmartVision AI",
    category: "AI Development",
    tag: "ai",
    description: "Computer vision platform for manufacturing quality control with 99.7% defect detection accuracy.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    tech: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    title: "ShopLux E-Commerce",
    category: "Web Development",
    tag: "web",
    description: "Premium luxury goods marketplace handling 50K+ daily transactions with headless CMS architecture.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tech: ["Next.js", "Stripe", "Elasticsearch"],
  },
  {
    title: "LogiTrack Fleet Manager",
    category: "Mobile Development",
    tag: "mobile",
    description: "GPS-powered fleet management with real-time tracking, route optimization, and driver analytics.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
    tech: ["Flutter", "Google Maps", "AWS"],
  },
  {
    title: "DataMind Analytics",
    category: "AI Development",
    tag: "ai",
    description: "Predictive analytics engine processing millions of data points for retail demand forecasting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tech: ["PyTorch", "Spark", "Kubernetes"],
  },
];

const filters = ["all", "web", "mobile", "ai"];
const filterLabels = { all: "All Work", web: "Web", mobile: "Mobile", ai: "AI" };

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.tag === activeFilter);

  return (
    <section id="portfolio" className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of solutions that have transformed businesses across industries.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-white text-gray-900"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 border border-white/[0.06]"
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}