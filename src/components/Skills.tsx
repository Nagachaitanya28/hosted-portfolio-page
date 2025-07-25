import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Users, Lightbulb, Clock, MessageSquare } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 70 },
    { name: "React.js", level: 70 },
    { name: "Node.js", level: 70 },
    { name: "Java", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "SQL", level: 80 },
    { name: "Machine Learning", level: 85 },
  ];

  const softSkills = [
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Effective communication", icon: MessageSquare },
    { name: "Teamwork & collaboration", icon: Users },
    { name: "Quick learning & adaptability", icon: Brain },
    { name: "Creative thinking", icon: Lightbulb },
    { name: "Time management", icon: Clock },
  ];

  const aiMlSkills = [
    "Machine Learning",
    "Deep Learning", 
    "Prompt Engineering",
    "Generative AI",
    "OpenAI APIs"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card className="project-shadow smooth-transition hover:hover-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl">
                <Code className="h-6 w-6 text-primary mr-3" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="project-shadow smooth-transition hover:hover-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl">
                <Users className="h-6 w-6 text-primary mr-3" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-3 skill-bg rounded-lg hover:scale-105 smooth-transition"
                    >
                      <IconComponent className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI & ML Specialization */}
        <Card className="project-shadow smooth-transition hover:hover-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-2xl">
              <Brain className="h-6 w-6 text-primary mr-3" />
              AI & ML Specialization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {aiMlSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium border-primary/20 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 smooth-transition"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;