import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Users, Target, Zap, Shield, RefreshCw } from "lucide-react";

const principles = [
  {
    icon: GitBranch,
    title: "Agile Development",
    description: "We use Agile methodologies with 2-week sprints, daily standups, and continuous integration for rapid, iterative progress.",
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description: "Regular updates via Slack, weekly video calls, and a dedicated project manager keep you informed at every step.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Every decision is aligned with your business objectives. We focus on delivering measurable results, not just features.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "See your ideas come to life quickly with interactive prototypes and MVP development before full-scale production.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Comprehensive testing at every stage ensures bug-free, secure, and performant applications from day one.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Post-launch, we monitor performance, gather user feedback, and iterate to constantly improve your product.",
  },
];

export default function Methodology() {
  return (
    <section className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-400 mb-4">
            Our Principles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Development{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Methodology
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The core principles that guide every project we undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <principle.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
              <p className="text-gray-500 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}