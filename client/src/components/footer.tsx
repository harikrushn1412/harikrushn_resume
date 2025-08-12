import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      href: "mailto:harikrushnamoradiya2000@gmail.com",
      icon: Mail,
      color: "hover:text-teal-400",
      testId: "footer-email"
    },
    {
      href: "https://www.linkedin.com/in/harikrushn-moradiya-266713219",
      icon: Linkedin,
      color: "hover:text-blue-400",
      testId: "footer-linkedin",
      external: true
    },
    {
      href: "tel:+916353742254",
      icon: Phone,
      color: "hover:text-green-400",
      testId: "footer-phone"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-4" data-testid="footer-copyright">
            © 2024 Harikrushn Rajeshbhai Moradiya. Built with passion for Flutter development.
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.testId}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`text-gray-400 ${link.color} transition-colors duration-200`}
                data-testid={link.testId}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
