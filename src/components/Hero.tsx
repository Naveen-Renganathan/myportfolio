import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-24">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary font-medium mb-2 text-sm">Hello, I'm</p>
          <h1 className="text-4xl md:text-4xl font-bold font-heading leading-tight mb-3">
            Naveen Renganathan RS
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            UG Student | Aspiring Full Stack Developer
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
            I am a Information Technology student interested in building web applications and learning modern technologies. Passionate about solving real-world problems through code.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf.pdf"
              download
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-foreground hover:bg-secondary hover:border-primary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/naveen-renganathan-rs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-foreground hover:bg-secondary hover:border-primary/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className="mt-6">
            <a
              href="#contact"
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all max-w-sm"
              aria-label="Get in touch"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Get In Touch</p>
                <p className="text-xs text-muted-foreground">I'm open to projects and collaborations</p>
              </div>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
            <img
              src={heroAvatar}
              alt="Naveen Renganathan RS"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
