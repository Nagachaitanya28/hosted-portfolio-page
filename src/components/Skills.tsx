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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 hover:scale-105 smooth-transition animate-float">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Skills with Shadow Effect */}
          <div className="lg:col-span-2">
            <Card className="h-full p-6 hover-shadow smooth-transition hover:scale-[1.02] animate-slide-in">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground animate-fade-up">Technical Skills</h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2 hover:scale-105 smooth-transition animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-2 shadow-sm progress-bar-fade" />
                      <div className="absolute inset-0 rounded-full shadow-inner opacity-50 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column with Soft Skills and AI/ML */}
          <div className="space-y-6">
            {/* Soft Skills - Compact */}
            <Card className="p-4 hover-shadow smooth-transition hover:scale-[1.02] animate-slide-in">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-foreground">Soft Skills</h3>
              </CardHeader>
              <CardContent className="space-y-1">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 p-1 rounded-lg skill-bg hover:shadow-md smooth-transition hover:scale-105 animate-pulse" style={{animationDelay: `${index * 50}ms`}}>
                    <skill.icon className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground text-sm">{skill.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* AI & ML Specialization - Compact */}
            <Card className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-primary/20 hover-shadow smooth-transition hover:scale-[1.02] animate-slide-in">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-primary text-center">⚫ AI & ML Specialization ⚫</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {aiMlSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 text-xs font-semibold hover:scale-110 smooth-transition hover:shadow-lg animate-pulse bg-gray-600 text-white hover:bg-gray-700" style={{animationDelay: `${index * 100}ms`}}>
                      {skill}
                    </Badge>
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

export default Skills;