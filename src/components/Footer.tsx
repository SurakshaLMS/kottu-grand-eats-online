
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-brand-yellow rounded-full p-1 mr-2">
                <div className="bg-black rounded-full p-2 flex items-center justify-center">
                  <span className="text-brand-yellow font-heading font-extrabold text-xl">MK</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-2xl text-brand-yellow">
                Mr. Kottu <span className="text-white">Grand</span>
              </h3>
            </div>
            <p className="mb-4 text-gray-300">
              Sri Lanka's favorite kottu restaurant, bringing the authentic taste of street food to your plate.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-yellow hover:bg-yellow-500 transition-colors p-2 rounded-full text-black"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-yellow hover:bg-yellow-500 transition-colors p-2 rounded-full text-black"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-4 text-brand-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-brand-yellow transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-brand-yellow transition-colors">Menu</Link></li>
              <li><Link to="/order" className="text-gray-300 hover:text-brand-yellow transition-colors">Order Online</Link></li>
              <li><Link to="/outlets" className="text-gray-300 hover:text-brand-yellow transition-colors">Our Outlets</Link></li>
              <li><Link to="/locations" className="text-gray-300 hover:text-brand-yellow transition-colors">Locations</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brand-yellow transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-4 text-brand-yellow">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-brand-yellow" />
                <span>Main Branch: 123 Galle Road, Rajagiriya, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-brand-yellow" />
                <span>+94 11 4222 000</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-brand-yellow" />
                <span>info@mrkottugrand.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-xl mb-4 text-brand-yellow">Opening Hours</h4>
            <ul className="space-y-2">
              <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
              <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
              <li>Sunday: 12:00 PM - 10:00 PM</li>
              <li className="mt-4 text-brand-yellow">* Hours may vary by location</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Mr. Kottu Grand. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li><Link to="/privacy" className="hover:text-brand-yellow transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-brand-yellow transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
