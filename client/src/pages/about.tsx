import HeroSection from "@/components/ui/hero-section";
import TeamMember from "@/components/ui/team-member";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, CheckCircle, Microscope, Stethoscope, Sofa } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. R.N. Agrawal",
      role: "Eye Surgeon (MS KGMU)",
      description: "Expert eye surgeon with MS qualification from King George's Medical University, providing comprehensive eye care and surgical procedures.",
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      roleColor: "medical-blue"
    },
    {
      name: "Dr. Ruchi Agrawal",
      role: "Dentist (BDS Lucknow)",
      description: "Qualified dentist with BDS from Lucknow, specializing in comprehensive dental care and oral health services.",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      roleColor: "soft-teal"
    },
    {
      name: "Dr. Rahul",
      role: "Visiting Retina Specialist",
      description: "Specialist in retinal conditions and treatments, providing expert care for complex eye conditions.",
      imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      roleColor: "calm-green"
    },
    {
      name: "Dr. Priyanka Tripathi",
      role: "Visiting Orthodontist",
      description: "Expert orthodontist specializing in teeth alignment, braces, and corrective dental treatments.",
      imageUrl: "https://images.unsplash.com/photo-1594824375822-0ce1ab7b49f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      roleColor: "purple-500"
    }
  ];

  const values = [
    "Patient-centered care and comfort",
    "Continuous innovation and learning",
    "Ethical and transparent practices",
    "Community health improvement"
  ];

  const facilities = [
    {
      icon: <Microscope className="text-white text-sm" />,
      title: "Advanced Diagnostic Equipment",
      description: "Latest imaging technology for precise diagnosis and treatment planning.",
      color: "bg-medical-blue"
    },
    {
      icon: <Stethoscope className="text-white text-sm" />,
      title: "Modern Operation Theaters",
      description: "Sterile, well-equipped surgical suites for various procedures.",
      color: "bg-soft-teal"
    },
    {
      icon: <Sofa className="text-white text-sm" />,
      title: "Comfortable Patient Areas",
      description: "Welcoming waiting areas and comfortable treatment rooms.",
      color: "bg-calm-green"
    }
  ];

  return (
    <div data-testid="about-page">
      {/* About Hero */}
      <HeroSection
        title="About Swastik Eye & Dental Care"
        subtitle=""
        description="Dedicated to providing exceptional healthcare services with a commitment to innovation, compassion, and excellence in patient care since our establishment."
        primaryButtonText="Book Appointment"
        showButtons={false}
        backgroundGradient="from-blue-50 to-white"
      />

      {/* Mission & Vision */}
      <section className="py-20" data-testid="mission-vision-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="w-16 h-16 bg-medical-blue rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="mission-title">Our Mission</h2>
                <p className="text-lg medical-gray leading-relaxed" data-testid="mission-description">
                  To provide comprehensive, compassionate, and cutting-edge eye and dental care that enhances the quality of life for our patients and their families. We are committed to delivering personalized treatment plans using the latest medical technologies while maintaining the highest standards of professional excellence.
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-soft-teal rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="vision-title">Our Vision</h2>
                <p className="text-lg medical-gray leading-relaxed" data-testid="vision-description">
                  To be the leading healthcare provider in eye and dental care, recognized for our innovative treatments, exceptional patient experience, and commitment to improving community health. We envision a future where everyone has access to world-class medical care in a comfortable and welcoming environment.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Modern medical equipment in clean facility" 
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="mission-vision-image"
              />
              
              <Card className="bg-gray-50 rounded-2xl" data-testid="values-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
                  <div className="space-y-4">
                    {values.map((value, index) => (
                      <div key={index} className="flex items-center space-x-3" data-testid={`value-${index}`}>
                        <CheckCircle className="calm-green" size={20} />
                        <span className="medical-gray">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50" data-testid="team-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="team-title">Meet Our Expert Team</h2>
            <p className="text-xl medical-gray max-w-3xl mx-auto" data-testid="team-description">
              Our dedicated professionals bring years of experience and expertise to provide you with the best possible care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                description={member.description}
                imageUrl={member.imageUrl}
                roleColor={member.roleColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20" data-testid="facilities-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="facilities-title">State-of-the-Art Facilities</h2>
            <p className="text-xl medical-gray max-w-3xl mx-auto" data-testid="facilities-description">
              Our modern facility is equipped with the latest technology to ensure accurate diagnosis and effective treatment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`facility-${index}`}>
                  <div className={`w-8 h-8 ${facility.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    {facility.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{facility.title}</h4>
                    <p className="medical-gray">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern hospital interior with comfortable seating" 
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="facilities-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
