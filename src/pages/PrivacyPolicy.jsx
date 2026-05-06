import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Share2, Clock, Mail, MapPin } from "lucide-react";
import FooterSection from "../components/home/FooterSection";

export default function PrivacyPolicy() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
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
          {/* Introduction */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-400 leading-relaxed">
              Power Nest ("we," "us," or "our") operates{" "}
              <a href="https://powernest.it.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                https://powernest.it.com
              </a>{" "}
              (the "Website"). This Privacy Policy describes how we collect, use, disclose, and protect 
              the personal information of visitors and customers. Your privacy is important to us, and we 
              are committed to protecting your personal information.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            <p className="text-gray-400 mb-4">
              We collect personal and non-personal information when you use our Website:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                <ul className="space-y-2">
                  {["Name", "Email address", "Phone number", "Mailing address", "Billing and shipping information", "Payment details (processed securely by third-party payment providers)"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Automatically Collected Information</h3>
                <ul className="space-y-2">
                  {["IP address", "Browser type and version", "Pages viewed, dates and times of visits", "Cookies and tracking technologies used to improve site experience and analytics"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Info */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-400 mb-4">We use the information we collect to:</p>
            <ul className="space-y-3">
              {[
                "Provide, operate, and improve our services and Website",
                "Process orders and payments",
                "Communicate with you about your purchase, account, and updates",
                "Personalize your experience and tailor content",
                "Detect and prevent fraud and comply with legal obligations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Cookies */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Cookies and Tracking</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We use cookies and similar tracking technologies to monitor website usage, remember preferences, 
              and enhance user experience. You can disable cookies in your browser settings, but some features 
              of the Website may not work properly.
            </p>
          </section>

          {/* Sharing */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="w-6 h-6 text-pink-400" />
              <h2 className="text-2xl font-bold text-white">Sharing Your Information</h2>
            </div>
            <p className="text-gray-400 mb-4">We may share your data with:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                <span>Service providers (payment processors, analytics services)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                <span>Legal authorities when required by law</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                <span>Businesses involved in order fulfillment (e.g., hosting partners)</span>
              </li>
            </ul>
            <p className="text-emerald-400 font-medium">
              We do not sell personal information to third parties.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
            <p className="text-gray-400 leading-relaxed">
              Our Website may contain links to third-party websites with separate privacy practices. 
              We are not responsible for their content or policies.
            </p>
          </section>

          {/* Data Retention */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Data Retention</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We retain your information only as long as necessary to fulfill the purposes outlined in 
              this policy or as required by law.
            </p>
          </section>

          {/* Your Rights */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-400 leading-relaxed">
              You have the right to access, correct, or request deletion of your personal data. 
              To exercise these rights, contact us as listed below.
            </p>
          </section>

          {/* Changes */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this Privacy Policy from time to time. The "Last Updated" date at the top 
              reflects the most recent version.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            </div>
            <p className="text-gray-300 mb-4">
              If you have questions or concerns about this policy, contact us at:
            </p>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:info@powernest.it.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  info@powernest.it.com
                </a>
              </p>
              <p className="text-gray-300 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-white">Address:</strong> 3744 Amboy Road, Staten Island, New York 10308
                </span>
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