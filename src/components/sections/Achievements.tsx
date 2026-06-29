import { motion } from "framer-motion";
import { Award, Code2, Users, GraduationCap } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: Award,
    value: "404",
    label: "GATE 2026 Score",
    description: "Demonstrating strong computer science fundamentals."
  },
  {
    icon: Code2,
    value: "3",
    label: "Production MERN Apps",
    description: "Built and deployed scalable full-stack applications."
  },
  {
    icon: GraduationCap,
    value: "8.4/10",
    label: "B.Tech CGPA",
    description: "Consistent academic excellence at UIT Barkatullah University."
  },
  {
    icon: Users,
    value: "5+",
    label: "Events Organized",
    description: "Coordinated technical and community events."
  }
];

export function Achievements() {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-border p-8 rounded-sm text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {item.value}
              </div>
              <div className="font-mono text-sm text-primary mb-3">
                {item.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
