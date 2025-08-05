import { Link } from "wouter";
import { Eye, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
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
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-medical-blue transition-colors" data-testid="social-facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-medical-blue transition-colors" data-testid="social-twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-medical-blue transition-colors" data-testid="social-instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-medical-blue transition-colors" data-testid="social-linkedin">
                <Linkedin size={16} />
              </a>
            </div>
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
                <p className="text-gray-300 text-sm">Book your Appointment at: 99562 39488</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2024 Swastik Eye & Dental Care. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
