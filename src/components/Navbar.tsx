
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";

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
    { name: 'Locations', path: '/locations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-brand-red font-heading font-extrabold text-2xl md:text-3xl">
            Mr. Kottu <span className="text-brand-dark">Grand</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-brand-red ${
                location.pathname === link.path ? 'text-brand-red' : 'text-brand-dark'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-brand-red hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md flex items-center" 
            asChild
          >
            <Link to="/order">
              <ShoppingCart size={18} className="mr-2" />
              Order Now
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center lg:hidden">
          <Button 
            className="mr-2 bg-brand-red hover:bg-red-700 text-white" 
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
            className="border-brand-dark text-brand-dark hover:bg-gray-100 hover:text-brand-dark"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 top-[61px] bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto py-5">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium p-3 rounded-md ${
                  location.pathname === link.path 
                    ? 'bg-brand-red/10 text-brand-red' 
                    : 'text-brand-dark hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-brand-red hover:bg-red-700 text-white w-full mt-4" 
              asChild
            >
              <Link to="/order" onClick={closeMenu}>
                <ShoppingCart size={18} className="mr-2" />
                Order Now
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
