import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    school: "Barkatullah University – University Institute of Technology, Bhopal",
    date: "2023 – 2027",
    score: "CGPA: 8.4/10",
  },
  {
    degree: "Class XII (CBSE)",
    school: "High School",
    date: "2022 – 2023",
    score: null,
  },
  {
    degree: "Class X (CBSE)",
    school: "Secondary School",
    date: "2019 – 2020",
    score: null,
  }
];

export function Education() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="font-mono text-primary mr-2 text-2xl md:text-3xl">05.</span>
            Education
          </h2>
          <div className="h-[1px] bg-border flex-grow max-w-xs" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 bg-card border border-border rounded-sm hover:border-primary/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground">
                  {edu.school}
                </p>
              </div>
              <div className="flex flex-col md:items-end gap-1">
                <span className="font-mono text-sm text-primary">
                  {edu.date}
                </span>
                {edu.score && (
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-sm border border-primary/20">
                    {edu.score}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
