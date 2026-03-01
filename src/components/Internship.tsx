import { Briefcase } from "lucide-react";

const internships = [
  {
    title: "Full Stack Development Internship",
    organization: "Informatronics Project Services",
    description:
      "Worked on building responsive web applications using modern full-stack technologies. Gained hands-on experience with front-end and back-end development workflows.",
    duration: "2024",
  },
  {
    title: "Java Internship",
    organization: "QSpiders",
    description:
      "Completed core Java training focusing on OOP principles, data structures, and application development fundamentals.",
    duration: "2026",
  },
];

const Internship = () => {
  return (
    <section id="internship" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading mb-10">
          Internship <span className="text-primary">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {internships.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-primary text-sm">{item.organization}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {item.description}
              </p>
              <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                {item.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
