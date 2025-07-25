import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Download,
  Send,
  Clock,
  CheckCircle,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chandavoluchaitanya@gmail.com",
      href: "mailto:chandavoluchaitanya@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7569248607",
      href: "tel:+917569248607"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/chandavolunagachaitanya",
      href: "https://www.linkedin.com/in/chandavolunagachaitanya"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Nagachaitanya28",
      href: "https://github.com/Nagachaitanya28"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@__.c_n_c.__",
      href: "https://www.instagram.com/__.c_n_c.__/"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@NAGACHA40848971",
      href: "https://x.com/NAGACHA40848971"
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Detailed Discussion",
      description: "In-depth conversation about your project requirements"
    },
    {
      icon: Clock,
      title: "Timeline Planning",
      description: "Clear milestone and timeline planning for your project"
    },
    {
      icon: CheckCircle,
      title: "Transparent Communication",
      description: "Regular updates and clear communication throughout"
    }
  ];

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="project-shadow smooth-transition hover:hover-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center p-3 skill-bg rounded-lg hover:scale-105 smooth-transition group"
                    >
                      <IconComponent className="h-5 w-5 text-primary mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary smooth-transition">
                          {contact.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="project-shadow smooth-transition hover:hover-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-semibold text-foreground">Quick Response Guaranteed</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  I typically respond to messages within 24 hours. For urgent matters, feel free to reach out directly via phone or LinkedIn.
                </p>
                
                <h4 className="font-medium text-foreground mb-3">What to Expect:</h4>
                <div className="space-y-3">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <IconComponent className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="project-shadow smooth-transition hover:hover-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Have a project in mind or want to collaborate? I'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="smooth-transition"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="smooth-transition"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="smooth-transition"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="smooth-transition resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full hover:scale-105 smooth-transition"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Resume Download - Aesthetic Design */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur opacity-25 group-hover:opacity-75 smooth-transition"></div>
              <Card className="relative p-8 bg-black/80 dark:bg-white/5 backdrop-blur-sm border border-gray-300/20">
                <CardContent className="text-center space-y-6">
                  <h3 className="text-3xl font-bold text-white dark:text-gray-100">Resume Download</h3>
                  <p className="text-gray-200 dark:text-gray-300 text-lg">
                    Access my complete professional profile
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-110 smooth-transition backdrop-blur-sm px-8 py-4 text-lg font-semibold"
                  >
                    <a
                      href="https://drive.google.com/uc?export=download&id=1UuheWlCprlyVMFr5QAaORv6f33bg0f9J"
                      download="Chandavolu_Naga_Chaitanya_Resume.pdf"
                    >
                      <Download className="mr-3 h-5 w-5 animate-bounce" />
                      Download Resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;