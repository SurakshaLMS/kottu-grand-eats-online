import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
  };
  
  return (
    <div className="pt-20">
      {/* Contact Hero */}
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="font-bold mb-4">Contact <span className="text-brand-red">Us</span></h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Have questions, suggestions, or feedback? We'd love to hear from you! 
            Get in touch with our team using any of the methods below.
          </p>
        </div>
      </div>
      
      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-brand-red/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-brand-red" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us directly for inquiries or to place an order.</p>
                <a 
                  href="tel:+94112345678" 
                  className="text-brand-red font-semibold hover:underline"
                >
                  +94 11 234 5678
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-brand-red/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-brand-red" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us an email for any questions or collaboration.</p>
                <a 
                  href="mailto:info@mrkottugrand.com" 
                  className="text-brand-red font-semibold hover:underline"
                >
                  info@mrkottugrand.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-brand-red/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-brand-red" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Find our nearest outlet and pay us a visit.</p>
                <Link 
                  to="/locations" 
                  className="text-brand-red font-semibold hover:underline"
                >
                  View All Locations
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-brand-red/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-brand-red" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">Hours</h3>
                <p className="text-gray-600 mb-4">We're open daily to serve you delicious kottu.</p>
                <p className="text-brand-red font-semibold">11:00 AM - 10:00 PM</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                    <Input id="name" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input id="subject" placeholder="Enter message subject" required />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                  <Textarea id="message" placeholder="Type your message here..." rows={6} required />
                </div>
                
                <Button type="submit" className="bg-brand-red hover:bg-red-700 w-full">Send Message</Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Main Office</h2>
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.60576566674!2d79.88917543476562!3d6.909703700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f82c7006b9%3A0x4164b4f4576f0a!2sRajagiriya!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Mr. Kottu Grand Head Office Location"
                ></iframe>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 text-brand-red shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Head Office Address</h4>
                    <p className="text-gray-600">123 Kotte Road, Rajagiriya, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-3 text-brand-red shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Customer Service</h4>
                    <p className="text-gray-600">+94 11 234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-3 text-brand-red shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Email Addresses</h4>
                    <p className="text-gray-600">Customer Support: info@mrkottugrand.com</p>
                    <p className="text-gray-600">Careers: careers@mrkottugrand.com</p>
                    <p className="text-gray-600">Partnership: business@mrkottugrand.com</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold mb-2">Connect With Us</h4>
                  <div className="flex space-x-3">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-red text-white hover:bg-red-700 transition-colors p-2 rounded-full"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-brand-red text-white hover:bg-red-700 transition-colors p-2 rounded-full"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">Do you offer catering services?</h3>
              <p className="text-gray-700">
                Yes, we offer catering services for events of all sizes. Please contact our team at least 48 hours in advance for larger orders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">What are your delivery charges?</h3>
              <p className="text-gray-700">
                Delivery charges range from Rs. 150-250 depending on the distance. Orders above Rs. 2500 qualify for free delivery.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">Can I customize the spice level of my kottu?</h3>
              <p className="text-gray-700">
                Absolutely! You can request mild, medium, or spicy based on your preference when ordering.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">Are there vegetarian options available?</h3>
              <p className="text-gray-700">
                Yes, we have a wide range of vegetarian kottu options, including cheese, plain, and mushroom varieties.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-3">Don't see your question here?</p>
            <Button asChild className="bg-brand-red hover:bg-red-700">
              <a href="#contact-form">Ask Us Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
