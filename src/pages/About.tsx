import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Award, Users, CheckCircle} from 'lucide-react';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-0">
              Learn about Western State Construction's journey, values, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="initially-hidden opacity-0">
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1998, Western State Construction began as a small residential contractor and has grown into one of the region's most respected construction companies. Our journey has been marked by a commitment to quality, integrity, and client satisfaction.
              </p>
              <p className="text-gray-600 mb-6">
                Over the past 25 years, we've completed more than 500 projects across the Western United States, from single-family homes to large commercial complexes. Our success is built on a foundation of exceptional craftsmanship and attention to detail.
              </p>
              <p className="text-gray-600">
                Today, we continue to expand our capabilities while maintaining the personalized service that has been our hallmark since day one. Our team of 50+ professionals combines decades of experience with innovative approaches to deliver outstanding results.
              </p>
            </div>
            <div className="relative initially-hidden opacity-0">
              <img 
                src="/lovable-uploads/5addd3f9-2cef-4bba-b28e-6ed3b3ce5847.png" 
                alt="Construction site foundations" 
                className="w-full rounded-lg shadow-xl object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-construction-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-construction-darkgray">Our Core Values</h2>
            <div className="w-20 h-1 bg-construction-brick mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values guide every decision we make and every project we undertake. They define who we are as a company and what you can expect when working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card text-center initially-hidden opacity-0">
              <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Quality</h3>
              <p className="text-gray-600">
                We deliver excellence in every aspect of our work, from materials to craftsmanship to customer service.
              </p>
            </div>

            <div className="service-card text-center initially-hidden opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                <Users className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical standards in all our business dealings.
              </p>
            </div>

            <div className="service-card text-center initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                <Clock className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises, meeting deadlines and staying within budget on every project.
              </p>
            </div>

            <div className="service-card text-center initially-hidden opacity-0" style={{ animationDelay: '0.6s' }}>
              <div className="bg-construction-brick bg-opacity-10 p-4 inline-block rounded-full mb-6">
                <Award className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and methods to provide better, more efficient construction solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <p>Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-construction-darkgray">How Can We Help Your Project?</h2>
            <div className="w-20 h-1 bg-construction-brick mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto"></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left Side */}
            <div className="bg-white rounded-lg overflow-hidden initially-hidden opacity-0">
              <div className="p-6"> 
                <p className="text-construction-grey font-medium text-lg mb-4">As long-standing partners to general contractors and real estate developers, we understand that the early stages of a project are critical to its long-term success.
                  Delays, missteps, or structural uncertainties at the start can ripple through an entire build. That’s why we bring a disciplined focus to what we do best—precise framing and uncompromising foundations. With our team on-site, you gain more than skilled labor;
                  you gain a dependable foundation for progress, ensuring your project begins with strength, stability, and total confidence.</p>
                <p className="text-gray-600"></p>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                  <span className="text-construction-grey font-medium text-lg mb-4">Our efficient workflows ensure that framing and foundation work is executed swiftly—without ever sacrificing quality.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                  <span className="text-construction-grey font-medium text-lg mb-4">Backed by years of hands-on industry experience, we’ve refined the techniques and craftsmanship needed to deliver durable, high-performance structures that stand the test of time.</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-construction-brick mr-2 mt-1" />
                  <span className="text-construction-grey font-medium text-lg mb-4">From initial consultations to final inspections, we keep you informed every step of the way—so you always know exactly where your project stands.</span>
                </div>
              </div>
                
              </div>
            </div>

           {/* Right Side */}
            <div className="portfolio-item initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
              <img 
                src="WhatsApp Image 2025-04-29 at 5.44.37 AM.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Retail Center" 
                className="w-full h-full object-cover"
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
        </div>
      </section>

      <section className="py-20 bg-construction-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <p>About us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-construction-darkgray">15 Years of Partnering With Contractors</h2>
            <div className="w-20 h-1 bg-construction-brick mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-6xl mx-auto">We are a general construction and carpentry company based in Los Angeles, proudly serving Los Angeles, Orange, and Ventura Counties. </p>
            <p className="text-lg text-gray-600 max-w-6xl mx-auto">Partnering with developers and general contractors, we deliver high-quality craftsmanship across a wide range of</p>
            <p className="text-lg text-gray-600 max-w-6xl mx-auto">projects—from ground-up builds and renovations to specialized carpentry work.</p>
            <br></br>
            <p className="text-lg text-gray-600 max-w-6xl mx-auto">Our mission is to simplify your construction process by providing reliable service, expert execution, </p>
            <p className="text-lg text-gray-600 max-w-6xl mx-auto">and a keen eye for detail. With a focus on design integrity, precision, and meeting deadlines,</p>
            <p className="text-lg text-gray-600 max-w-6xl mx-auto">we help bring your project’s vision to life—on time and to the highest standard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 w-full">
            {/* Project Item 1 */}
            <div className="portfolio-item relative h-full w-full bg-gray-100 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="wmremove-transformed.jpeg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Luxury Residence" 
                className="w-full h-full object-cover"
              />
              <div className="portfolio-overlay absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Luxury Residence</h3>
                <p className="text-gray-200 mb-4">Custom Home in Mountain View</p>
                <Button asChild className="btn-outline text-white border-white hover:bg-white hover:text-construction-darkgray">
                  <Link to="/projects/1">View Details</Link>
                </Button>
              </div>
            </div>

            {/* Project Item 2 */}
            <div className="portfolio-item relative h-full w-full bg-gray-100 rounded-lg shadow-xl overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <img 
                src="WhatsApp Image 2025-04-29 at 5.41.50 AM.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Office Complex" 
                className="w-full h-full object-cover"
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
            <div className="portfolio-item relative h-full w-full bg-gray-100 rounded-lg shadow-xl overflow-hidden" style={{ animationDelay: '0.4s' }}>
              <img 
                src="WhatsApp Image 2025-04-29 at 5.44.37 AM.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Retail Center" 
                className="w-full h-full object-cover"
              />
              <div className="portfolio-overlay p-6">
                <h3 className="text-xl font-bold text-white mb-2">Retail Center</h3>
                <p className="text-gray-200 mb-4">Shopping Mall Renovation</p>
                <Button asChild className="btn-outline text-white border-white hover:bg-white hover:text-construction-darkgray">
                  <Link to="/projects/3">View Details</Link>
                </Button>
              </div>
            </div>

            {/* Project Item 4 */}
            <div className="portfolio-item relative h-full w-full bg-gray-100 rounded-lg shadow-xl overflow-hidden" style={{ animationDelay: '0.4s' }}>
              <img 
                src="wmremove-transformed.png?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Retail Center" 
                className="w-full h-full object-cover"
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
      <section className="py-20 bg-construction-brick text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 initially-hidden opacity-0">Ready to Build with Western State?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto initially-hidden opacity-0" style={{ animationDelay: '0.2s' }}>
            Let's discuss your construction needs and how our experienced team can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="bg-white text-construction-brick hover:bg-opacity-90">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild className="border-2 border-white text-white hover:bg-white hover:text-construction-brick">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
