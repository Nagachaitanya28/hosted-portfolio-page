import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const About = () => {
  const highlights = [
    "Problem-solving mindset",
    "Effective communication", 
    "Quick learning & adaptability"
  ];

  const education = [
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "RISE Krishna Sai Prakasam Group of Institutions",
      year: "2025",
      detail: "JNTU Kakinada"
    },
    {
      degree: "Intermediate",
      institution: "Royal Junior College, Addanki",
      year: "2021",
      detail: "87%"
    },
    {
      degree: "SSC",
      institution: "Sri Prakasam Govt Boys High School", 
      year: "2018",
      detail: "9.5 CGPA"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:scale-105 smooth-transition animate-float">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and innovation, I strive to create solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Main Description */}
          <div className="space-y-6">
            <Card className="hover-shadow smooth-transition">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a final-year B.Tech student in Electronics and Communication Engineering from JNTU Kakinada (RISE Krishna Sai Prakasam Group of Institutions), with a strong interest in AI, cloud technologies, and full-stack development.
                  </p>
                  <p>
                    I've developed hands-on projects like a real-time audio steganography system for military applications and a news website using HTML, CSS, and JavaScript. I've also earned certifications in AWS Cloud, Data Engineering, Cybersecurity, and Android Development, which have helped me build a strong technical foundation.
                  </p>
                  <p>
                    Known for being a fast learner and a proactive team player, I bring problem-solving skills, adaptability, and a passion for innovation to everything I do. I'm now seeking an opportunity to apply my technical skills in a challenging environment, where I can contribute meaningfully and grow into a solution-oriented tech professional.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card className="hover-shadow smooth-transition">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Key Strengths
                </h3>
                <div className="flex flex-wrap gap-3">
                  {highlights.map((highlight, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover:scale-105 smooth-transition"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education */}
          <div>
            <Card className="hover-shadow smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-8 pb-6 border-l-2 border-border last:border-l-0 last:pb-0"
                    >
                      <div className="absolute -left-2 top-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
                      
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.year}
                          </div>
                          {edu.detail && (
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Award className="h-4 w-4 mr-1" />
                              {edu.detail}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;