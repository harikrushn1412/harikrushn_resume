import { Code, Smartphone, Settings, Cog } from "lucide-react";

export default function SkillsSection() {
  const languages = [
    { name: "Dart", level: 100 },
    { name: "JavaScript", level: 85 },
    { name: "Kotlin", level: 60 },
    { name: "Swift", level: 60 },
    { name: "Java", level: 80 }
  ];

  const frameworks = [
    "Flutter", "Flutter Bloc", "Provider", "GetX", "Firebase", "GraphQL", "REST APIs"
  ];

  const tools = [
    "Android Studio", "Xcode", "VS Code", "Git & GitHub", "Firebase CLI", "Postman", "Codemagic"
  ];

  const otherSkills = [
    "Clean Architecture", "MVVM", "SOLID Principles", "Unit Testing", 
    "Performance Optimization", "Localization", "Accessibility"
  ];

  const skillColors = [
    "bg-teal-100 text-teal-800",
    "bg-blue-100 text-blue-800", 
    "bg-indigo-100 text-indigo-800",
    "bg-purple-100 text-purple-800",
    "bg-orange-100 text-orange-800",
    "bg-green-100 text-green-800",
    "bg-cyan-100 text-cyan-800",
    "bg-gray-100 text-gray-800",
    "bg-yellow-100 text-yellow-800",
    "bg-red-100 text-red-800",
    "bg-pink-100 text-pink-800"
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="skills-title">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Code className="text-2xl text-teal-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900" data-testid="languages-section-title">Languages</h3>
            </div>
            <div className="space-y-2">
              {languages.map((language) => (
                <div key={language.name} className="flex items-center justify-between" data-testid={`language-${language.name.toLowerCase()}`}>
                  <span className="text-gray-700">{language.name}</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-teal-600 h-2 rounded-full" 
                      style={{ width: `${language.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Smartphone className="text-2xl text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900" data-testid="frameworks-section-title">Frameworks</h3>
            </div>
            <div className="space-y-3">
              {frameworks.map((framework, index) => (
                <span 
                  key={framework}
                  className={`inline-block px-3 py-1 ${skillColors[index % skillColors.length]} rounded-full text-sm mr-2 mb-2`}
                  data-testid={`framework-${framework.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Settings className="text-2xl text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900" data-testid="tools-section-title">Tools</h3>
            </div>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <span 
                  key={tool}
                  className={`inline-block px-3 py-1 ${skillColors[index % skillColors.length]} rounded-full text-sm mr-2 mb-2`}
                  data-testid={`tool-${tool.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Cog className="text-2xl text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900" data-testid="other-skills-section-title">Other Skills</h3>
            </div>
            <div className="space-y-3">
              {otherSkills.map((skill, index) => (
                <span 
                  key={skill}
                  className={`inline-block px-3 py-1 ${skillColors[index % skillColors.length]} rounded-full text-sm mr-2 mb-2`}
                  data-testid={`other-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
