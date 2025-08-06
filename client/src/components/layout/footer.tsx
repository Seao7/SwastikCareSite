import { Link } from "wouter";
import { Eye, MapPin, Phone, Mail, Clock, Users, Heart } from "lucide-react";

export default function Footer() {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hospital Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logo-white-no-bg.png" 
                  alt="Swastik Eye & Dental Care Logo"
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Swastik Eye &     <br /> Dental Care</h3>
                  <p className="text-gray-400 text-xs">Expert Medical Care</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Trusted healthcare provider offering advanced eye and dental treatments with over 20 years of experience in Mau, Uttar Pradesh.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Currently Open</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <Eye size={14} className="text-blue-400" />
                  <span className="text-gray-300 hover:text-white transition-colors">Eye Care & LASIK</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3.5 h-3.5 bg-teal-400 rounded-sm flex-shrink-0"></span>
                  <span className="text-gray-300 hover:text-white transition-colors">Dental Care</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart size={14} className="text-green-400" />
                  <span className="text-gray-300 hover:text-white transition-colors">Ayushman Bharat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users size={14} className="text-purple-400" />
                  <span className="text-gray-300 hover:text-white transition-colors">Expert Consultation</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    href="/" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={scrollToTop}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={scrollToTop}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/ayushman" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={scrollToTop}
                  >
                    Ayushman Service
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={scrollToTop}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="tel:+919956239488" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-400 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-gray-300 font-medium">Swastik Eye & Dental Care</p>
                    <p className="text-gray-400">Sahadatapura, Near Roadways</p>
                    <p className="text-gray-400">Mau - 275101, Uttar Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400 flex-shrink-0" size={16} />
                  <div>
                    <a href="tel:+919956239488" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +91 99562 39488
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400 flex-shrink-0" size={16} />
                  <div>
                    <a href="mailto:sedcmau@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                      sedcmau@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-400 flex-shrink-0" size={16} />
                  <div>
                    <p className="text-gray-300">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-400 text-xs">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Swastik Eye & Dental Care. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Providing quality healthcare since 2000+
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300 text-xs">Verified Healthcare Provider</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
