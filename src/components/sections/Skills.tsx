import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { 
  SiReact, SiHtml5, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiPrisma, SiGit, SiGithub, SiPostman, SiRender 
} from "react-icons/si";

const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: Code2, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="font-mono text-primary mr-2 text-2xl md:text-3xl">02.</span>
            Technical Arsenal
          </h2>
          <div className="h-[1px] bg-border flex-grow max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {SKILLS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-8 rounded-sm hover:border-primary/50 transition-colors"
            >
              <h3 className="font-mono text-primary mb-6 text-lg">&lt;{group.category} /&gt;</h3>
              <div className="grid grid-cols-2 gap-6">
                {group.items.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 group/skill">
                    <div className="p-2 bg-background border border-border rounded-sm group-hover/skill:border-primary/50 transition-colors">
                      <skill.icon 
                        className="w-6 h-6 grayscale opacity-70 group-hover/skill:grayscale-0 group-hover/skill:opacity-100 transition-all" 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
