import React from "react";
import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Django", "FastAPI", "Go", "GraphQL"],
  },
  {
    category: "Mobile",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Expo"],
  },
  {
    category: "AI / ML",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Scikit-learn", "Hugging Face"],
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Firebase", "DynamoDB"],
  },
];

export default function TechStackSection() {
  return (
    <section className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powered by{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Modern Tech
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We leverage the industry's most powerful and reliable technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 text-gray-300 border border-white/[0.06] hover:bg-white/10 hover:border-white/[0.12] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}