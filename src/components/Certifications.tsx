import { Award } from "lucide-react";

const certifications = [
  { name: "Full Stack Development Certificate", org: "Informatronics Project Services",file: "/cert/full-stack.pdf"},
  { name: "Java Internship Certificate", org: "QSpiders",},
  { name: "Acquiring Data", org: "NASSCOM (2024)" ,file: "/cert/acquiring-data.pdf"},
  { name: "Cybersecurity Fundamentals", org: "NASSCOM (2024)",file: "/cert/cybersecurity-fundamentals.pdf" },
  { name: "Advanced Diploma in Python Programming", org: "Certification (2023)",file: "/cert/advanced-python.pdf" },
  { name: "SQL (Basic)", org: "HackerRank (2026)",file: "/cert/sql-basic.pdf" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading mb-10">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Award size={16} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-foreground">{cert.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>
                {cert.file && (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary mt-2 inline-block hover:underline"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
