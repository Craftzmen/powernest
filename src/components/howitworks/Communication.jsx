import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Video, FileText, Calendar, Github, Trello } from "lucide-react";

const tools = [
  {
    icon: MessageCircle,
    name: "Slack",
    description: "Real-time messaging and quick updates",
    usage: "Daily communication",
  },
  {
    icon: Video,
    name: "Video Calls",
    description: "Face-to-face meetings and demos",
    usage: "Weekly/Bi-weekly",
  },
  {
    icon: FileText,
    name: "Documentation",
    description: "Detailed specs and progress reports",
    usage: "Updated regularly",
  },
  {
    icon: Calendar,
    name: "Project Board",
    description: "Task tracking and sprint planning",
    usage: "Always accessible",
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Code repository and version control",
    usage: "Daily commits",
  },
  {
    icon: Trello,
    name: "Jira/Trello",
    description: "Agile project management",
    usage: "Sprint planning",
  },
];

export default function Communication() {
  return (
    <section className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-4">
            Stay Connected
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Communication{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              & Collaboration
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We believe in transparent, frequent communication. Here's how we keep you in the loop.
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <tool.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{tool.description}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-xs text-emerald-300 font-medium">{tool.usage}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Communication cadence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-emerald-500/5 to-teal-500/5 p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Communication Cadence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="text-4xl font-bold text-emerald-400 mb-2">Daily</div>
              <p className="text-gray-400 text-sm">Progress updates via Slack</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="text-4xl font-bold text-teal-400 mb-2">Weekly</div>
              <p className="text-gray-400 text-sm">Sprint demos & planning calls</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="text-4xl font-bold text-cyan-400 mb-2">Monthly</div>
              <p className="text-gray-400 text-sm">Detailed progress reports</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}