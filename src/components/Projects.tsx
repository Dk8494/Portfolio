import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Brain Tumor Detection using YOLOv8",
      description: "Developed a YOLOv8 object detection model for brain tumor localization in MRI images. Trained on 3000+ MRI images achieving 92% detection accuracy. Implemented automated inference pipeline generating bounding box predictions.",
      tech: ["Python", "YOLOv8", "PyTorch", "OpenCV", "NumPy"],
      image: "",
      github: "https://github.com/Dk8494",
      live: "#"
    },
    {
      title: "TMDB Movie Recommendation System",
      description: "Built a content-based movie recommendation system using the TMDB 5000 dataset. Applied NLP techniques and CountVectorizer to convert movie metadata into feature vectors. Used cosine similarity to generate personalized movie recommendations. Developed an interactive Streamlit web app for real-time movie suggestions.",
      tech: ["Python", "Pandas", "Scikit-learn", "NLP", "Cosine Similarity", "Streamlit"],
      image: "",
      github: "https://github.com/Dk8494",
      live: "#"
    },
        {
      title: "Swiggy Food Delivery Data Analysis Dashboard",
      description: "Analyzed 197K+ Swiggy food delivery records across 28 Indian cities to identify trends in restaurant ratings, pricing, and cuisine popularity. Developed an interactive Excel dashboard using Pivot Tables, Pivot Charts, and Slicers. Processed and cleaned data from 993 restaurants and 4,900+ food categories. Performed pricing and rating analysis, identifying an average dish price of 268 and average customer rating of 4.34.",
      tech: ["Excel", "Data Visualization"],
      image: "/swiggy-dashboard.png",
      github: "https://github.com/Dk8494",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {project.image && (
                <div className="relative overflow-hidden w-full bg-muted/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
