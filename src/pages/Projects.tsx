
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// Project data
const projects = [
  {
    id: 1,
    title: "Luxury Residence",
    location: "Mountain View, CA",
    category: "residential",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Custom-built luxury home with modern architectural design and premium finishes."
  },
  {
    id: 2,
    title: "Office Complex",
    location: "San Francisco, CA",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Multi-story office building with state-of-the-art facilities and sustainable design elements."
  },
  {
    id: 3,
    title: "Retail Center",
    location: "Portland, OR",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Shopping mall renovation with modern aesthetics and improved customer flow."
  },
  {
    id: 4,
    title: "Modern Townhomes",
    location: "Seattle, WA",
    category: "residential",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Contemporary townhouse development with energy-efficient features and sleek design."
  },
  {
    id: 5,
    title: "Coastal Restaurant",
    location: "San Diego, CA",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Waterfront dining establishment with panoramic ocean views and custom interior."
  },
  {
    id: 6,
    title: "Mountain Cabin",
    location: "Aspen, CO",
    category: "residential",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Rustic yet modern mountain retreat built with sustainable materials and energy efficiency."
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.initially-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Filter projects based on category
  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-construction-darkgray text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl mb-0">
              Browse our portfolio of completed construction projects across the Western United States.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 initially-hidden opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-construction-darkgray">Project Portfolio</h2>
            <p className="text-lg text-gray-600">
              Explore our diverse range of construction projects, showcasing our expertise in residential, 
              commercial, and custom building solutions.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-construction-brick hover:bg-construction-brick/90" : ""}
              >
                All Projects
              </Button>
              <Button 
                variant={filter === "residential" ? "default" : "outline"}
                onClick={() => setFilter("residential")}
                className={filter === "residential" ? "bg-construction-brick hover:bg-construction-brick/90" : ""}
              >
                Residential
              </Button>
              <Button 
                variant={filter === "commercial" ? "default" : "outline"}
                onClick={() => setFilter("commercial")}
                className={filter === "commercial" ? "bg-construction-brick hover:bg-construction-brick/90" : ""}
              >
                Commercial
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="portfolio-item group initially-hidden opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="portfolio-overlay p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-1">{project.location}</p>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <Button asChild className="btn-outline text-white border-white hover:bg-white hover:text-construction-darkgray">
                    <a href={`/projects/${project.id}`}>View Details</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-construction-brick text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 initially-hidden opacity-0">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto initially-hidden opacity-0" style={{ animationDelay: '0.2s' }}>
            Let us help bring your construction vision to life with the same quality and attention to detail 
            showcased in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 initially-hidden opacity-0" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="bg-white text-construction-brick hover:bg-opacity-90">
              <a href="/quote">Get a Free Quote</a>
            </Button>
            <Button asChild className="border-2 border-white text-white hover:bg-white hover:text-construction-brick">
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
