import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
