import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Hero Banner Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Hero Banner"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8">
              {/* Code Block */}
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 font-mono text-sm border border-white/10">
                <div className="text-gray-300">
                  <span className="text-blue-300">class</span>{" "}
                  <span className="text-yellow-300">Chaitanya</span>:
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-blue-300">def</span>{" "}
                  <span className="text-green-300">__init__</span>(self):
                </div>
                <div className="pl-8 text-gray-300">
                  self.skills = [<span className="text-orange-300">"Python"</span>, <span className="text-orange-300">"AI"</span>, <span className="text-orange-300">"Cloud"</span>, <span className="text-orange-300">"Web Dev"</span>]
                </div>
                <div className="pl-8 text-gray-300">
                  self.goal = <span className="text-orange-300">"Build. Learn. Conquered"</span>
                </div>
                <div className="mt-4 text-gray-300">
                  <span className="text-blue-300">def</span>{" "}
                  <span className="text-green-300">status</span>(self):
                </div>
                <div className="pl-4 text-gray-300">
                  <span className="text-purple-300">return</span> f<span className="text-orange-300">"Coding, Learning & Conquering with {"{self.goal}"}"</span>
                </div>
                <div className="mt-4 text-gray-300">
                  me = Chaitanya()
                </div>
                <div className="text-gray-300">
                  print(me.status())
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm Chandavolu{" "}
                  <span className="text-primary-foreground">
                    Naga Chaitanya
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                  Full-stack Developer | AI Explorer
                </p>
                <p className="text-lg text-gray-300 max-w-xl">
                  Turning ideas into solutions with code, AI, and innovation.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 smooth-transition"
                >
                  Explore My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:scale-105 smooth-transition"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1UuheWlCprlyVMFr5QAaORv6f33bg0f9J/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl hover:scale-105 smooth-transition">
                  <img
                    src={profilePhoto}
                    alt="Chandavolu Naga Chaitanya"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-bounce delay-1000" />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white hover:text-gray-300 smooth-transition animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;