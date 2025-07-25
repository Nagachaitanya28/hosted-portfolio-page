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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The projects highlighted below represent a glimpse of my work. You can explore the full collection on my GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden project-shadow smooth-transition hover:hover-shadow hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs font-medium hover:scale-105 smooth-transition"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:scale-105 smooth-transition"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button
                      size="sm"
                      className="flex-1 hover:scale-105 smooth-transition"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
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