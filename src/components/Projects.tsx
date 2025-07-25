import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import ecommerceProject from "@/assets/ecommerce-project.jpg";
import audioEncryptionProject from "@/assets/audio-encryption-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully functional e-commerce platform featuring authentication, product handling, and a secure UI.",
      image: ecommerceProject,
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "Audio Data Hiding for Military Use", 
      description: "Steganographic system to securely embed data in audio signals for military communications.",
      image: audioEncryptionProject,
      technologies: ["MATLAB", "Signal Processing", "Cryptography"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:scale-105 smooth-transition animate-float">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-shadow smooth-transition group hover:scale-[1.02] animate-float" style={{animationDelay: `${index * 200}ms`}}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary smooth-transition">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="hover:scale-110 smooth-transition">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild className="hover:scale-110 smooth-transition">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button size="sm" asChild className="hover:scale-110 smooth-transition">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:scale-105 smooth-transition"
            asChild
          >
            <a
              href="https://github.com/Nagachaitanya28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;