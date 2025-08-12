import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function PdfResume() {
  const generatePDF = async () => {
    // Create a hidden div with resume content
    const resumeContent = document.createElement('div');
    resumeContent.style.position = 'absolute';
    resumeContent.style.left = '-9999px';
    resumeContent.style.width = '794px'; // A4 width in pixels at 96 DPI
    resumeContent.style.padding = '40px';
    resumeContent.style.backgroundColor = 'white';
    resumeContent.style.fontFamily = 'Arial, sans-serif';
    
    resumeContent.innerHTML = `
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #0d9488; font-size: 32px; margin: 0 0 8px 0;">Harikrushn Rajeshbhai Moradiya</h1>
        <h2 style="color: #2563eb; font-size: 20px; margin: 0 0 12px 0;">SDE-II Flutter Developer</h2>
        <p style="color: #6b7280; font-size: 14px; margin: 0;">
          Email: harikrushnamoradiya2000@gmail.com | Phone: +91 6353742254<br>
          LinkedIn: linkedin.com/in/harikrushn-moradiya-266713219
        </p>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="color: #0d9488; font-size: 18px; border-bottom: 2px solid #0d9488; padding-bottom: 4px; margin-bottom: 12px;">Professional Summary</h3>
        <p style="color: #374151; font-size: 12px; line-height: 1.6;">
          Highly dedicated Flutter developer with 4.5 years of experience designing and delivering robust, scalable, and visually appealing cross-platform mobile applications. Passionate about creating seamless user experiences by combining clean code, modern UI/UX principles, and efficient performance optimization. Specializes in Flutter app architecture, state management, and integrating RESTful APIs to build feature-rich apps for both Android and iOS.
        </p>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="color: #0d9488; font-size: 18px; border-bottom: 2px solid #0d9488; padding-bottom: 4px; margin-bottom: 12px;">Work Experience</h3>
        <div style="margin-bottom: 16px;">
          <h4 style="color: #374151; font-size: 14px; font-weight: bold; margin: 0;">SDE-II Flutter Developer</h4>
          <p style="color: #0d9488; font-size: 12px; margin: 0 0 8px 0;">Square Infosoft | 2022 - Present</p>
          <ul style="color: #374151; font-size: 11px; line-height: 1.5; margin: 0; padding-left: 16px;">
            <li>Lead development and delivery of multiple cross-platform mobile applications using Flutter</li>
            <li>Collaborated with product managers, designers, and backend teams to implement scalable features</li>
            <li>Implemented CI/CD pipelines with GitHub Actions and Codemagic, reducing release cycles by 30%</li>
            <li>Mentored junior developers and conducted code reviews to maintain high code quality</li>
            <li>Integrated third-party SDKs, payment gateways, and push notification services</li>
            <li>Expert in handling complex code and quick problem solving</li>
          </ul>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="color: #0d9488; font-size: 18px; border-bottom: 2px solid #0d9488; padding-bottom: 4px; margin-bottom: 12px;">Technical Skills</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 16px;">
          <div style="flex: 1; min-width: 200px;">
            <h4 style="color: #374151; font-size: 12px; font-weight: bold; margin: 0 0 8px 0;">Languages</h4>
            <p style="color: #6b7280; font-size: 11px; margin: 0;">Dart, JavaScript, Kotlin, Swift, Java</p>
          </div>
          <div style="flex: 1; min-width: 200px;">
            <h4 style="color: #374151; font-size: 12px; font-weight: bold; margin: 0 0 8px 0;">Frameworks & Tools</h4>
            <p style="color: #6b7280; font-size: 11px; margin: 0;">Flutter, Firebase, Provider, Bloc, GetX, GraphQL, REST APIs</p>
          </div>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 12px;">
          <div style="flex: 1; min-width: 200px;">
            <h4 style="color: #374151; font-size: 12px; font-weight: bold; margin: 0 0 8px 0;">Development Tools</h4>
            <p style="color: #6b7280; font-size: 11px; margin: 0;">Android Studio, Xcode, VS Code, Git & GitHub, Firebase CLI, Postman</p>
          </div>
          <div style="flex: 1; min-width: 200px;">
            <h4 style="color: #374151; font-size: 12px; font-weight: bold; margin: 0 0 8px 0;">Other Skills</h4>
            <p style="color: #6b7280; font-size: 11px; margin: 0;">Clean Architecture, MVVM, SOLID Principles, Unit Testing, Performance Optimization</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="color: #0d9488; font-size: 18px; border-bottom: 2px solid #0d9488; padding-bottom: 4px; margin-bottom: 12px;">Key Projects</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 11px;">
          <div>
            <h4 style="color: #374151; font-size: 12px; font-weight: bold; margin: 0 0 4px 0;">Photospot App</h4>
            <p style="color: #6b7280; margin: 0 0 4px 0;">AI-driven travel app with personalized trips, user posts, and deep linking</p>
            <p style="color: #0d9488; margin: 0; font-weight: bold;">Role: Lead + Developer</p>
          </div>
          <div>
            <h4 style="color: #374151; font-size: 12px; font-weight: bold; margin: 0 0 4px 0;">MTV App</h4>
            <p style="color: #6b7280; margin: 0 0 4px 0;">Entertainment app with animations, offline support, and in-app purchases</p>
            <p style="color: #0d9488; margin: 0; font-weight: bold;">Role: Lead + Developer</p>
          </div>
          <div>
            <h4 style="color: #374151; font-size: 12px; font-weight: bold; margin: 0 0 4px 0;">Dscvr</h4>
            <p style="color: #6b7280; margin: 0 0 4px 0;">Real-time tracking app with geofencing and interactive maps</p>
            <p style="color: #0d9488; margin: 0; font-weight: bold;">Role: Lead + Developer</p>
          </div>
          <div>
            <h4 style="color: #374151; font-size: 12px; font-weight: bold; margin: 0 0 4px 0;">Quote App</h4>
            <p style="color: #6b7280; margin: 0 0 4px 0;">Curated quotes with swipe interface and customizable themes</p>
            <p style="color: #0d9488; margin: 0; font-weight: bold;">Role: Lead + Developer</p>
          </div>
        </div>
      </div>

      <div>
        <h3 style="color: #0d9488; font-size: 18px; border-bottom: 2px solid #0d9488; padding-bottom: 4px; margin-bottom: 12px;">Education & Certifications</h3>
        <p style="color: #374151; font-size: 12px; margin: 0;">
          <strong>Mobile App Development Expertise</strong><br>
          4.5+ years of professional Flutter development experience<br>
          Specialized in cross-platform mobile application development
        </p>
      </div>
    `;
    
    document.body.appendChild(resumeContent);
    
    try {
      // Convert to canvas
      const canvas = await html2canvas(resumeContent, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        imgWidth,
        imgHeight
      );
      
      // Download the PDF
      pdf.save('Harikrushn_Moradiya_Resume.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      // Clean up
      document.body.removeChild(resumeContent);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <Button
        onClick={generatePDF}
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        data-testid="download-resume"
      >
        <Download className="w-4 h-4 mr-2" />
        Download Resume PDF
      </Button>
      
      <div className="flex items-center text-gray-600 text-sm">
        <FileText className="w-4 h-4 mr-2" />
        Professional PDF format
      </div>
    </div>
  );
}