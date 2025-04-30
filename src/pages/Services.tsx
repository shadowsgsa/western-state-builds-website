
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, Building, Hammer, PenTool, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.initially-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-construction-darkgray text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-0">
              Comprehensive construction solutions for residential, commercial, and custom projects.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-construction-darkgray">Full-Service Construction</h2>
            <p className="text-lg text-gray-600">
              Western State Construction offers a comprehensive range of services to meet all your building needs. 
              From initial design to final walkthrough, we handle every aspect of your project with professionalism and expertise.
            </p>
          </div>

          {/* Residential Construction */}
          <div id="residential" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 initially-hidden opacity-0">
            <div>
              <div className="service-card border-t-construction-brick">
                <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                  <HomeIcon className="h-8 w-8 text-construction-brick" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-construction-darkgray">Residential Construction</h3>
                <p className="text-gray-600 mb-6">
                  We build high-quality homes with meticulous attention to detail, personalizing each project to match your vision and lifestyle needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Custom Home Building</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Multi-Family Housing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Luxury Homes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Townhouses & Condos</span>
                  </div>
                </div>
                <Button asChild className="btn-primary">
                  <Link to="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="Woodcraft-Homes-custom-home-build-11458462-scaled.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Residential Construction" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Commercial Projects */}
          <div id="commercial" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 initially-hidden opacity-0">
            <div className="order-2 lg:order-1">
              <img 
                src="Gazillion-1654.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Commercial Construction" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="service-card border-t-construction-brick">
                <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                  <Building className="h-8 w-8 text-construction-brick" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-construction-darkgray">Commercial Projects</h3>
                <p className="text-gray-600 mb-6">
                  From office buildings to retail spaces, we deliver commercial projects on time and within budget, meeting all specifications and industry standards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Office Buildings</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Retail Spaces</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Restaurants</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Industrial Facilities</span>
                  </div>
                </div>
                <Button asChild className="btn-primary">
                  <Link to="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Custom Homes */}
          <div id="custom" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 initially-hidden opacity-0">
            <div>
              <div className="service-card border-t-construction-brick">
                <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                  <Hammer className="h-8 w-8 text-construction-brick" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-construction-darkgray">Custom Homes</h3>
                <p className="text-gray-600 mb-6">
                  Create your dream home with our custom building services, featuring unique designs tailored to your preferences and specifications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Architectural Design</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Luxury Finishes</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Smart Home Integration</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                    <span>Energy Efficient Options</span>
                  </div>
                </div>
                <Button asChild className="btn-primary">
                  <Link to="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6>
              <img 
                src="hero_chancellor2.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Custom Home Construction" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <img 
                src="hero_chancellor2.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Custom Home Construction" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <img 
                src="hero_chancellor2.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Custom Home Construction" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              </div>
              
            </div>
          </div>
          
          {/* Other Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 initially-hidden opacity-0">
            {/* Renovations */}
            <div id="renovations" className="service-card border-t-construction-brick">
              <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                <PenTool className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-construction-darkgray">Renovations & Remodeling</h3>
              <p className="text-gray-600 mb-6">
                Transform your existing space with our comprehensive renovation services, from kitchen and bathroom remodels to full home renovations.
              </p>
              <Link to="/quote" className="flex items-center text-construction-brick font-semibold hover:underline group">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Project Management */}
            <div id="management" className="service-card border-t-construction-brick">
              <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                <Users className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-construction-darkgray">Project Management</h3>
              <p className="text-gray-600 mb-6">
                Our experienced project managers oversee every aspect of your construction project, ensuring timely completion and quality results.
              </p>
              <Link to="/quote" className="flex items-center text-construction-brick font-semibold hover:underline group">
                Get a Quote <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-construction-darkgray text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 initially-hidden opacity-0">Ready to Start Your Construction Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto initially-hidden opacity-0" style={{ animationDelay: '0.2s' }}>
            Contact us today for a free consultation and quote. Let's bring your construction vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="btn-primary">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild className="btn-outline text-white border-white hover:bg-white hover:text-construction-darkgray">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
