import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  roleColor: string;
}

export default function TeamMember({ name, role, description, imageUrl, roleColor }: TeamMemberProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg text-center" data-testid={`team-member-${name.toLowerCase().replace(' ', '-')}`}>
      <CardContent className="p-8">
        <img 
          src={imageUrl} 
          alt={`${name} - ${role}`}
          className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
          data-testid="team-member-image"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid="team-member-name">{name}</h3>
        <p className={`${roleColor} font-medium mb-4`} data-testid="team-member-role">{role}</p>
        <p className="medical-gray text-sm" data-testid="team-member-description">{description}</p>
      </CardContent>
    </Card>
  );
}
