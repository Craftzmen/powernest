import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "query@powernest.it.com", sub: "We reply within 24 hours" },
  { icon: Phone, label: "Call Us", value: "+1 (802) 242-2991", sub: "Mon-Fri 9AM - 6PM" },
  { icon: MapPin, label: "Visit Us", value: "418 Broadway Ste N", sub: "Albany NY 12207" },
  { icon: Globe, label: "Website", value: "powernest.it.com", sub: "Learn more about us" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-rose-400 mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your{" "}
            <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tell us about your vision. We'll get back to you with a tailored strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Office hours */}
            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400 font-medium">Office Hours</span>
              </div>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monday - Friday</span>
                  <span className="text-gray-300">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Saturday</span>
                  <span className="text-gray-300">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 h-12"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Company Name</label>
                <Input
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 h-12"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Project Details</label>
                <Textarea
                  placeholder="Tell us about your project, goals, and timeline..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 text-base rounded-xl group transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
              >
                {submitted ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-gray-600">
                By submitting, you agree to our privacy policy. We'll never share your data.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}