import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background text-center">
      <div className="container mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/r1t1ka-lodhi" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/ritika-lodhi-b958422ab" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:ritikalodhi3@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <a 
          href="https://github.com/r1t1ka-lodhi"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Designed & Built by Ritika Lodhi
        </a>
      </div>
    </footer>
  );
}
