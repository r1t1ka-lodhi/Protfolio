import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "VELONX",
    date: "March 2026",
    description: "Led frontend development for a comprehensive community platform. Coordinated development of mentorship, events, and community modules. Significantly improved platform usability through responsive UI design and complex feature integration.",
    tech: ["React.js", "Tailwind CSS", "Node.js"],
    github: "https://github.com/r1t1ka-lodhi",
    live: "velox.in",
    image: "/images/velonx.png"
  },
  {
    title: "PANCHAYAT",
    date: "May 2026",
    description: "A MERN-stack society governance platform for community notices and trusted service-provider recommendations. Engineered an offline-first PWA using Service Workers to enable access to bylaws and emergency contacts without internet. Designed MongoDB schemas with role-based authentication.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "PWA"],
    github: "https://github.com/r1t1ka-lodhi/panchayat_website",
    live: "https://panchayat-website.onrender.com/auth",
    image: "/images/panchayat.png"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="font-mono text-primary mr-2 text-2xl md:text-3xl">04.</span>
            Some Things I've Built
          </h2>
          <div className="h-[1px] bg-border flex-grow max-w-xs" />
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid md:grid-cols-12 gap-8 items-center ${
                  !isEven ? "md:text-right" : ""
                }`}
              >
                {/* Image */}
                <div 
                  className={`relative w-full h-[300px] md:h-full min-h-[300px] md:col-span-7 rounded-sm overflow-hidden group ${
                    isEven ? "md:col-start-1" : "md:col-start-6"
                  }`}
                  style={{ gridRow: 1 }}
                >
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div 
                  className={`relative z-20 md:col-span-6 ${
                    isEven ? "md:col-start-7" : "md:col-start-1"
                  }`}
                  style={{ gridRow: 1 }}
                >
                  <p className="font-mono text-primary text-sm mb-2">{project.date}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {project.title}
                  </h3>
                  
                  <div className="bg-card border border-border p-6 rounded-sm shadow-xl mb-6 relative">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className={`flex flex-wrap gap-4 font-mono text-sm text-muted-foreground mb-6 ${
                    !isEven ? "md:justify-end" : ""
                  }`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <div className={`flex items-end gap-4 ${
                    !isEven ? "md:justify-center" : ""
                  }`}>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
