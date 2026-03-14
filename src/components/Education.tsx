import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Indian Institute of Information Technology, Sonepat",
      period: "2023 - 2027",
      score: "CGPA: 9.25/10.0",
      description: "Computer Science Engineering"
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Central Board of Secondary Education",
      period: "2022",
      score: "94.8%",
      description: "Senior Secondary Education"
    },
    {
      degree: "Class X (CBSE)",
      institution: "Central Board of Secondary Education",
      period: "2020",
      score: "92.8%",
      description: "Secondary Education"
    }
  ];

  const achievements = [
    "Selected 2 times for the Smart India Hackathon (SIH) Internal Round, representing institute team in problem-solving and innovation",
    "Selected as a Reliance Foundation Scholar, awarded to top students across India for academic excellence and leadership potential",
    "Qualified JEE Advanced, one of the most competitive engineering entrance examinations in India",
    "Consistently ranked among the top performers throughout academics"
  ];

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold gradient-text">Education & Achievements</h2>
          <p className="text-muted-foreground text-lg">
            Academic journey and recognition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="glass-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-primary">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                  <p className="text-lg font-semibold text-primary">{edu.score}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              <Award className="h-6 w-6" />
              Achievements
            </h3>
            <Card className="glass-card p-6">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="flex gap-3 text-muted-foreground animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-primary text-xl flex-shrink-0">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
