import { Code, Database, Wrench } from "lucide-react";

const skills = [
  {
    category: "Programming & Frameworks",
    icon: Code,
    items: ["Python", "Java", "HTML", "CSS", "JavaScript", "React JS", "Node JS"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["AI/ML Fundamentals","SQL", "MongoDB"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["VS Code", "Git", "GitHub","JWT","Docker(Basic)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading mb-10">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <group.icon size={18} className="text-primary" />
                <h3 className="font-heading font-semibold text-sm text-foreground">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
