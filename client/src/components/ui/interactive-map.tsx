import { MapPin } from "lucide-react";

interface InteractiveMapProps {
  address?: string;
  className?: string;
}

export default function InteractiveMap({ 
  address = "Swastik Eye & Dental Care, Sahadatapura, Near Roadways, Mau - 275101, Uttar Pradesh, India",
  className = ""
}: InteractiveMapProps) {
  // Google Maps embed URL for the hospital location
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
  
  // Fallback static map URL
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C${encodeURIComponent(address)}&key=YOUR_API_KEY`;

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg ${className}`} data-testid="interactive-map">
      {/* Map Container */}
      <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
        {/* Placeholder for now - would need Google Maps API key */}
        <div className="text-center p-8">
          <MapPin className="w-16 h-16 text-medical-blue mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Us Here</h3>
          <p className="text-gray-600 mb-4">
            Swastik Eye & Dental Care<br />
            Sahadatapura, Near Roadways<br />
            Mau - 275101, Uttar Pradesh, India
          </p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-medical-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            data-testid="open-maps-button"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Open in Maps
          </a>
        </div>
      </div>
      
      {/* Contact Info Overlay */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
        <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
        <p className="text-sm text-gray-600 mb-1">📞 +91 99562 39488</p>
        <p className="text-sm text-gray-600">✉️ sedcmau@gmail.com</p>
      </div>
    </div>
  );
}