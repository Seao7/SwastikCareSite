import { MapPin } from "lucide-react";

interface InteractiveMapProps {
  address?: string;
  className?: string;
}

export default function InteractiveMap({ 
  address = "Swastik Eye & Dental Care, Sahadatapura, Near Roadways, Mau - 275101, Uttar Pradesh, India",
  className = ""
}: InteractiveMapProps) {
  // OpenStreetMap iframe embed
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=83.5512%2C25.9341%2C83.5712%2C25.9541&layer=mapnik&marker=25.9441%2C83.5612`;

  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg ${className}`} data-testid="interactive-map">
      {/* Map Container */}
      <div className="w-full h-96 bg-gray-100">
        <iframe
          src={osmEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          title="Swastik Eye & Dental Care Location"
          data-testid="openstreetmap"
        />
      </div>
      
      {/* Contact Info Overlay */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
        <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
        <p className="text-sm text-gray-600 mb-1">📞 +91 99562 39488</p>
        <p className="text-sm text-gray-600 mb-1">✉️ sedcmau@gmail.com</p>
        <a 
          href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs px-2 py-1 bg-medical-blue text-white rounded hover:bg-blue-700 transition-colors mt-2"
          data-testid="open-maps-button"
        >
          <MapPin className="w-3 h-3 mr-1" />
          View on OpenStreetMap
        </a>
      </div>
    </div>
  );
}