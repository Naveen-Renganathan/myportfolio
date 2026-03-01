import { useState } from "react";
import { Mail, Phone, MapPin, Briefcase, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent! (Demo only)");
    setForm({ name: "", email: "", message: "" });
  };

  const contactCards = [
    {
      title: "Email",
      value: "naveenrenganathan.it@gmail.com",
      href: "mailto:naveenrenganathan.it@gmail.com",
      icon: Mail,
    },
    {
      title: "Phone",
      value: "+91 9043317267",
      href: "tel:+919043317267",
      icon: Phone,
    },
    {
      title: "Location",
      value: "Tirunelveli, India",
      icon: MapPin,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/naveen-renganathan-rs",
      href: "https://linkedin.com/in/naveen-renganathan-rs",
      icon: Linkedin,
    },
    {
      title: "GitHub",
      value: "github.com",
      href: "https://github.com/",
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading mb-6">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {contactCards.map((c) => {
            const Icon = c.icon as any;
            return (
              <div
                key={c.title}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-foreground">{c.title}</h3>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground mt-1 inline-block hover:underline"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-xs text-muted-foreground mt-1">{c.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-medium">Location</span>
                <p className="flex items-center gap-3 text-sm text-foreground mt-1">
                  <MapPin size={16} className="text-primary" />
                  Tirunelveli, India
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-medium">Education</span>
                <p className="flex items-center gap-3 text-sm text-foreground mt-1">
                  <Briefcase size={16} className="text-primary" />
                  B.Tech - Information Technology
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-medium">Email</span>
                <a
                  href="mailto:naveenrenganathan.it@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors mt-1"
                >
                  <Mail size={16} className="text-primary" />
                  naveenrenganathan.it@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-medium">Phone</span>
                <a
                  href="tel:+919043317267"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors mt-1"
                >
                  <Phone size={16} className="text-primary" />
                  +91 9043317267
                </a>
              </div>
              <div className="pt-4 border-t border-border mt-6">
                <p className="text-xs uppercase tracking-wider text-primary font-medium mb-3">Follow</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/naveen-renganathan-rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
