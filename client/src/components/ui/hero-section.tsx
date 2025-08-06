import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonAction?: () => void;
  primaryButtonHref?: string; // Add this line
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showButtons?: boolean;
  backgroundGradient?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonAction,
  primaryButtonHref, // Add this parameter
  secondaryButtonText,
  secondaryButtonHref,
  showButtons = true,
  backgroundGradient = "from-blue-50 to-white"
}: HeroSectionProps) {
  return (
    <section className={`relative bg-gradient-to-br ${backgroundGradient} py-20 lg:py-28`} data-testid="hero-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-testid="hero-title">
            {title}
            {subtitle && <span className="medical-blue"> {subtitle}</span>}
          </h1>
          <p className="text-xl medical-gray leading-relaxed mb-8" data-testid="hero-description">
            {description}
          </p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Updated primary button to handle both href and action */}
              {primaryButtonHref ? (
                <a href={primaryButtonHref} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="bg-medical-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
                    data-testid="hero-primary-button"
                  >
                    <Calendar className="mr-2" size={20} />
                    {primaryButtonText}
                  </Button>
                </a>
              ) : (
                <Button 
                  className="bg-medical-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
                  onClick={primaryButtonAction}
                  data-testid="hero-primary-button"
                >
                  <Calendar className="mr-2" size={20} />
                  {primaryButtonText}
                </Button>
              )}
              
              {secondaryButtonText && secondaryButtonHref && (
                <Link href={secondaryButtonHref}>
                  <Button 
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                    data-testid="hero-secondary-button"
                  >
                    <Phone className="mr-2" size={20} />
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
