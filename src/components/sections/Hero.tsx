import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background with Generated Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 font-mono text-primary font-medium tracking-wider"
          >
            <span className="text-muted-foreground mr-2">&gt;</span> 
            Hello, world. I am
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-4"
          >
            Ritika Lodhi.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground tracking-tight mb-8"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
          >
            A Full Stack Developer specialized in the MERN Stack. 
            Currently in my 2nd year of B.Tech, leading teams, and architecting production-scale applications that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-bold font-mono hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              data-testid="link-hero-projects"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/r1t1ka-lodhi" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-sm transition-all"
                data-testid="link-hero-github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/ritika-lodhi-b958422ab" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-sm transition-all"
                data-testid="link-hero-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:ritikalodhi3@gmail.com" 
                className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-sm transition-all"
                data-testid="link-hero-email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
