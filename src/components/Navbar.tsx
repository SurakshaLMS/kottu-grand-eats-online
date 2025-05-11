
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Order Online', path: '/order' },
    { name: 'Outlets', path: '/outlets' },
    { name: 'Locations', path: '/locations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${isScrolled ? 'shadow-md py-3' : 'py-5'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <div className="bg-brand-yellow rounded-full p-1 mr-2">
            <div className="bg-black rounded-full p-2 flex items-center justify-center">
              <span className="text-brand-yellow font-heading font-extrabold text-xl">MK</span>
            </div>
          </div>
          <span className="text-brand-yellow font-heading font-extrabold text-2xl md:text-3xl">
            Mr. Kottu <span className="text-white">Grand</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-brand-yellow ${
                location.pathname === link.path ? 'text-brand-yellow' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-brand-yellow hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md flex items-center" 
            asChild
          >
            <Link to="/order">
              <ShoppingCart size={18} className="mr-2" />
              Order Now
            </Link>
          </Button>
          <a 
            href="tel:+94114222000" 
            className="text-white flex items-center hover:text-brand-yellow transition-colors"
          >
            <Phone size={18} className="mr-1" />
            <span className="font-medium">0114 222 000</span>
          </a>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center lg:hidden">
          <Button 
            className="mr-2 bg-brand-yellow hover:bg-yellow-500 text-black" 
            size="sm" 
            asChild
          >
            <Link to="/order">
              <ShoppingCart size={18} className="mr-1" />
              Order
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleMenu} 
            className="border-brand-yellow text-brand-yellow hover:bg-brand-yellow/20 hover:text-brand-yellow"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-[61px] bg-black z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto py-5">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium p-3 rounded-md ${
                  location.pathname === link.path 
                    ? 'bg-brand-yellow/20 text-brand-yellow' 
                    : 'text-white hover:bg-gray-900'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-brand-yellow hover:bg-yellow-500 text-black w-full mt-4" 
              asChild
            >
              <Link to="/order" onClick={closeMenu}>
                <ShoppingCart size={18} className="mr-2" />
                Order Now
              </Link>
            </Button>
            <a 
              href="tel:+94114222000" 
              className="text-white flex items-center justify-center hover:text-brand-yellow transition-colors p-3"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">0114 222 000</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
