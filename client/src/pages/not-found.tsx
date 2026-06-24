import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center bg-gray-50 py-16">
      <Card className="w-full max-w-md mx-4 text-center">
        <CardContent className="pt-8 pb-8">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-medical-blue" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-medical-blue text-white hover:bg-blue-700">
                <Home className="mr-2" size={18} />
                Back to Home
              </Button>
            </Link>
            <a href="tel:+919956239488">
              <Button variant="outline" className="w-full sm:w-auto">
                <Phone className="mr-2" size={18} />
                Call Us
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
