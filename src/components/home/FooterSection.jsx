import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: ["Web Development", "Mobile Apps", "AI Solutions", "Cloud Services", "UI/UX Design", "DevOps"],
  Company: ["About Us", "Careers", "Blog", "Press", "Partners", "Contact"],
  Resources: ["Case Studies", "Documentation", "API Reference", "Community", "Support", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"],
};

export default function FooterSection() {
  return (
    <footer className="relative bg-[#020617] pt-20 pb-8">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-sm font-black text-white">PN</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Power Nest</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Transforming businesses through cutting-edge web, mobile, and AI solutions. 
              Your vision, our expertise.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@powernest.it.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                query@powernest.it.com
              </a>
              <a href="tel:+18882868307" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                888 286 8307
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                3744 Amboy Road, Staten Island, New York 10308
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Power Nest. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}