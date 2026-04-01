import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  FileSearch, 
  Palette, 
  Code, 
  TestTube, 
  Rocket, 
  Headphones,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Initial Consultation",
    duration: "1-2 Days",
    description: "We start with a deep-dive consultation to understand your business goals, target audience, and technical requirements.",
    deliverables: [
      "Project requirements document",
      "Initial timeline estimation",
      "Budget proposal",
      "Technology recommendations"
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Discovery & Research",
    duration: "3-5 Days",
    description: "Our team conducts comprehensive market research, competitive analysis, and user persona development.",
    deliverables: [
      "Market research report",
      "Competitor analysis",
      "User personas",
      "Feature prioritization matrix"
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design & Prototyping",
    duration: "1-2 Weeks",
    description: "We create wireframes, mockups, and interactive prototypes to visualize your product before development begins.",
    deliverables: [
      "Wireframes & user flows",
      "High-fidelity mockups",
      "Interactive prototypes",
      "Design system documentation"
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "04",
    icon: Code,
    title: "Development Sprints",
    duration: "4-12 Weeks",
    description: "Agile development sprints with bi-weekly demos. Clean, scalable code following industry best practices.",
    deliverables: [
      "Working software increments",
      "Sprint demo recordings",
      "Technical documentation",
      "Code repository access"
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "05",
    icon: TestTube,
    title: "Quality Assurance",
    duration: "1-2 Weeks",
    description: "Rigorous testing including unit tests, integration tests, performance testing, and security audits.",
    deliverables: [
      "Test case documentation",
      "Bug tracking reports",
      "Performance benchmarks",
      "Security audit results"
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Deployment & Launch",
    duration: "3-5 Days",
    description: "Seamless deployment to production with zero-downtime strategies and comprehensive launch support.",
    deliverables: [
      "Production deployment",
      "Launch checklist completion",
      "Monitoring setup",
      "SSL certificates & domain"
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "07",
    icon: Headphones,
    title: "Post-Launch Support",
    duration: "30-90 Days",
    description: "Dedicated support team to handle issues, gather user feedback, and make necessary adjustments.",
    deliverables: [
      "24/7 technical support",
      "Bug fixes & patches",
      "User feedback analysis",
      "Performance optimization"
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "08",
    icon: TrendingUp,
    title: "Growth & Scaling",
    duration: "Ongoing",
    description: "Continuous improvements, feature additions, and scaling infrastructure as your user base grows.",
    deliverables: [
      "Monthly analytics reports",
      "Feature roadmap updates",
      "Infrastructure scaling",
      "A/B testing & optimization"
    ],
    color: "from-indigo-500 to-blue-500",
  },
];

export default function DetailedSteps() {
  return (
    <section className="relative py-32 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-4">
            Step by Step
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              8-Phase Process
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A systematic approach that ensures quality, transparency, and success at every stage.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                        Phase {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-400">Duration: {step.duration}</span>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                      Deliverables
                    </h4>
                    <div className="space-y-2">
                      {step.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-500">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-10 blur-2xl`} />
                    <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
                      <div className="aspect-square flex items-center justify-center">
                        <div className="text-center">
                          <div className={`text-8xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-4`}>
                            {step.number}
                          </div>
                          <step.icon className="w-20 h-20 text-gray-600 mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}