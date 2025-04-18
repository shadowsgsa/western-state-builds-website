
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HomeIcon, Building, Hammer, PenTool, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Hero Section Background Image
const heroBackground = "/lovable-uploads/093485ba-917c-4c11-940a-e82b453834fc.png";

const Index = () => {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center" style={{ backgroundColor: '#000' }}>
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-70" 
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Elegant Homes,<br/> 
              <span className="text-construction-brick">Crafted with Precision</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Transforming architectural visions into stunning residential masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="btn-primary">
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild className="btn-outline text-white border-white hover:bg-white hover:text-construction-darkgray">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-construction-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-construction-darkgray">Our Construction Services</h2>
            <div className="w-20 h-1 bg-construction-brick mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Western State Construction provides comprehensive solutions for all your building needs, 
              from residential homes to large commercial structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="service-card initially-hidden opacity-0">
              <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                <HomeIcon className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Residential Construction</h3>
              <p className="text-gray-600 mb-6">
                We build high-quality homes with attention to detail, personalizing each project to match your vision and lifestyle.
              </p>
              <Link to="/services#residential" className="flex items-center text-construction-brick font-semibold hover:underline group">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="service-card initially-hidden opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                <Building className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Commercial Projects</h3>
              <p className="text-gray-600 mb-6">
                From office buildings to retail spaces, we deliver commercial projects on time and within budget, meeting all specifications.
              </p>
              <Link to="/services#commercial" className="flex items-center text-construction-brick font-semibold hover:underline group">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="service-card initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                <Hammer className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Custom Homes</h3>
              <p className="text-gray-600 mb-6">
                Create your dream home with our custom building services, featuring unique designs tailored to your preferences.
              </p>
              <Link to="/services#custom" className="flex items-center text-construction-brick font-semibold hover:underline group">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-secondary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-construction-brick text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="initially-hidden opacity-0">
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-lg">Years Experience</p>
            </div>
            <div className="initially-hidden opacity-0" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-lg">Team Members</p>
            </div>
            <div className="initially-hidden opacity-0" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="initially-hidden opacity-0">
              <h2 className="section-title">About Western State Construction</h2>
              <p className="text-gray-600 mb-6">
                For over 25 years, Western State Construction has been a leader in the construction industry, 
                delivering exceptional quality and service across the Western United States.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experienced professionals is dedicated to bringing your construction vision to life, 
                combining innovative techniques with traditional craftsmanship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                  <span>On-Time Delivery</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                  <span>Quality Materials</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                  <span>Experienced Team</span>
                </div>
              </div>
              <Button asChild className="btn-primary">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-96 initially-hidden opacity-0">
              <img 
                src="public/WhatsApp Image 2025-04-18 at 10.48.57 PM.jpeg" 
                alt="Construction team working" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg w-40 h-40 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-construction-brick">25+</span>
                <span className="text-sm text-center mt-2">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-construction-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-construction-darkgray">Our Recent Projects</h2>
            <div className="w-20 h-1 bg-construction-brick mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our portfolio of completed projects, showcasing our ability to deliver 
              exceptional results across various construction sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Item 1 */}
            <div className="portfolio-item initially-hidden opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Luxury Residence" 
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay p-6">
                <h3 className="text-xl font-bold text-white mb-2">Luxury Residence</h3>
                <p className="text-gray-200 mb-4">Custom Home in Mountain View</p>
                <Button asChild className="btn-outline text-white border-white hover:bg-white hover:text-construction-darkgray">
                  <Link to="/projects/1">View Details</Link>
                </Button>
              </div>
            </div>

            {/* Project Item 2 */}
            <div className="portfolio-item initially-hidden opacity-0" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Office Complex" 
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay p-6">
                <h3 className="text-xl font-bold text-white mb-2">Office Complex</h3>
                <p className="text-gray-200 mb-4">Modern Commercial Building</p>
                <Button asChild className="btn-outline text-white border-white hover:bg-white hover:text-construction-darkgray">
                  <Link to="/projects/2">View Details</Link>
                </Button>
              </div>
            </div>

            {/* Project Item 3 */}
            <div className="portfolio-item initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Retail Center" 
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay p-6">
                <h3 className="text-xl font-bold text-white mb-2">Retail Center</h3>
                <p className="text-gray-200 mb-4">Shopping Mall Renovation</p>
                <Button asChild className="btn-outline text-white border-white hover:bg-white hover:text-construction-darkgray">
                  <Link to="/projects/3">View Details</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-secondary">
              <Link to="/projects">View All Projects</Link>
            </Button>
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

export default Index;
