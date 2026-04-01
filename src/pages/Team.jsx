import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import TeamSection from "../components/home/TeamSection";
import FooterSection from "../components/home/FooterSection";

const departments = [
  {
    name: "Engineering",
    count: "75+",
    description: "Full-stack developers, mobile engineers, and DevOps specialists",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Design",
    count: "20+",
    description: "UI/UX designers, product designers, and brand strategists",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "AI/ML",
    count: "15+",
    description: "Data scientists, ML engineers, and AI researchers",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Project Management",
    count: "10+",
    description: "Project managers, scrum masters, and business analysts",
    color: "from-amber-500 to-orange-500",
  },
];

export default function Team() {
  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm mb-8"
          >
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium">Meet Our Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Talented People{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Doing Great Work
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A diverse team of 120+ engineers, designers, and innovators passionate about 
            creating technology that makes a difference.
          </motion.p>
        </div>
      </section>

      {/* Departments */}
      <section className="relative py-32 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Departments
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Specialized teams working together to deliver excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className={`text-5xl font-bold bg-gradient-to-r ${dept.color} bg-clip-text text-transparent mb-2`}>
                  {dept.count}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{dept.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Culture */}
      <section className="relative py-32 bg-[#030712]">
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
              Why Join{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Power Nest
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We're always looking for talented individuals to join our growing team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Remote-First Culture", desc: "Work from anywhere in the world with flexible hours" },
              { title: "Growth Opportunities", desc: "Continuous learning with courses, conferences, and certifications" },
              { title: "Competitive Benefits", desc: "Health insurance, retirement plans, and generous PTO" },
              { title: "Cutting-Edge Tech", desc: "Work with the latest technologies and tools" },
              { title: "Collaborative Environment", desc: "Supportive team culture with mentorship programs" },
              { title: "Impactful Projects", desc: "Build solutions that make a real difference" },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}