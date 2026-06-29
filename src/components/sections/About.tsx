import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="font-mono text-primary mr-2 text-2xl md:text-3xl">01.</span>
            About Me
          </h2>
          <div className="h-[1px] bg-border flex-grow max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a Full Stack Developer from Bhopal, India, with a deep focus on the MERN stack. I build scalable web applications, Progressive Web Apps (PWAs), and REST APIs that are both robust under the hood and clean on the surface.
            </p>
            <p>
              Currently in my 2nd year of B.Tech at University Institute of Technology, Barkatullah University, I didn't wait to graduate to start shipping. I have a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and system design, which allows me to architect solutions rather than just coding them.
            </p>
            <p>
              My philosophy is simple: write precise code, design user-centric interfaces, and build tools that solve actual problems. Whether it's an offline-first PWA for community governance or a high-traffic student platform, I deliver production-ready software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-sm border border-primary/30 p-2 group">
              <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-sm -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="w-full h-full bg-secondary flex items-center justify-center rounded-sm overflow-hidden relative">
                {/* Minimalist terminal representation */}
                <div className="absolute inset-0 bg-background/50 p-6 flex flex-col font-mono text-sm">
                  <div className="flex gap-2 mb-6 border-b border-border pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-primary mb-2">ritika@macbook-pro ~ % whoami</div>
                  <div className="text-foreground mb-4">Full Stack Developer</div>
                  <div className="text-primary mb-2">ritika@macbook-pro ~ % cat skills.json | grep stack</div>
                  <div className="text-foreground">"MERN", "PWA", "REST APIs"</div>
                  <div className="mt-auto animate-pulse text-primary">_</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
