
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { FileUp, Check } from 'lucide-react';

const Quote = () => {
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
      title: "Quote Request Received",
      description: "Thank you for your interest. We'll prepare your quote and contact you soon.",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-construction-darkgray text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Quote</h1>
            <p className="text-xl mb-0">
              Tell us about your project, and we'll provide a detailed estimate tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-construction-darkgray initially-hidden opacity-0">Project Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="initially-hidden opacity-0">
                <h3 className="text-xl font-semibold mb-4 text-construction-darkgray">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <Input type="text" id="name" required placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input type="email" id="email" required placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input type="tel" id="phone" required placeholder="(123) 456-7890" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Project Location</label>
                    <Input type="text" id="location" required placeholder="City, State" />
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="initially-hidden opacity-0" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold mb-4 text-construction-darkgray">Project Specifications</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                    <Select>
                      <SelectTrigger id="project-type">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Construction</SelectItem>
                        <SelectItem value="commercial">Commercial Project</SelectItem>
                        <SelectItem value="custom-home">Custom Home</SelectItem>
                        <SelectItem value="renovation">Renovation/Remodeling</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                    <Select>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under100k">Under $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                        <SelectItem value="over1m">Over $1 million</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Desired Timeline</label>
                    <Select>
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-3months">1-3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="6-12months">6-12 months</SelectItem>
                        <SelectItem value="over12months">More than 12 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                    <Textarea 
                      id="details" 
                      required 
                      placeholder="Please provide details about your project, including size, specific requirements, and any other relevant information." 
                      className="h-32"
                    />
                  </div>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold mb-4 text-construction-darkgray">Additional Information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Do you have architectural plans?</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="plans-yes" name="has-plans" className="h-4 w-4 text-construction-brick" />
                        <label htmlFor="plans-yes">Yes</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" id="plans-no" name="has-plans" className="h-4 w-4 text-construction-brick" />
                        <label htmlFor="plans-no">No</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload relevant files (optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <div className="flex flex-col items-center">
                        <FileUp className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-2">Drag & drop files here, or click to browse</p>
                        <p className="text-xs text-gray-400">Maximum file size: 10MB. Accepted formats: PDF, JPG, PNG</p>
                        <input type="file" className="hidden" multiple />
                        <Button type="button" variant="outline" className="mt-4">Browse Files</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="terms" type="checkbox" required className="h-4 w-4 text-construction-brick" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-medium text-gray-700">I agree to the terms and conditions</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 initially-hidden opacity-0" style={{ animationDelay: '0.6s' }}>
                <Button type="submit" className="btn-primary w-full">Submit Quote Request</Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-construction-offwhite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-construction-darkgray">Why Choose Western State Construction</h2>
            <div className="w-20 h-1 bg-construction-brick mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional construction services, with a focus on quality, 
              transparency, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center initially-hidden opacity-0">
              <div className="bg-construction-brick bg-opacity-10 p-4 rounded-full inline-block mb-6">
                <Check className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Transparent Pricing</h3>
              <p className="text-gray-600">
                Detailed, itemized quotes with no hidden costs or surprises along the way.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center initially-hidden opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="bg-construction-brick bg-opacity-10 p-4 rounded-full inline-block mb-6">
                <Check className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Top-tier materials and skilled professionals ensuring exceptional results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="bg-construction-brick bg-opacity-10 p-4 rounded-full inline-block mb-6">
                <Check className="h-8 w-8 text-construction-brick" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-construction-darkgray">On-Time Delivery</h3>
              <p className="text-gray-600">
                Commitment to meeting deadlines and delivering projects on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
