import { Calendar, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const responsibilities = [
    "Lead development and delivery of multiple cross-platform mobile applications using Flutter, ensuring high performance and pixel-perfect UI on Android and iOS.",
    "Collaborated with product managers, designers, and backend teams to implement scalable features with Flutter, Firebase, and RESTful APIs.",
    "Implemented CI/CD pipelines with GitHub Actions and Codemagic to automate testing and deployment, reducing release cycles by 30%.",
    "Mentored junior developers and conducted code reviews to maintain high code quality and promote best practices.",
    "Integrated third-party SDKs, payment gateways, and push notification services to enhance functionality and user engagement.",
    "Expert in handling complex code and quick problem solving."
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="experience-title">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-600">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900" data-testid="job-title">
                  SDE-ll Flutter Developer
                </h3>
                <h4 className="text-xl font-semibold text-teal-600 mt-1" data-testid="company-name">
                  Square Infosoft
                </h4>
              </div>
              <div className="mt-2 sm:mt-0">
                <span className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium" data-testid="employment-period">
                  <Calendar className="w-4 h-4 mr-2" />
                  2022 - Present
                </span>
              </div>
            </div>

            <div className="space-y-4 text-gray-600">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start" data-testid={`responsibility-${index}`}>
                  <CheckCircle className="text-teal-500 mt-1 mr-3 flex-shrink-0 w-5 h-5" />
                  <p>{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
