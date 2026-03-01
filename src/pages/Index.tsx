import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Internship from "@/components/Internship";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Internship />
      <Certifications />
      <Contact />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">
          © 2026 Naveen Renganathan RS. All rights reserved.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/naveen-renganathan-rs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
