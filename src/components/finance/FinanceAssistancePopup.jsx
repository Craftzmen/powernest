import React from "react";
import { motion } from "framer-motion";
import { Phone, X, Zap, CreditCard } from "lucide-react";

const features = [
  { icon: Zap, label: "Fast & Easy Application" },
  { icon: CreditCard, label: "Instant Eligibility Check" },
];

export default function FinanceAssistancePopup({ open, onClose, phone = "888 286 8307" }) {
  const digits = phone.replace(/\D/g, "");
  const telHref = digits.length === 11 && digits.startsWith("1") ? `tel:+${digits}` : `tel:+1${digits}`;

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-[100] w-full max-w-sm sm:max-w-md pointer-events-auto"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#030712] shadow-2xl shadow-black/60">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 text-gray-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="pr-6">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5">
                Need Finance Assistance?
              </h2>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase">
                  Advisors Connected
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 pl-5 mb-5">
            <div className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <feature.icon className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide text-gray-200 uppercase">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call CTA */}
          <a
            href={telHref}
            className="group flex items-center justify-between gap-3 w-full px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/30"
          >
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
              Call {phone}
            </span>
            <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </a>
          <p className="text-center text-[10px] font-semibold tracking-[0.2em] text-gray-500 uppercase mt-3">
            Call Right Now
          </p>
        </div>
      </div>
    </motion.div>
  );
}
