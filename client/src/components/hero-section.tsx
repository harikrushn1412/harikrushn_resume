import { Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4" data-testid="hero-title">
              <span className="text-teal-700">Harikrushn</span><br />
              <span className="text-gray-700">Rajeshbhai Moradiya</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6" data-testid="hero-subtitle">
              SDE-ll Flutter Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl" data-testid="hero-description">
              Transforming ideas into elegant, high-performance Flutter apps - 4.5 years of delivering seamless mobile experiences across platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold hover:bg-teal-700"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center px-6 py-3 border-2 border-teal-600 text-teal-600 font-semibold hover:bg-teal-50"
                data-testid="button-projects"
              >
                <Code className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 shadow-2xl border-8 border-white flex items-center justify-center" data-testid="hero-image">
              <div className="text-center">
                <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl font-bold text-white">HM</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
