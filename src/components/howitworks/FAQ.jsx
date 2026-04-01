import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A standard web application takes 8-16 weeks, mobile apps 10-20 weeks, and AI solutions 12-24 weeks. We'll provide a detailed timeline after the initial consultation based on your specific requirements.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. After understanding your requirements, we'll provide a detailed proposal with transparent pricing breakdown. Most projects range from $25,000 to $250,000+.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! All projects include 30-90 days of post-launch support covering bug fixes, performance optimization, and minor adjustments. We also offer ongoing maintenance packages for long-term support, feature additions, and scaling.",
  },
  {
    question: "Can I make changes during development?",
    answer: "Absolutely. Our Agile methodology is built around flexibility. We conduct bi-weekly sprint demos where you can provide feedback and request changes. Major scope changes may affect timeline and budget, which we'll discuss transparently.",
  },
  {
    question: "Will I own the source code?",
    answer: "Yes, you retain full ownership of all source code, designs, and intellectual property created for your project. Upon final payment, we transfer complete rights and provide you with the full codebase and documentation.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, React Native, Flutter, TensorFlow, and more. Technology choices are made based on your specific requirements, scalability needs, and budget.",
  },
  {
    question: "How do you ensure project quality?",
    answer: "Quality is built into every phase: code reviews, automated testing, manual QA, performance testing, and security audits. We follow industry best practices, maintain 80%+ test coverage, and use CI/CD pipelines for reliable deployments.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "Your satisfaction is our priority. We work iteratively with regular demos and feedback loops. If you're not happy at any sprint review, we'll make adjustments. We don't consider a project complete until you're fully satisfied with the deliverables.",
  },
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-4 h-4 text-blue-400" />
          ) : (
            <Plus className="w-4 h-4 text-blue-400" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-rose-400 mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about working with Power Nest.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}