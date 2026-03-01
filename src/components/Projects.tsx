import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Employee Payroll Management System",
    description:
      "A comprehensive payroll management application for handling employee salaries, attendance, and reports.",
    tags: ["Java", "SQL", "Full Stack"],
  },
  {
    title: "Share Plate – Smart Food Provider",
    description:
      "A smart food-sharing platform that enables surplus food distribution from donors to people in need, helping minimize food waste.",
    tags: ["Full Stack", "Social Impact", "Web App"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading mb-10">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-semibold text-foreground">
                  {project.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0 ml-2"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium"
                  >
                    {tag}
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

export default Projects;
