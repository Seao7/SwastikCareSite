import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import HeroSection from "@/components/ui/hero-section";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { MapPin, Phone, Mail, Clock, TriangleAlert, Calendar, MessageCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      // Use Web3Forms with proper headers
      const formData = new FormData();
      formData.append('access_key', 'a1abad7f-135a-4f8f-86d0-cf13e3fc5e62');
      formData.append('name', `${data.firstName || ''} ${data.lastName || ''}`.trim());
      formData.append('email', data.email || '');
      formData.append('phone', data.phone || '');
      formData.append('service', data.serviceInterest || '');
      formData.append('message', data.message || '');
      formData.append('subject', `New Contact Form - ${data.firstName || ''} ${data.lastName || ''}`.trim());
      formData.append('from_name', 'Swastik Eye & Dental Care Website');
      formData.append('to_email', 'sedcmau@gmail.com');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to send message');
      }

      return result;
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      console.error('Contact form error:', error);
      if (error.message.includes('domain TLD is blocked')) {
        toast({
          title: "Contact form temporarily unavailable",
          description: "Please call us at +91 99562 39488 or WhatsApp us for immediate assistance",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error sending message",
          description: "Please call us directly at +91 99562 39488 or email sedcmau@gmail.com",
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-white" size={20} />,
      title: "Visit Our Clinic",
      content: "Swastik Eye & Dental Care\nSahadatapura, Near Roadways\nMau - 275101, Uttar Pradesh, India",
      color: "bg-medical-blue"
    },
    {
      icon: <Phone className="text-white" size={20} />,
      title: "Call Us",
      content: "Appointment: +91 99562 39488 / +91 54735 80521\nFor all inquiries (8:30 AM to 3:00 PM)",
      color: "bg-soft-teal"
    },
    {
      icon: <Mail className="text-white" size={20} />,
      title: "Book your Appointment at",
      content: "Call: 99562 39488\nDirect appointment booking",
      color: "bg-calm-green"
    },
    {
      icon: <Clock className="text-white" size={20} />,
      title: "Our Specialists",
      content: "Dr. R.N. Agrawal - Eye Surgeon (MS KGMU)\nDr. Ruchi Agrawal - Dentist (BDS)\nDr. Rahul - Retina Specialist\nDr. Priyanka - Orthodontist",
      color: "bg-purple-500"
    }
  ];

  const quickActions = [
    {
      icon: <Calendar className="text-white" size={24} />,
      title: "Book Appointment",
      description: "Schedule your consultation at your convenient time.",
      buttonText: "Call: 99562 39488",
      color: "bg-medical-blue",
      borderColor: "border-blue-100",
      action: "tel:+919956239488"
    },
    {
      icon: <MessageCircle className="text-white" size={24} />,
      title: "General Inquiry",
      description: "Have questions about our services or need information?",
      buttonText: "Send Message",
      color: "bg-soft-teal",
      borderColor: "border-cyan-100",
      action: "scroll-to-form"
    }
  ];

  return (
    <div data-testid="contact-page">
      {/* Contact Hero */}
      <HeroSection
        title="Get in Touch"
        subtitle=""
        description="We're here to help with all your eye and dental care needs. Reach out to us for appointments, inquiries, or emergency services."
        primaryButtonText="Book Appointment"
        showButtons={false}
        backgroundGradient="from-blue-50 to-white"
      />

      {/* Contact Information & Form */}
      <section className="py-20" data-testid="contact-form-section" id="contact-form-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8" data-testid="contact-info-title">Contact Information</h2>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                    <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      <p className="medical-gray whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map Placeholder */}

            </div>
            
            {/* Contact Form */}
            <Card className="bg-white rounded-2xl shadow-lg border" data-testid="contact-form-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6" data-testid="contact-form-title">Send us a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your first name" 
                                {...field} 
                                data-testid="input-first-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your last name" 
                                {...field} 
                                data-testid="input-last-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email address" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Enter your phone number" 
                              {...field} 
                              value={field.value || ""}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service-interest">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="eye-care">Eye Care</SelectItem>
                              <SelectItem value="dental-care">Dental Care</SelectItem>
                            
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Tell us how we can help you..." 
                              className="resize-none" 
                              {...field} 
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        required 
                        className="mt-1" 
                        data-testid="checkbox-privacy-policy"
                      />
                      <label className="text-sm medical-gray">
                        I agree to the <a href="#" className="medical-blue hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry. *
                      </label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-medical-blue text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-message"
                    >
                      <Mail className="mr-2" size={20} />
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-20 bg-gray-50" data-testid="quick-contact-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="quick-contact-title">Need Immediate Assistance?</h2>
            <p className="text-xl medical-gray" data-testid="quick-contact-description">Choose the fastest way to reach us based on your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className={`bg-white rounded-2xl shadow-lg text-center border-2 ${action.borderColor}`} data-testid={`quick-action-${index}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{action.title}</h3>
                  <p className="medical-gray mb-6">{action.description}</p>
                  {action.action === "tel:+919956239488" ? (
                    <a href={action.action}>
                      <Button className={`${action.color} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors w-full`} data-testid={`button-${action.title.toLowerCase().replace(' ', '-')}`}>
                        {action.buttonText}
                      </Button>
                    </a>
                  ) : (
                    <Button 
                      className={`${action.color} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors w-full`} 
                      data-testid={`button-${action.title.toLowerCase().replace(' ', '-')}`}
                      onClick={() => {
                        const formElement = document.getElementById('contact-form-section');
                        if (formElement) {
                          formElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {action.buttonText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20" data-testid="map-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="map-title">Visit Our Clinic</h2>
            <p className="text-xl medical-gray" data-testid="map-description">Find us easily at our convenient location</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.9390383679843!2d83.56567591186405!3d25.937226377147088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39918af2554d9d79%3A0x1b232b4d0b1d0d3f!2sSwastik%20Eye%20and%20Dental%20Care!5e0!3m2!1sen!2sin!4v1754421121354!5m2!1sen!2sin"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Swastik Eye & Dental Care Location"
                  className="w-full"
                  data-testid="google-maps-embed"
                />
  
                
              </div>
              
              <div className="p-6 bg-gray-50">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-medical-blue" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-600">+91 99562 39488</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-medical-blue" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">sedcmau@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-medical-blue" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-sm text-gray-600">Mon-Sat: 9AM-8PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
