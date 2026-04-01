import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const projectTypes = [
  {
    type: "Web Application",
    examples: "E-commerce, SaaS Dashboard, Corporate Website",
    timeline: "8-16 Weeks",
    phases: [
      { phase: "Planning & Design", duration: "2-3 weeks" },
      { phase: "Development", duration: "4-10 weeks" },
      { phase: "Testing & QA", duration: "1-2 weeks" },
      { phase: "Deployment", duration: "1 week" },
    ],
  },
  {
    type: "Mobile Application",
    examples: "iOS, Android, Cross-platform Apps",
    timeline: "10-20 Weeks",
    phases: [
      { phase: "Planning & Design", duration: "2-4 weeks" },
      { phase: "Development", duration: "6-12 weeks" },
      { phase: "Testing & QA", duration: "1-3 weeks" },
      { phase: "App Store Submission", duration: "1 week" },
    ],
  },
  {
    type: "AI/ML Solution",
    examples: "Predictive Models, Chatbots, Computer Vision",
    timeline: "12-24 Weeks",
    phases: [
      { phase: "Data Collection & Analysis", duration: "3-5 weeks" },
      { phase: "Model Development", duration: "6-14 weeks" },
      { phase: "Integration & Testing", duration: "2-4 weeks" },
      { phase: "Deployment & Training", duration: "1-2 weeks" },
    ],
  },
];

export default function Timeline() {
  return (
    <section className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-4">
            Project Timelines
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Typical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Delivery Times
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Realistic timelines for different types of projects. Actual duration may vary based on complexity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projectTypes.map((project, index) => (
            <motion.div
              key={project.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">{project.type}</h3>
              </div>

              <p className="text-sm text-gray-500 mb-6">{project.examples}</p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">{project.timeline}</span>
              </div>

              <div className="space-y-3">
                {project.phases.map((phase, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-sm text-gray-300">{phase.phase}</span>
                    <span className="text-xs text-gray-500 font-medium">{phase.duration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl border border-amber-500/20 bg-amber-500/5 text-center"
        >
          <p className="text-amber-300 text-sm">
            <strong>Note:</strong> These are estimates for standard projects. Complex enterprise solutions may require additional time. 
            We'll provide a detailed timeline after the initial consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}