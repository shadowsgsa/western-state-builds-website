
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin,Globe, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-construction-darkgray text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-0">
              Get in touch with our team for inquiries, quotes, or to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="initially-hidden opacity-0">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and one of our team members will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <Input type="text" id="name" required placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input type="email" id="email" required placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input type="tel" id="phone" placeholder="(123) 456-7890" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input type="text" id="subject" placeholder="Project Inquiry" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <Textarea id="message" required placeholder="Tell us about your project or inquiry..." className="h-32" />
                </div>
                
                <Button type="submit" className="btn-primary w-full">Send Message</Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="initially-hidden opacity-0">
              <h2 className="section-title">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                You can reach us through the contact details below or visit our office during business hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-construction-brick bg-opacity-10 p-4 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-construction-brick" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">9461 Charleville Blvd Ste.#285 Beverly Hills, Calif.90212</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-construction-brick bg-opacity-10 p-4 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-construction-brick" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+13104095910" className="hover:text-construction-brick">(310)-409-5910</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-construction-brick bg-opacity-10 p-4 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-construction-brick" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:ken7938@gmail.com" className="hover:text-construction-brick">ken7938@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-construction-brick bg-opacity-10 p-4 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-construction-brick" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1"><a href="https://westernstateconstruction.net/">westernstateconstruction.net</a></h3>
                    <p className="text-gray-600">Visit Our Website For Details</p>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="mt-10 h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.169540469907!2d-118.39881980000001!3d34.0651679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf954d71ecd%3A0xf4d4c78fbb0a2139!2s9461%20Charleville%20Blvd%20%23285%2C%20Beverly%20Hills%2C%20CA%2090212%2C%20USA!5e0!3m2!1sen!2s!4v1745619313402!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Western State Construction Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
