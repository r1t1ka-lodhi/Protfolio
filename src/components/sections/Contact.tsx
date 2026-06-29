import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useHireModal } from "@/hooks/use-hire-modal";

export function Contact() {
  const { openModal } = useHireModal();

  return (
    <section id="contact" className="py-32 relative text-center">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-primary mb-4 text-sm md:text-base">
            06. What's Next?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold font-mono rounded-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
              data-testid="button-contact-email"
            >
              <Mail className="w-5 h-5" />
              Hire me
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground font-mono text-sm">
            <MapPin className="w-4 h-4" />
            Saket Nagar, Bhopal, India
          </div>
        </motion.div>
      </div>
    </section>
  );
}
