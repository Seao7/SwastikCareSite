import { Link } from "wouter";
import { Eye, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Hospital Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo-new.png" 
                alt="Swastik Eye & Dental Care Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Swastik Eye & Dental Care</h3>
                <p className="text-gray-400 text-sm">Sahadatapura, Near Roadways, Mau</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Expert eye and dental care with advanced facilities including Visual Field Laser, LASIK, OCT imaging, in-house optical, parking space, and Ayushman Bharat cashless service available.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/ayushman" className="text-gray-300 hover:text-white transition-colors">Ayushman Service</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="tel:+919956239488" className="text-gray-300 hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="medical-blue mt-1" size={16} />
                <p className="text-gray-300 text-sm">Swastik Eye & Dental Care<br />Sahadatapura, Near Roadways<br />Mau - 275101, Uttar Pradesh, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="medical-blue" size={16} />
                <p className="text-gray-300 text-sm">+91 99562 39488</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="medical-blue" size={16} />
                <p className="text-gray-300 text-sm">sedcmau@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Swastik Eye & Dental Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}