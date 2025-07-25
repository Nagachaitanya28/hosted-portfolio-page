import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Virtual Internship",
      issuer: "AWS",
      year: "2024",
      skills: ["Cloud Computing", "EC2", "S3"],
      certificate: "https://drive.google.com/file/d/1WfxNSxpY-xI1wit5LworPoPFpuE0JGqb/view?usp=drivesdk"
    },
    {
      title: "AWS Data Engineering Virtual Internship", 
      issuer: "AWS",
      year: "2024",
      skills: ["Data Engineering", "ETL", "Lambda"],
      certificate: "https://drive.google.com/file/d/15SfzwKAkPqY7vT70npHXR46dEIGN4cJH/view?usp=drivesdk"
    },
    {
      title: "Google AI-ML Virtual Internship",
      issuer: "Google",
      year: "2024", 
      skills: ["Machine Learning", "AI", "TensorFlow", "Google Cloud"],
      certificate: "https://drive.google.com/file/d/1Rw_rKu8OyxG6RLErHA2lhYzthv9hL87D/view?usp=drivesdk"
    },
    {
      title: "Google Android Developer",
      issuer: "Google",
      year: "2024",
      skills: ["Android", "Kotlin", "Java", "Mobile Development"],
      certificate: "https://drive.google.com/file/d/121ZKLKwmk2bwUtL7waibGzxkvDV9rCI7/view?usp=drivesdk"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through professional certifications and specialized courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="project-shadow smooth-transition hover:hover-shadow hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary smooth-transition">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        {cert.issuer}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {cert.year}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs font-medium border-primary/20 hover:bg-primary/10 hover:border-primary/40 hover:scale-105 smooth-transition"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* View Certificate Button */}
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:scale-105 smooth-transition group-hover:border-primary group-hover:text-primary"
                    asChild
                  >
                    <a
                      href={cert.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <Card className="inline-block project-shadow">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                💡 Always eager to learn new technologies and expand my skill set through hands-on experience and professional certifications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;