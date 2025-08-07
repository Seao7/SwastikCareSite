import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ui/service-card";
import { Eye, Users, Heart, Cog, CheckCircle, Calendar, Phone, Ambulance, Award, GraduationCap } from "lucide-react";
import { Link } from "wouter";
import { ImageCarousel } from "@/components/ui/image-carousel";

export default function Home() {
  const services = [
    {
      icon: <Eye className="text-white" size={24} />,
      title: "Advanced Eye Care",
      description: "State-of-the-art eye treatments including Visual Field testing, LASIK surgery, and OCT imaging for comprehensive care.",
      features: ["Visual Field & Laser", "LASIK Surgery", "OCT Imaging", "Cataract Surgery"],
      iconColor: "bg-medical-blue"
    },
    {
      icon: <svg className="text-white w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
      title: "Complete Dental Care",
      description: "Full-service dental treatments from routine cleanings to advanced cosmetic and restorative procedures.",
      features: ["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Oral Surgery"],
      iconColor: "bg-soft-teal"
    },
    {
      icon: <CheckCircle className="text-white" size={24} />,
      title: "Ayushman Bharat Service",
      description: "Cashless treatment up to ₹5 lakh under government health scheme for eligible families with quality care.",
      features: ["₹5 Lakh Coverage", "Cashless Treatment", "All Procedures Covered", "No Pre-conditions"],
      iconColor: "bg-green-600"
    },
    {
      icon: <Ambulance className="text-white" size={24} />,
      title: "Complete Facilities",
      description: "Modern clinic with parking space, in-house optical and medical facilities for patient convenience.",
      features: ["Parking Available", "In-house Optical", "In-house Medical", "Modern Equipment"],
      iconColor: "bg-purple-600"
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Users className="text-white text-sm" />,
      title: "Expert Medical Team",
      description: "Highly qualified specialists with years of experience in eye and dental care.",
      color: "bg-medical-blue"
    },
    {
      icon: <Cog className="text-white text-sm" />,
      title: "Advanced Technology",
      description: "State-of-the-art equipment ensuring precise diagnosis and effective treatment.",
      color: "bg-soft-teal"
    },
    {
      icon: <Heart className="text-white text-sm" />,
      title: "Compassionate Care",
      description: "Patient-centered approach with personalized treatment plans and comfort-focused environment.",
      color: "bg-calm-green"
    }
  ];

  const doctors = [
    {
      name: "Dr. R.N. Agrawal",
      specialization: "Eye Specialist",
      qualifications: "MS KGMU",
      experience: "20+ Years Experience",
      description: "Expert eye surgeon with MS qualification from King George's Medical University, specializing in advanced eye treatments and LASIK surgery.",
      image: "dr_rn_agrawal.png",
      color: "bg-medical-blue"
    },
    {
      name: "Dr. Ruchi Agrawal",
      specialization: "Dental Specialist",
      qualifications: "BDS Lucknow",
      experience: "20+ Years Experience",
      description: "Qualified dentist with BDS from Lucknow, specializing in comprehensive dental care, cosmetic dentistry, and oral health services.",
      image: "dr_ruchi_agrawal.png",
      color: "bg-soft-teal"
    }
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28" data-testid="hero-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" data-testid="hero-title">
                  Your Vision & Smile <br />
                  <span className="medical-blue">Matter to Us</span>
                </h1>
                <p className="text-xl medical-gray leading-relaxed" data-testid="hero-description">
                  Expert eye and dental care by qualified professionals Dr. R.N. Agrawal (MS KGMU) and Dr. Ruchi Agrawal (BDS) at Mau, Uttar Pradesh.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919956239488">
                  <Button className="bg-medical-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg" data-testid="book-appointment-button">
                    <Calendar className="mr-2" size={20} />
                    Call: +91 99562 39488
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors" data-testid="contact-us-button">
                    <Phone className="mr-2" size={20} />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageCarousel
                images={[
                  {
                    src: "/eye.jpeg",
                    alt: "Modern eye examination room with advanced equipment at Swastik Eye & Dental Care"
                  },
                  {
                    src: "/dental.jpeg", 
                    alt: "Professional dental examination with modern equipment at Swastik Eye & Dental Care"
                  },
                  {
                    src: "/team.jpeg", 
                    alt: "Team at Swastik Eye and Dental Care"
                  }
                ]}
                className="rounded-2xl shadow-2xl w-full h-96 [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:object-center"
                testId="hero-image-carousel"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Expert Doctors Section */}
      <section className="py-20 bg-white" data-testid="doctors-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="doctors-title">
              Meet Our Expert Doctors
            </h2>
            <p className="text-xl medical-gray max-w-3xl mx-auto" data-testid="doctors-description">
              Our renowned medical professionals bring decades of experience and expertise to provide you with exceptional healthcare
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {doctors.map((doctor, index) => (
              <div key={index} className={`group hover:transform hover:scale-105 transition-all duration-300 ${index === 1 ? 'lg:order-last' : ''}`}>
                <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={doctor.image}
                        alt={`${doctor.name} - ${doctor.specialization}`}
                        className="w-full h-96 object-cover"
                      />
                      <div className={`absolute bottom-0 left-0 right-0 ${doctor.color} bg-opacity-90 text-white py-3 px-4`}>
                        <div className="flex items-center space-x-2">
                          <Award className="text-white" size={18} />
                          <span className="font-medium text-sm">{doctor.experience}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 space-y-4">
                      <div className="text-center">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                          {doctor.name}
                        </h3>
                        <div className="flex items-center justify-center space-x-2 mb-3">
                          <GraduationCap className={doctor.color.replace('bg-', 'text-')} size={20} />
                          <span className="font-semibold text-lg medical-blue">{doctor.qualifications}</span>
                        </div>
                        <p className="text-lg font-medium medical-gray mb-4">{doctor.specialization}</p>
                      </div>
                      
                      <p className="text-medical-gray leading-relaxed text-center">
                        {doctor.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" data-testid="services-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="services-title">Our Specialized Services</h2>
            <p className="text-xl medical-gray max-w-3xl mx-auto" data-testid="services-description">
              Comprehensive healthcare solutions with advanced technology and experienced professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index}>
                {service.title === "Ayushman Bharat Service" ? (
                  <Link href="/ayushman">
                    <div className="cursor-pointer hover:scale-105 transition-transform">
                      <ServiceCard
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        features={service.features}
                        iconColor={service.iconColor}
                      />
                    </div>
                  </Link>
                ) : (
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    iconColor={service.iconColor}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" data-testid="why-choose-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ImageCarousel
                images={[
                  {
                    src: "eye2.jpeg",
                    alt: "Professional dental care setup with modern equipment"
                  },
                  {
                    src: "glasses.jpeg", 
                    alt: "Chashma Centre @ Swastik Eye and Dental Care"
                  },
                  {
                    src: "tech.jpeg", 
                    alt: "Advanced Machinery @ Swastik Eye and Dental Care"
                  } 
                ]}
                className="rounded-2xl shadow-xl w-full h-96 [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:object-center"
                testId="why-choose-image-carousel"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="why-choose-title">Why Choose Swastik Care?</h2>
                <p className="text-xl medical-gray" data-testid="why-choose-description">
                  Your health and comfort are our top priorities. We combine experience with innovation to deliver exceptional care.
                </p>
              </div>
              
              <div className="space-y-6">
                {whyChooseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={`why-choose-feature-${index}`}>
                    <div className={`w-8 h-8 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="medical-gray">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
