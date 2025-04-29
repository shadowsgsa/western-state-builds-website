import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Award, Users, CheckCircle } from 'lucide-react';

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
            <div className="bg-white rounded-lg shadow-md overflow-hidden initially-hidden opacity-0">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="CEO" className="w-full h-64 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-construction-darkgray">John Doe</h3>
                <p className="text-construction-brick font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600">25+ years of construction experience, leading Western State since its founding.</p>
              </div>
            </div>

            <div className="rounded-lg shadow-md overflow-hidden initially-hidden opacity-0 h-full w-full" style={{ animationDelay: '0.2s' }}>
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="COO" className="w-full h-64 object-cover object-center" />
             
            </div>
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
