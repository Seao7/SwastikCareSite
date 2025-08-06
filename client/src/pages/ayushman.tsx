import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield, Heart, Users, CreditCard, Phone, FileText, Star, Eye } from "lucide-react";

export default function Ayushman() {
  const benefits = [
    "₹5 lakh health coverage per family per year",
    "Cashless treatment at empanelled hospitals",
    "Coverage for all pre-existing conditions from day one",
    "874 medical packages and 1592 procedures covered",
    "No restrictions on family size, gender or age",
    "Post-hospitalization follow-up up to 15 days covered"
  ];

  const coveredServices = [
    {
      category: "Eye Care Services",
      services: [
        "Cataract surgery with IOL implantation",
        "Cataract surgery by Phaco Emulsification",
        "Glaucoma treatment and surgery",
        "Retinal treatments and procedures",
        "Pterygium surgery",
        "YAG Laser"
      ]
    }
  ];

  const eligibilitySteps = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "Verify if you qualify under Ayushman Bharat scheme based on SECC-2011 database or other eligible categories.",
      icon: <FileText className="text-white" size={20} />
    },
    {
      step: "2", 
      title: "Get Your Card",
      description: "Obtain your Ayushman Bharat card from designated centers or download digitally through official portal.",
      icon: <CreditCard className="text-white" size={20} />
    },
    {
      step: "3",
      title: "Visit Our Hospital",
      description: "Bring your Ayushman card to Swastik Eye & Dental Care for cashless eye treatment up to ₹5 lakh coverage.",
      icon: <Heart className="text-white" size={20} />
    }
  ];

  return (
    <div data-testid="ayushman-page">
      {/* Ayushman Hero */}
      <HeroSection
      title="Ayushman Bharat"
      subtitle="Eye Care Service Available"
      description="We are proud to be empanelled under Ayushman Bharat PM-JAY scheme, providing cashless eye care coverage up to ₹5 lakh per family for eligible beneficiaries."
      primaryButtonText="Check Eligibility"
      primaryButtonHref="https://beneficiary.nha.gov.in/"
      secondaryButtonText="Call Us"
      secondaryButtonHref="tel:+919956239488"
      showButtons={true}
      backgroundGradient="from-green-50 to-white"
    />
      {/* What is Ayushman Bharat */}
      <section className="py-20" data-testid="ayushman-about-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={24} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="ayushman-about-title">
                World's Largest Health Insurance Scheme
              </h2>
              <p className="text-lg medical-gray leading-relaxed mb-6" data-testid="ayushman-about-description">
                Ayushman Bharat PM-JAY is the world's largest health assurance scheme providing health coverage of ₹5 lakhs per family per year to over 12 crore poor and vulnerable families, covering approximately 55 crore beneficiaries.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-700 font-semibold">
                  Important: At Swastik Eye & Dental Care, Ayushman Bharat coverage is available exclusively for Eye treatments. Dental services are not covered under this scheme.
                </p>
              </div>
              <p className="text-lg medical-gray leading-relaxed mb-8">
                We are proud to be an empanelled provider under this scheme, ensuring that quality eye care is accessible to all eligible families without financial burden.
              </p>
              <a href="tel:+919956239488">
                <Button className="bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg" data-testid="ayushman-contact-button">
                  <Phone className="mr-2" size={20} />
                  Call for Assistance: +91 99562 39488
                </Button>
              </a>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professionals providing medical care" 
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="ayushman-about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50" data-testid="ayushman-benefits-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="benefits-title">
              Key Benefits Under Ayushman Bharat
            </h2>
            <p className="text-xl medical-gray max-w-3xl mx-auto" data-testid="benefits-description">
              Comprehensive health coverage with no restrictions on family size, age, or pre-existing conditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm" data-testid={`benefit-${index}`}>
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-white" size={14} />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered Services - Centered */}
      <section className="py-20" data-testid="covered-services-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="services-title">
              Eye Care Services Covered
            </h2>
            <p className="text-xl medical-gray max-w-3xl mx-auto" data-testid="services-description">
              Comprehensive coverage for eye treatments under Ayushman Bharat at our clinic
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-2xl">
              {coveredServices.map((category, index) => (
                <Card key={index} className="bg-white rounded-2xl shadow-lg" data-testid={`service-category-${index}`}>
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                      <p className="text-sm text-gray-500 mt-2">Available under Ayushman Bharat scheme</p>
                    </div>
                    <ul className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start space-x-3" data-testid={`service-${index}-${serviceIndex}`}>
                          <Check className="text-green-600 mt-1 flex-shrink-0" size={16} />
                          <span className="medical-gray">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="py-20 bg-green-50" data-testid="access-steps-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="access-title">
              How to Access Eye Care Services
            </h2>
            <p className="text-xl medical-gray max-w-3xl mx-auto" data-testid="access-description">
              Simple steps to avail cashless eye treatment under Ayushman Bharat at our hospital
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {eligibilitySteps.map((step, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg text-center" data-testid={`access-step-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="medical-gray">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600" data-testid="ayushman-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Eye className="text-green-600" size={24} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" data-testid="cta-title">
            Get Quality Eye Care Without Financial Worry
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto" data-testid="cta-description">
            If you are eligible for Ayushman Bharat, visit us for cashless eye treatment up to ₹5 lakh coverage. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919956239488">
              <Button className="bg-white text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg" data-testid="cta-call-button">
                <Phone className="mr-2" size={20} />
                Call: +91 99562 39488
              </Button>
            </a>
            <a href="https://beneficiary.nha.gov.in/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
                data-testid="cta-eligibility-button"
              >
                <FileText className="mr-2" size={20} />
                Check Eligibility Online
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
