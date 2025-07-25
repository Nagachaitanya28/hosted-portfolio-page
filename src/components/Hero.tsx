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
              {/* Floating Animation Elements */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="w-16 h-16 bg-gray-800/30 rounded-lg animate-pulse hover:scale-110 smooth-transition" />
                  <div className="w-16 h-16 bg-gray-600/30 rounded-lg animate-pulse delay-200 hover:scale-110 smooth-transition" />
                  <div className="w-16 h-16 bg-gray-400/30 rounded-lg animate-pulse delay-500 hover:scale-110 smooth-transition" />
                </div>
                <div className="flex justify-center space-x-6 mb-8">
                  <div className="w-12 h-12 bg-gray-700/40 rounded-full animate-bounce" />
                  <div className="w-10 h-10 bg-gray-500/40 rounded-full animate-bounce delay-300" />
                  <div className="w-14 h-14 bg-gray-600/40 rounded-full animate-bounce delay-700" />
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
                {/* Enhanced Floating elements with more animations */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-800 rounded-full animate-bounce hover:animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-bounce delay-1000 hover:animate-spin" />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gray-600 rounded-full animate-bounce delay-500 hover:animate-ping" />
                <div className="absolute top-8 -right-8 w-5 h-5 bg-gray-500 rounded-full animate-pulse delay-200" />
                <div className="absolute -bottom-8 right-8 w-7 h-7 bg-gray-700 rounded-full animate-bounce delay-800" />
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