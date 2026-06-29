import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useHireModal } from "@/hooks/use-hire-modal";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useHireModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold font-mono tracking-tighter text-primary z-50 relative"
          data-testid="link-home-logo"
        >
          &lt;RL /&gt;
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono"
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={openModal}
            className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors font-mono text-sm rounded-md"
            data-testid="button-nav-hire"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border h-screen flex flex-col items-center justify-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors font-mono"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => { openModal(); setMobileMenuOpen(false); }}
                className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 transition-colors font-mono text-xl rounded-md"
              >
                Hire Me
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
