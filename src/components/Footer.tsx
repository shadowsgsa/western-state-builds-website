
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construction-darkgray text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-white">Western State Construction</h3>
            <p className="text-gray-300 mb-4">Building the West, One Project at a Time. Quality construction services for residential, commercial, and custom projects.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-construction-brick transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-brick transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-brick transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-brick transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#residential" className="text-gray-300 hover:text-construction-brick transition-colors">Residential Construction</Link></li>
              <li><Link to="/services#commercial" className="text-gray-300 hover:text-construction-brick transition-colors">Commercial Projects</Link></li>
              <li><Link to="/services#custom" className="text-gray-300 hover:text-construction-brick transition-colors">Custom Homes</Link></li>
              <li><Link to="/services#renovations" className="text-gray-300 hover:text-construction-brick transition-colors">Renovations & Remodeling</Link></li>
              <li><Link to="/services#management" className="text-gray-300 hover:text-construction-brick transition-colors">Project Management</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-construction-brick transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-construction-brick transition-colors">Our Projects</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-construction-brick transition-colors">Get a Quote</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-construction-brick transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-construction-brick transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-construction-brick mt-1" />
                <span className="text-gray-300">9461 Charleville Blvd Ste.#285 Beverly Hills, Calif.90212</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-construction-brick" />
                <a href="tel:+13104095910" className="text-gray-300 hover:text-construction-brick transition-colors">(310)-409-5910</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-construction-brick" />
                <a href="mailto:ken7938@gmail.com" className="text-gray-300 hover:text-construction-brick transition-colors">ken7938@gmail.com</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-construction-brick" />
                <a className="text-gray-300" href="https://westernstateconstruction.net/">westernstateconstruction.net</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Western State Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
