import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      position: "Product Manager",
      company: "Square Infosoft",
      content: "Harikrushn is an exceptional Flutter developer who consistently delivers high-quality mobile applications. His expertise in cross-platform development and attention to detail helped us launch multiple successful apps on time and within budget.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Technical Lead",
      company: "Digital Solutions Inc",
      content: "Working with Harikrushn on our travel app project was fantastic. His deep understanding of Flutter architecture and state management patterns resulted in a scalable and maintainable codebase. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Startup Founder",
      company: "TechVenture Labs",
      content: "Harikrushn transformed our app idea into reality with his Flutter expertise. His ability to implement complex features like real-time tracking and payment integrations while maintaining excellent UI/UX standards is impressive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      id: 4,
      name: "Anjali Gupta",
      position: "UI/UX Designer",
      company: "Creative Studio",
      content: "As a designer, I appreciate developers who can bring designs to life pixel-perfectly. Harikrushn's attention to detail and understanding of Flutter's UI capabilities made our collaboration seamless and productive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      id: 5,
      name: "David Thompson",
      position: "CTO",
      company: "MobileFirst Solutions",
      content: "Harikrushn's contribution to our quote management app was outstanding. His clean coding practices, comprehensive testing approach, and ability to optimize app performance exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      id: 6,
      name: "Sarah Wilson",
      position: "Project Manager",
      company: "EduTech Solutions",
      content: "The college review application Harikrushn developed for us demonstrates his versatility as a Flutter developer. His implementation of speech-to-text features and PDF generation capabilities was flawless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="testimonials-title">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="testimonials-description">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="absolute top-4 right-4 text-teal-100">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`testimonial-image-${testimonial.id}`}
                />
                <div>
                  <h4 className="font-semibold text-gray-900" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600" data-testid={`testimonial-position-${testimonial.id}`}>
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-teal-600 font-medium" data-testid={`testimonial-company-${testimonial.id}`}>
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4" data-testid={`testimonial-rating-${testimonial.id}`}>
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 leading-relaxed text-sm" data-testid={`testimonial-content-${testimonial.id}`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8" data-testid="testimonials-cta">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join These Satisfied Clients?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how I can help bring your Flutter project to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                data-testid="testimonials-contact-button"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                }}
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}