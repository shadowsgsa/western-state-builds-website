
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-montserrat font-bold text-construction-darkgray">
            <span className="text-construction-brick">Western</span> State
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <a href="tel:+18001234567" className="ml-4 flex items-center text-construction-brick font-semibold">
            <Phone className="mr-2 h-4 w-4" />
            (800) 123-4567
          </a>
          <Button className="ml-4 btn-primary">Get a Quote</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <a href="tel:+18001234567" className="mr-4 text-construction-brick">
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-construction-darkgray"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
          <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Button className="btn-primary w-full mt-4" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
