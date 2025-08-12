import { ExternalLink } from "lucide-react";
import { SiGoogleplay, SiApple } from "react-icons/si";
import photospotLogo from "@assets/app_logo_2_1755019497043.png";
import collegeReviewLogo from "@assets/image_logo_1755019531957.png";
import mtvLogo from "@assets/app_logo_1755019568144.png";
import dscvrLogo from "@assets/dscvr_placeholder_1755019727832.jpg";
import cocAdminLogo from "@assets/image_logo_1755019779239.png";

export default function ProjectsSection() {
  const logoMap = {
    photospot: photospotLogo,
    "college-review": collegeReviewLogo,
    mtv: mtvLogo,
    dscvr: dscvrLogo,
    "coc-admin": cocAdminLogo
  };

  const projects = [
    {
      id: "photospot",
      title: "Photospot App",
      description: "AI-driven travel app for personalized trips, user posts, deep linking, and SEO optimization. Developed fully in Flutter for Android/iOS.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      logo: "@assets/app_logo_2_1755019497043.png",
      tags: ["AI Integration", "Deep Linking", "In-App Purchases"],
      role: "Lead + Developer",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.photospot.android",
        appStore: "https://apps.apple.com/us/app/photospot-for-travel-photos/id6461773115",
        website: "https://photospot.us"
      }
    },
    {
      id: "mtv",
      title: "MTV App",
      description: "Engaging animations, offline support, deep linking, secure in-app purchases for entertainment content.",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      logo: "@assets/app_logo_1755019568144.png",
      tags: ["Animations", "Offline Support", "Deep Linking"],
      role: "Lead + Developer",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.mytruevalue.self3",
        appStore: "https://apps.apple.com/us/app/6470752647"
      }
    },
    {
      id: "dscvr",
      title: "Dscvr",
      description: "Real-time user presence and live tracking with geofencing, interactive maps, and daily notifications.",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      logo: "@assets/dscvr_placeholder_1755019727832.jpg",
      tags: ["Live Tracking", "Geofencing", "Real-time"],
      role: "Lead + Developer",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.snapsales.dscvr",
        appStore: "https://apps.apple.com/us/app/1454377592"
      }
    },
    {
      id: "quote",
      title: "Quote App",
      description: "Curated quotes with swipe interface, light/dark themes, customizable fonts, offline mode, and daily notifications.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      tags: ["Dark Theme", "Swipe UI", "Offline"],
      role: "Lead + Developer",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.kabalarian.app.android",
        appStore: "https://apps.apple.com/us/app/6443553584"
      }
    },
    {
      id: "coc-admin",
      title: "COC Admin",
      description: "Admin dashboard for managing user-created layouts, approvals, and content moderation for Clash of Clans app.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      logo: "@assets/image_logo_1755019779239.png",
      tags: ["Admin Panel", "Content Management", "Moderation"],
      role: "Developer",
      links: {
        website: "https://cocbases-eae12.web.app/login"
      }
    },
    {
      id: "college-review",
      title: "College Review App",
      description: "Multi-level question forms, speech-to-text note-taking, image attachments, PDF exports for campus reviews.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      logo: "@assets/image_logo_1755019531957.png",
      tags: ["Speech-to-Text", "PDF Export", "Forms"],
      role: "Lead + Developer",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.visitcollege.android",
        appStore: "https://apps.apple.com/us/app/6480163259"
      }
    }
  ];

  const tagColors = [
    "bg-teal-100 text-teal-800",
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-purple-100 text-purple-800",
    "bg-red-100 text-red-800",
    "bg-yellow-100 text-yellow-800",
    "bg-indigo-100 text-indigo-800",
    "bg-pink-100 text-pink-800",
    "bg-cyan-100 text-cyan-800",
    "bg-orange-100 text-orange-800",
    "bg-gray-100 text-gray-800"
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="projects-title">
            Apps & Projects
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100" data-testid={`project-${project.id}`}>
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} Interface`}
                  className="w-full h-full object-cover opacity-20"
                  data-testid={`project-bg-${project.id}`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-lg p-3 border-2 border-gray-200">
                    <img
                      src={logoMap[project.id as keyof typeof logoMap]}
                      alt={`${project.title} Logo`}
                      className="w-20 h-20 object-contain rounded-xl"
                      data-testid={`project-logo-${project.id}`}
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`inline-block px-2 py-1 ${tagColors[tagIndex % tagColors.length]} rounded text-xs mr-2 mb-1`}
                      data-testid={`project-tag-${project.id}-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700" data-testid={`project-role-${project.id}`}>
                    {project.role}
                  </span>
                  <div className="flex space-x-2">
                    {project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-800 transition-colors"
                        data-testid={`project-playstore-${project.id}`}
                      >
                        <SiGoogleplay size={18} />
                      </a>
                    )}
                    {project.links.appStore && (
                      <a
                        href={project.links.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-800 transition-colors"
                        data-testid={`project-appstore-${project.id}`}
                      >
                        <SiApple size={18} />
                      </a>
                    )}
                    {project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-800 transition-colors"
                        data-testid={`project-website-${project.id}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
