import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";

const team = [
  {
    name: "Ahmad Khan",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 15+ years in tech innovation.",
  },
  {
    name: "Maria Santos",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack architect driving technical excellence.",
  },
  {
    name: "Alex Thompson",
    role: "Head of AI",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "PhD in Machine Learning, former Google AI researcher.",
  },
  {
    name: "Priya Sharma",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Award-winning UX designer crafting intuitive experiences.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Minds Behind{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Power Nest
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A world-class team of engineers, designers, and strategists passionate about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />

                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {[Linkedin, Github, Twitter].map((Icon, i) => (
                      <button
                        key={i}
                        className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}