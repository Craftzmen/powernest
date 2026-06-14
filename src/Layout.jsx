import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "Services", page: "Services" },
  { label: "About", page: "About" },
  { label: "Portfolio", page: "Portfolio" },
  { label: "Team", page: "Team" },
  { label: "How It Works", page: "HowItWorks" },
  { label: "Finance", page: "Finance" },
];

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setMobileOpen(false);
    window.location.href = createPageUrl(page);
  };

  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick("Home")} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-xs font-black text-white">PN</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight hidden sm:block">
              Power Nest
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.page)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
            
            {/* Policies Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1"
                onMouseEnter={() => setPoliciesOpen(true)}
                onMouseLeave={() => setPoliciesOpen(false)}
              >
                Policies
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {policiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setPoliciesOpen(true)}
                    onMouseLeave={() => setPoliciesOpen(false)}
                    className="absolute top-full right-0 mt-1 w-48 rounded-lg border border-white/10 bg-[#030712]/95 backdrop-blur-xl shadow-2xl py-2"
                  >
                    <a
                      href={createPageUrl("RefundPolicy")}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Refund Policy
                    </a>
                    <a
                      href={createPageUrl("PrivacyPolicy")}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("Contact")}
              className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20"
            >
              Contact
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.page)}
                    className="block w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                
                {/* Mobile Policies Submenu */}
                <div className="pt-2">
                  <div className="text-xs text-gray-600 uppercase tracking-wider px-4 mb-2">Policies</div>
                  <a
                    href={createPageUrl("RefundPolicy")}
                    className="block w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    Refund Policy
                  </a>
                  <a
                    href={createPageUrl("PrivacyPolicy")}
                    className="block w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    Privacy Policy
                  </a>
                </div>
                
                <button
                  onClick={() => handleNavClick("Contact")}
                  className="w-full mt-2 px-5 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Page content */}
      {children}
    </div>
  );
}