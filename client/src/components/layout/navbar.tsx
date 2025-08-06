import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Eye, Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ayushman Service", href: "/ayushman" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50" data-testid="navbar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-1 min-w-0" data-testid="logo-link" onClick={scrollToTop}>
            <img 
              src="logo-no-bg.png" 
              alt="Swastik Eye & Dental Care Logo"
              className="w-16 h-16 sm:w-18 sm:h-18 object-contain flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 truncate leading-tight">
                Swastik Eye & Dental Care
              </h1>
              <p className="text-xs sm:text-sm medical-gray hidden sm:block leading-tight">
                Sahadatapura, Near Roadways, Mau
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-1 py-4 text-base font-medium transition-colors whitespace-nowrap ${
                  isActive(item.href)
                    ? "medical-blue border-b-2 border-current"
                    : "medical-gray hover:text-blue-600"
                }`}
                onClick={scrollToTop}
                data-testid={`nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block w-full text-left px-4 py-2 text-base transition-colors ${
                  isActive(item.href)
                    ? "medical-blue font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToTop();
                }}
                data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
