import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { MapPin, Phone, Mail, Clock, TriangleAlert, Calendar, MessageCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

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
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-white" size={20} />,
      title: "Visit Our Clinic",
      content: "Swastik Eye & Dental Care\nRoadways, Sahadatpura\nMau - 275101, Uttar Pradesh, India",
      color: "bg-medical-blue"
    },
    {
      icon: <Phone className="text-white" size={20} />,
      title: "Call Us",
      content: "Appointment: +91 99562 39488\nFor all inquiries and bookings",
      color: "bg-soft-teal"
    },
    {
      icon: <Mail className="text-white" size={20} />,
      title: "Book Appointment",
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
      icon: <TriangleAlert className="text-white" size={24} />,
      title: "Emergency Care",
      description: "For urgent medical situations requiring immediate attention.",
      buttonText: "Call Emergency",
      color: "bg-red-500",
      borderColor: "border-red-100"
    },
    {
      icon: <Calendar className="text-white" size={24} />,
      title: "Book Appointment",
      description: "Schedule your consultation at your convenient time.",
      buttonText: "Schedule Now",
      color: "bg-medical-blue",
      borderColor: "border-blue-100"
    },
    {
      icon: <MessageCircle className="text-white" size={24} />,
      title: "General Inquiry",
      description: "Have questions about our services or need information?",
      buttonText: "Start Chat",
      color: "bg-soft-teal",
      borderColor: "border-cyan-100"
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
      <section className="py-20" data-testid="contact-form-section">
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
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center" data-testid="map-placeholder">
                <div className="text-center medical-gray">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">Location map will be integrated here</p>
                </div>
              </div>
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
                              <SelectItem value="emergency">Emergency Services</SelectItem>
                              <SelectItem value="consultation">General Consultation</SelectItem>
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className={`bg-white rounded-2xl shadow-lg text-center border-2 ${action.borderColor}`} data-testid={`quick-action-${index}`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{action.title}</h3>
                  <p className="medical-gray mb-6">{action.description}</p>
                  <Button className={`${action.color.replace('bg-', 'bg-')} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors w-full`} data-testid={`button-${action.title.toLowerCase().replace(' ', '-')}`}>
                    {action.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
