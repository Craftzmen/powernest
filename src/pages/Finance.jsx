import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Wallet,
  ArrowRight,
  CheckCircle2,
  Phone,
  BadgeCheck,
  Zap,
  Percent,
  FileText,
  ShieldCheck,
  Headphones,
  RefreshCw,
  Quote,
} from "lucide-react";
import { createPageUrl } from "../utils";
import FooterSection from "../components/home/FooterSection";
import FinanceAssistancePopup from "../components/finance/FinanceAssistancePopup";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1718780138801-d93ebf484827?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const featuredModels = [
  {
    name: "Kia EV6",
    brand: "Kia",
    gradient: "from-blue-500 to-cyan-500",
    image:
      "https://images.unsplash.com/photo-1718780138801-d93ebf484827?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hyundai Sonata",
    brand: "Hyundai",
    gradient: "from-purple-500 to-pink-500",
    image:
      "https://images.unsplash.com/photo-1689221590315-514bb87b16e8?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hyundai Tucson",
    brand: "Hyundai",
    gradient: "from-emerald-500 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1705624843697-4461f9dce482?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kia Sportage",
    brand: "Kia",
    gradient: "from-orange-500 to-amber-500",
    image:
      "https://images.unsplash.com/photo-1693456356273-b0bfab25c4bf?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const packages = [
  {
    icon: Car,
    title: "New Car Finance",
    description:
      "Own your brand-new Kia or Hyundai with affordable monthly installments and competitive rates.",
    points: [
      "Low down payment options",
      "Flexible tenure (12–84 months)",
      "Quick loan approvals",
      "Transparent documentation",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wallet,
    title: "Used Car Finance",
    description:
      "Reliable financing for pre-owned vehicles including popular Kia and Hyundai models with easy eligibility criteria.",
    points: [
      "Financing for dealer & individual sellers",
      "Flexible EMI plans",
      "Fast documentation process",
      "Competitive interest rates",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: RefreshCw,
    title: "Car Loan Refinancing",
    description:
      "Lower your monthly payments or interest rates by refinancing your existing car loan.",
    points: [
      "Reduce EMI burden",
      "Lower interest rate",
      "Improve cash flow",
      "Adjust loan tenure",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const advantages = [
  { icon: BadgeCheck, label: "Instant Eligibility Check" },
  { icon: Zap, label: "Fast Approval Process" },
  { icon: Percent, label: "Competitive Rates" },
  { icon: FileText, label: "Minimal Documentation" },
  { icon: ShieldCheck, label: "No Hidden Charges" },
  { icon: Headphones, label: "Dedicated Loan Advisors" },
];

const testimonials = [
  {
    quote:
      "Getting my Kia EV6 through Prime Auto Deals was a breeze. The approval was faster than I expected, and the rates were unbeatable!",
    author: "James M.",
  },
  {
    quote:
      "I was looking for a Hyundai Tucson and the team here made the financing so easy. Transparent process and no hidden charges. Highly recommended!",
    author: "Elena R.",
  },
];

export default function Finance() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="bg-[#030712] min-h-screen">
      <FinanceAssistancePopup open={showPopup} onClose={() => setShowPopup(false)} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm mb-8"
            >
              <Wallet className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Financing Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Drive Now,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Pay Later
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-8"
            >
              Specializing in personalized financing for Kia and Hyundai, we offer flexible options
              to get you behind the wheel of your dream car. Whether it's a new EV6 or a reliable
              Tucson, our partnerships with top lenders ensure competitive rates tailored to your
              needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => setShowPopup(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20"
              >
                <Phone className="w-4 h-4" />
                Speak to an Advisor
              </button>
              <a
                href={createPageUrl("Contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white border border-white/10 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                Apply Online
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl border border-white/[0.06] bg-gradient-to-br from-blue-500 to-purple-600 p-1 overflow-hidden">
              <img
                src={HERO_IMAGE}
                alt="Kia EV6"
                className="w-full h-full rounded-3xl object-cover"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Featured: Kia EV6
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="relative py-24 bg-[#030712]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Specialized Financing for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Premium Models
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We provide exclusive finance rates and flexible terms for the latest Kia and Hyundai
              models. Get approved today for these and many more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className={`relative aspect-video bg-gradient-to-br ${model.gradient} p-0.5`}>
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    {model.brand}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{model.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Available Now
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Finance Packages */}
      <section className="relative py-24 bg-[#030712]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tailored Finance{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} mb-6`}>
                  <pkg.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{pkg.description}</p>
                <ul className="space-y-3">
                  {pkg.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Prime Advantage */}
      <section className="relative py-24 bg-[#030712]">
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
              The Prime{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-base font-semibold text-white">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 bg-[#030712]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Say
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-blue-500/40 mb-4" />
                <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold text-white">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative py-24 bg-[#030712]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-12 text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start Your Finance Journey
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                Apply today and experience a smooth, transparent, and hassle-free car financing
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowPopup(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20"
                >
                  <Phone className="w-4 h-4" />
                  Speak to an Advisor
                </button>
                <a
                  href={createPageUrl("Contact")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white border border-white/10 hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  Apply Online
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
