
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HomeIcon, Building, Hammer, PenTool, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';


// Hero Section Background Image
const heroBackground = "/House.png";

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

      {//  {/* Services Preview Section */}
     // <section className="py-20 bg-construction-offwhite">
      //  <div className="container mx-auto px-4">
        //  <div className="text-center mb-16 initially-hidden opacity-0">
         //   <h2 className="text-3xl md:text-4xl font-bold mb-4 text-construction-darkgray">Our Construction Services</h2>
          //  <div className="w-20 h-1 bg-construction-brick mx-auto mb-6"></div>
           // <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           //   Western State Construction provides comprehensive solutions for all your building needs, 
           //   from residential homes to large commercial structures.
           // </p>
         // </div>
       // </div>
     // </section> 
      }

       {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="initially-hidden opacity-0">
              <h2 className="section-title">Our Commercial Projects</h2>
              <p className="text-gray-600 mb-6">
                With decades of experience, we specialize in delivering high-quality commercial construction projects—from sleek office buildings to dynamic retail spaces.
                Our team ensures every detail meets your specifications, while staying on schedule and within budget.
              </p>
              <p className="text-gray-600 mb-6">
                From initial planning to the final walkthrough, we handle each project with precision, transparency, and a deep commitment to excellence. 
                No matter the scale or complexity, we transform your commercial vision into a reality that supports your business success.
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
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
            <div className="relative h-96 initially-hidden opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1636790921342-cbdc4b783de6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Construction team working" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
               { // <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg w-40 h-40 flex flex-col items-center justify-center">
               // <span className="text-3xl font-bold text-construction-brick">25+</span>
               // <span className="text-sm text-center mt-2">Years of Excellence</span>
             // </div>
               }
            </div>
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
            <div className="relative h-full w-full bg-gray-100 rounded-lg shadow-xl overflow-hidden ">
              <img 
                src="/093485ba-917c-4c11-940a-e82b453834fc.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Construction team working" 
                className="w-full h-full object-cover"
              />
              { // <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg w-40 h-40 flex flex-col items-center justify-center">
               // <span className="text-3xl font-bold text-construction-brick">25+</span>
               // <span className="text-sm text-center mt-2">Years of Excellence</span>
             // </div> 
              }
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
                src="/pexels-enginakyurt-1463917.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
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
                src="WhatsApp Image 2025-04-29 at 5.41.50 AM.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
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
                src="WhatsApp Image 2025-04-29 at 5.44.37 AM.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="initially-hidden opacity-0">
              <h2 className="section-title">How We Build</h2>
              <p className="text-gray-600 mb-6">
                At Western State Construction, we combine innovation, craftsmanship, and precision to deliver structures that stand the test of time.
                Our process begins with a deep understanding of your vision, followed by meticulous planning, quality sourcing of materials, and strict adherence to safety standards.
              </p>
              <p className="text-gray-600 mb-6">
                final touches, we maintain clear communication and expert supervision at every stage.
                With a commitment to excellence and a passion for building, we turn ideas into solid reality—on time and within budget.
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
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
            <div className="relative h-96 initially-hidden opacity-0">
              <img 
                src="/20250424_112047.png" 
                alt="Construction team working" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              { // <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg w-40 h-40 flex flex-col items-center justify-center">
               // <span className="text-3xl font-bold text-construction-brick">25+</span>
               // <span className="text-sm text-center mt-2">Years of Excellence</span>
             // </div> 
              }
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

export default Index;
