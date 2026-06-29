import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Web Development Head & Vice President",
    company: "Velonx",
    date: "2026 – Present",
    points: [
      "Create and manage the complete UI/UX of the Velonx platform from scratch.",
      "Develop and execute comprehensive marketing strategies integrated with platform features.",
      "Monitor seamless interaction of students on the platform, ensuring zero-downtime during peak traffic.",
    ]
  },
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    date: "Nov 2025 – Dec 2025",
    points: [
      "Built a full-stack unique Form project utilizing the MERN stack.",
      "Implemented responsive layouts and complex state management.",
      "Integrated backend endpoints for data collection and validation."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="font-mono text-primary mr-2 text-2xl md:text-3xl">03.</span>
            Where I've Worked
          </h2>
          <div className="h-[1px] bg-border flex-grow max-w-xs" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              {/* Desktop layout uses a distinct visual style */}
              <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-start">
                
                {/* Left side (Date) - Desktop only */}
                <div className="hidden md:block text-right pt-1 font-mono text-sm text-muted-foreground">
                  {exp.date}
                </div>

                {/* Center timeline connector */}
                <div className="absolute left-0 md:relative md:flex md:justify-center flex-col items-center h-full">
                  <div className="w-10 h-10 rounded-sm bg-secondary border border-primary/30 flex items-center justify-center z-10 relative mt-[-4px]">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  {idx !== EXPERIENCES.length - 1 && (
                    <div className="absolute top-10 bottom-[-3rem] md:bottom-[-4rem] left-[1.15rem] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-border" />
                  )}
                </div>

                {/* Right side (Content) */}
                <div className="pb-8 md:pb-0">
                  <div className="md:hidden font-mono text-sm text-primary mb-2">
                    {exp.date}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-primary font-medium mb-4">
                    @ {exp.company}
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-3 mt-1 font-mono text-sm">&gt;</span>
                        <span className="leading-relaxed text-sm md:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
