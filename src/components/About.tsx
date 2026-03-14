import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Data Analysis",
      description: "Expert in Python, SQL, and analytics tools for comprehensive data lifecycle management"
    },
    {
      icon: Palette,
      title: "Machine Learning",
      description: "Building robust ML models using TensorFlow, Scikit-learn, and advanced algorithms"
    },
    {
      icon: Rocket,
      title: "Visualization",
      description: "Creating interactive dashboards with Tableau, Power BI, and Python libraries"
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proactive Computer Science Engineering student passionate about Data Science and AI/ML
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-card p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-8 md:p-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a 3rd-year Computer Science Engineering student at Indian Institute of Information Technology, Sonepat, 
              with a strong focus on Data Analysis, Machine Learning, and Artificial Intelligence. I possess excellent 
              hands-on proficiency in Python for the entire data lifecycle, from analysis and manipulation to building 
              robust ML models and interactive dashboards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm eager to leverage my technical foundation and analytical mindset to drive data-driven innovation. 
              As a Reliance Foundation Scholar and having qualified JEE Advanced, I'm dedicated to translating complex 
              data into actionable insights that solve real-world problems.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
