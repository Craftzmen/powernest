import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, ArrowRight, Code2, Zap, Shield, TrendingUp } from "lucide-react";
import ServicesSection from "../components/home/ServicesSection";
import FooterSection from "../components/home/FooterSection";

const benefits = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Agile sprints ensure rapid development without compromising quality.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security practices protect your data.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Architecture designed to grow with your business needs.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Well-documented, maintainable code following best practices.",
  },
];

const serviceDetails = [
  {
    icon: Globe,
    category: "Web Development",
    tagline: "Powerful web solutions that drive results",
    description: "We build high-performance web applications using cutting-edge technologies like React, Next.js, and Node.js. From simple landing pages to complex enterprise platforms, we deliver solutions that scale.",
    services: [
      "Custom Web Applications",
      "E-Commerce Platforms",
      "Progressive Web Apps (PWA)",
      "Enterprise Portals",
      "CMS Development",
      "API Development & Integration",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "Django", "PostgreSQL"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    category: "Mobile Apps",
    tagline: "Native and cross-platform mobile experiences",
    description: "Create stunning mobile applications for iOS and Android. Whether native or cross-platform, we build apps that users love with seamless performance and intuitive interfaces.",
    services: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Apps",
      "App Redesign & Modernization",
      "App Store Optimization",
      "Mobile Backend Development",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    category: "AI Development",
    tagline: "Intelligent solutions powered by machine learning",
    description: "Leverage the power of artificial intelligence to transform your business. From predictive analytics to computer vision, we build AI solutions that provide real competitive advantages.",
    services: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Chatbots & Virtual Assistants",
      "Predictive Analytics",
      "AI Integration & Consulting",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Python", "Scikit-learn"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Services() {
  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm mb-8"
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Our Expertise</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Services That Drive{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            From web and mobile to AI-powered solutions, we deliver cutting-edge technology 
            that transforms businesses and drives measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="relative py-32 bg-[#030712]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-3">{service.category}</h2>
                <p className="text-lg text-blue-400 mb-6">{service.tagline}</p>
                <p className="text-gray-400 leading-relaxed mb-8">{service.description}</p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">What We Offer</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.services.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-sm text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/[0.06]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <div className={`relative aspect-square rounded-3xl border border-white/[0.06] bg-gradient-to-br ${service.gradient} p-1`}>
                  <div className="w-full h-full rounded-3xl bg-[#030712] flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-gray-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
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
              Why Choose{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Power Nest
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We go beyond development to deliver strategic technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all duration-300"
              >
                <benefit.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}