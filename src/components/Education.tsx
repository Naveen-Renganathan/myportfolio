const educationData = [
  {
    level: "10th Standard",
    school: "Rose Mary Matric Hr Sec School",
    year: "2020 – 2021",
  },
  {
    level: "12th Standard",
    school: "Rose Mary Matric Hr Sec School",
    year: "2022 – 2023",
    score: "77.73%",
  },
  {
    level: "B.Tech – Information Technology",
    school: "Panimalar Engineering College",
    year: "2023 – 2027",
    score: "CGPA: 7.7",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold font-heading mb-12">
          My <span className="text-primary">Education</span>
        </h2>

        {/* Flowchart root */}
        <div className="flex flex-col items-center">
          {/* Root node */}
          <div className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold text-sm shadow-md">
            Education Journey
          </div>

          {/* Connector line down */}
          <div className="w-px h-8 bg-border" />

          {/* Horizontal connector bar */}
          <div className="relative w-full max-w-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-border" style={{ width: `${((educationData.length - 1) / educationData.length) * 100}%` }} />

            {/* Branch nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationData.map((item, index) => (
                <div key={item.level} className="flex flex-col items-center">
                  {/* Vertical connector from bar */}
                  <div className="hidden md:block w-px h-8 bg-border" />

                  {/* Card */}
                  <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-center w-full">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                      {item.level}
                    </h3>
                    <p className="text-muted-foreground text-xs mb-2">
                      {item.school}
                    </p>
                    <span className="text-primary font-semibold text-sm">
                      {item.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
