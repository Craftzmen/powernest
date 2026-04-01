import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle2, XCircle, Clock, Mail } from "lucide-react";
import FooterSection from "../components/home/FooterSection";

export default function RefundPolicy() {
  return (
    <div className="bg-[#030712] min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm mb-6">
            <RefreshCw className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Our Guarantee</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Refund Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: February 16, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Overview */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              At Power Nest, customer satisfaction is important to us. This Refund Policy outlines 
              when and how refunds or returns are handled for products and services purchased through our Website.
            </p>
          </section>

          {/* Eligibility */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Eligibility for Refunds</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>Requests must be made within 7 days of purchase/service delivery.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>To be eligible, items or services must be unused, in original condition, and accompanied by proof of purchase.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>Refunds are issued only after review and approval by our team.</span>
              </li>
            </ul>
          </section>

          {/* Non-Refundable */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">Non-Refundable Items & Services</h2>
            </div>
            <p className="text-gray-400 mb-4">The following are typically non-refundable:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>Project deposits once development or design work has begun</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>Custom or special-order services after work has started</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>Administration, documentation, or consultation fees</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <span>Services delivered "as-is" unless otherwise required by law</span>
              </li>
            </ul>
          </section>

          {/* Defective or Damaged */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Defective or Damaged Goods</h2>
            <p className="text-gray-400 mb-4">If items or services are defective or incorrectly provided:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>Contact us within 14 days of receipt/service completion</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>Provide documentation and project details</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>We may offer a repair, replacement, or refund based on the review</span>
              </li>
            </ul>
          </section>

          {/* Processing */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Refund Processing</h2>
            </div>
            <p className="text-gray-400 mb-4">Once approved:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <span>Refunds are issued to the original payment method</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <span>Processing times may vary, typically 5–10 business days depending on payment provider</span>
              </li>
            </ul>
          </section>

          {/* Exceptions */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Exceptions & Special Cases</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                <span><strong className="text-white">"As-Is" services:</strong> No refunds unless required by applicable law</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                <span><strong className="text-white">Digital products, downloads, or informational services:</strong> Non-refundable after delivery/instant access</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Contact for Refund Requests</h2>
            </div>
            <p className="text-gray-300 mb-4">To request a refund, please contact us:</p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:info@powernest.it.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  info@powernest.it.com
                </a>
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Subject:</strong> Refund Request
              </p>
            </div>
          </section>
        </motion.div>
      </div>
      
      <div className="mt-20">
        <FooterSection />
      </div>
    </div>
  );
}