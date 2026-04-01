import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Globe, TrendingUp, Zap } from "lucide-react";
import AboutSection from "../components/home/AboutSection";
import StatsCounter from "../components/home/StatsCounter";
import FooterSection from "../components/home/FooterSection";

const values = [
  {
    icon: Target,
    title: "Excellence First",
    description: "We never compromise on quality. Every line of code, every design element is crafted with precision.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build partnerships, not just projects.",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Teamwork and transparent communication are at the heart of everything we do.",
  },
];

const milestones = [
  { year: "2018", event: "Power Nest Founded", description: "Started with a vision to transform digital experiences" },
  { year: "2019", event: "First Major Client", description: "Delivered enterprise solution for Fortune 500 company" },
  { year: "2021", event: "Expanded to AI", description: "Launched AI/ML division with specialized team" },
  { year: "2023", event: "500+ Projects", description: "Reached milestone of 500 successful project deliveries" },
  { year: "2024", event: "Global Recognition", description: "Named Top IT Company by TechReview Magazine" },
  { year: "2026", event: "25+ Countries", description: "Serving clients across five continents" },
];

const leadership = [
  {
    name: "Ahmad Khan",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "15+ years in tech innovation. Previously led engineering teams at major tech companies.",
  },
  {
    name: "Maria Santos",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack architect with expertise in scalable systems. MIT Computer Science graduate.",
  },
  {
    name: "Alex Thompson",
    role: "Head of AI",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "PhD in Machine Learning. Former Google AI researcher with 50+ published papers.",
  },
];

export default function About() {
  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.08)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm mb-8"
          >
            <Heart className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Since 2018, Power Nest has been at the forefront of digital innovation, 
            transforming ideas into powerful solutions that drive business growth.
          </motion.p>
        </div>
      </section>

      <AboutSection />
      <StatsCounter />

      {/* Mission & Vision */}
      <section className="relative py-32 bg-[#030712]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10"
            >
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To empower businesses with innovative technology solutions that drive measurable results. 
                We believe technology should be accessible, powerful, and transformative for organizations of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10"
            >
              <Eye className="w-12 h-12 text-purple-400 mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To be the world's most trusted technology partner, known for delivering exceptional 
                solutions that set new standards in innovation, quality, and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 bg-[#030712]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all duration-300"
              >
                <value.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 bg-[#030712]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Key milestones in our growth story.</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-amber-600/20 to-orange-600/20 flex items-center justify-center border border-white/[0.06]">
                  <span className="text-xl font-bold text-amber-400">{milestone.year}</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                  <p className="text-gray-500">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-32 bg-[#030712]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leadership{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experienced leaders driving innovation and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-sm text-blue-400 font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}