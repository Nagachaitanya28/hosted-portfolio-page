import { Mail, Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Chandavolu Naga Chaitanya</h3>
            <p className="text-primary-foreground/80">
              Full-stack Developer | AI Explorer
            </p>
            <p className="text-primary-foreground/70">
              Turning ideas into solutions with code, AI, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Certifications", id: "certifications" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-primary-foreground/80 hover:text-primary-foreground smooth-transition"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="space-y-3">
              <a
                href="mailto:chandavoluchaitanya@gmail.com"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground smooth-transition"
              >
                <Mail className="h-4 w-4 mr-2" />
                chandavoluchaitanya@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/chandavolunagachaitanya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground smooth-transition"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Nagachaitanya28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-foreground/80 hover:text-primary-foreground smooth-transition"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 flex items-center justify-center">
            © {currentYear} Chandavolu Naga Chaitanya. Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-red-400" /> for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;