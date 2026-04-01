import React from "react";
import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business goals, target audience, and technical requirements to craft a strategic roadmap.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Design & Plan",
    description: "Our designers create stunning UI/UX prototypes while our architects plan the technical foundation for scalable solutions.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description: "Agile sprints with continuous integration ensure rapid, high-quality development with regular demos and feedback loops.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Scale",
    description: "We handle deployment, monitoring, and optimization. Post-launch support ensures your product scales seamlessly.",
  },
];

export default function ProcessSection() {
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
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Concept to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A proven methodology that turns ambitious ideas into market-leading products.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Step indicator */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-white/[0.08] bg-white/[0.02] mb-6 group-hover:border-white/[0.15] group-hover:bg-white/[0.04] transition-all duration-500">
                  <step.icon className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors duration-500" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-[10px] font-bold text-white flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}