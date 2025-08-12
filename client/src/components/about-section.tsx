import { Code } from "lucide-react";

export default function AboutSection() {
  const languages = ["Dart", "JavaScript", "Kotlin (Basic)", "Swift (Basic)"];
  const frameworks = ["Flutter", "Firebase", "Provider", "Bloc", "GetX"];
  const backend = ["RESTful APIs", "GraphQL", "Firebase Firestore", "Cloud Functions"];
  const other = ["Git & GitHub", "CI/CD", "SQLite", "Figma"];

  const SkillBadge = ({ skill, color }: { skill: string; color: string }) => (
    <span className={`px-3 py-1 ${color} rounded-full text-sm`} data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
      {skill}
    </span>
  );

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="about-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6" data-testid="professional-journey-title">
              Professional Journey
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6" data-testid="bio-paragraph-1">
              I am a highly dedicated Flutter developer with 4.5 years of experience designing and delivering robust, scalable, and visually appealing cross-platform mobile applications. My passion lies in creating seamless user experiences by combining clean code, modern UI/UX principles, and efficient performance optimization.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6" data-testid="bio-paragraph-2">
              I specialize in Flutter app architecture, state management, and integrating RESTful APIs to build feature-rich apps for both Android and iOS. Always eager to learn and adapt, I focus on writing maintainable code and collaborating effectively within agile teams.
            </p>
            <div className="flex items-center text-teal-600 font-semibold" data-testid="experience-highlight">
              <Code className="w-5 h-5 mr-2" />
              4.5+ Years of Experience
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6" data-testid="technical-skills-title">
              Technical Skills
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3" data-testid="languages-title">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <SkillBadge
                      key={language}
                      skill={language}
                      color="bg-teal-100 text-teal-800"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3" data-testid="frameworks-title">Frameworks & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((framework, index) => {
                    const colors = [
                      "bg-teal-100 text-teal-800",
                      "bg-orange-100 text-orange-800",
                      "bg-indigo-100 text-indigo-800",
                      "bg-cyan-100 text-cyan-800",
                      "bg-pink-100 text-pink-800"
                    ];
                    return (
                      <SkillBadge
                        key={framework}
                        skill={framework}
                        color={colors[index % colors.length]}
                      />
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3" data-testid="backend-title">Backend & APIs</h4>
                <div className="flex flex-wrap gap-2">
                  {backend.map((tech, index) => {
                    const colors = [
                      "bg-green-100 text-green-800",
                      "bg-purple-100 text-purple-800",
                      "bg-orange-100 text-orange-800",
                      "bg-red-100 text-red-800"
                    ];
                    return (
                      <SkillBadge
                        key={tech}
                        skill={tech}
                        color={colors[index % colors.length]}
                      />
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3" data-testid="other-tech-title">Other Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {other.map((tech, index) => {
                    const colors = [
                      "bg-gray-100 text-gray-800",
                      "bg-blue-100 text-blue-800",
                      "bg-yellow-100 text-yellow-800",
                      "bg-teal-100 text-teal-800"
                    ];
                    return (
                      <SkillBadge
                        key={tech}
                        skill={tech}
                        color={colors[index % colors.length]}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
