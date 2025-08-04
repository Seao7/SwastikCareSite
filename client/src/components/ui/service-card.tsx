import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconColor: string;
}

export default function ServiceCard({ icon, title, description, features, iconColor }: ServiceCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border" data-testid={`service-card-${title.toLowerCase().replace(' ', '-')}`}>
      <CardContent className="p-8">
        <div className={`w-16 h-16 ${iconColor} rounded-xl flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4" data-testid="service-title">{title}</h3>
        <p className="medical-gray mb-6" data-testid="service-description">{description}</p>
        <ul className="space-y-2 text-sm medical-gray">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center" data-testid={`service-feature-${index}`}>
              <Check className="calm-green mr-2" size={16} />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
