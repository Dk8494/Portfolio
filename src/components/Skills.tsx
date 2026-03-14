import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, BrainCircuit, LineChart, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="w-8 h-8 text-primary mb-2" />,
      skills: ["Python", "C++", "Java", "SQL", "HTML/CSS"]
    },
    {
      title: "Data Science & AI",
      icon: <BrainCircuit className="w-8 h-8 text-primary mb-2" />,
      skills: ["Machine Learning", "Deep Learning", "YOLOv8", "NLP", "Pandas", "NumPy", "Scikit Learn", "PyTorch", "TensorFlow"]
    },
    {
      title: "Analytics & Viz",
      icon: <LineChart className="w-8 h-8 text-primary mb-2" />,
      skills: ["Tableau", "Power BI", "Excel", "Data Analysis", "Matplotlib", "Seaborn", "Streamlit"]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-8 h-8 text-primary mb-2" />,
      skills: ["SQL", "Azure", "Microsoft SQL", "Snowflake", "AWS"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold gradient-text">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">
            A snapshot of my technical toolkit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-background/60 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center">{category.icon}</div>
                <CardTitle className="text-xl font-semibold tracking-tight">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1.5 text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
