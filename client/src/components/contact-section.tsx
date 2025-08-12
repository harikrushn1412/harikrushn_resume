import { Mail, Linkedin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import PdfResume from "@/components/pdf-resume";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "harikrushnamoradiya2000@gmail.com",
      link: "mailto:harikrushnamoradiya2000@gmail.com",
      color: "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
      linkColor: "text-teal-600 hover:text-teal-800",
      testId: "contact-email"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/harikrushn-moradiya-266713219",
      color: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      linkColor: "text-blue-600 hover:text-blue-800",
      testId: "contact-linkedin"
    },
    {
      icon: Phone,
      title: "Mobile",
      value: "+91 6353742254",
      link: "tel:+916353742254",
      color: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      linkColor: "text-green-600 hover:text-green-800",
      testId: "contact-phone"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="contact-description">
            Ready to collaborate on your next Flutter project? Let's discuss how we can bring your mobile app ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <div key={method.title} className="text-center group" data-testid={method.testId}>
                <div className={`inline-flex items-center justify-center w-16 h-16 ${method.color} rounded-full mb-4 transition-colors duration-300`}>
                  <method.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <a 
                  href={method.link}
                  target={method.title === "LinkedIn" ? "_blank" : undefined}
                  rel={method.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className={`${method.linkColor} transition-colors duration-200`}
                  data-testid={`${method.testId}-link`}
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8" data-testid="cta-section">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid="cta-title">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-600 mb-6" data-testid="cta-description">
                Whether you need a cross-platform mobile app, Flutter expertise, or want to discuss your next project, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button
                  asChild
                  className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-semibold hover:bg-teal-700"
                  data-testid="cta-button"
                >
                  <a href="mailto:harikrushnamoradiya2000@gmail.com">
                    <Send className="w-4 h-4 mr-2" />
                    Start a Conversation
                  </a>
                </Button>
                
                <div className="text-center">
                  <PdfResume />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
