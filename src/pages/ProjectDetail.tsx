
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: "Luxury Residence",
    location: "Mountain View, CA",
    category: "residential",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Custom-built luxury home with modern architectural design and premium finishes.",
    fullDescription: "This custom-built luxury residence in Mountain View features modern architectural design with premium finishes throughout. The project included extensive site preparation, custom foundation work, and the implementation of energy-efficient systems. The interior showcases handcrafted cabinetry, imported stone countertops, and smart home integration. The outdoor living spaces include a custom pool, landscaped gardens, and an outdoor kitchen area.",
    completionDate: "June 2023",
    clientName: "Private Client"
  },
  {
    id: 2,
    title: "Office Complex",
    location: "San Francisco, CA",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Multi-story office building with state-of-the-art facilities and sustainable design elements.",
    fullDescription: "This state-of-the-art office complex in downtown San Francisco showcases our commitment to sustainable commercial construction. The building features LEED Gold certification, energy-efficient mechanical systems, and extensive use of recycled and sustainable materials. The office spaces incorporate flexible floor plans, collaborative areas, and the latest technology infrastructure. The project was completed ahead of schedule and under budget, earning recognition for its innovative design and construction approach.",
    completionDate: "October 2022",
    clientName: "TechSpace Innovations"
  },
  {
    id: 3,
    title: "Retail Center",
    location: "Portland, OR",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Shopping mall renovation with modern aesthetics and improved customer flow.",
    fullDescription: "This extensive retail center renovation in Portland transformed an aging shopping mall into a modern commercial hub. The project involved structural retrofitting, facade improvements, and complete interior remodeling. We implemented an improved layout for better customer flow, updated all utility systems, and installed energy-efficient lighting and HVAC. The redesigned common areas now feature local artwork, comfortable seating areas, and improved accessibility. The center remained partially operational during construction, requiring careful planning and phased implementation.",
    completionDate: "March 2023",
    clientName: "Rose City Developments"
  },
  {
    id: 4,
    title: "Modern Townhomes",
    location: "Seattle, WA",
    category: "residential",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Contemporary townhouse development with energy-efficient features and sleek design.",
    fullDescription: "This contemporary townhouse development in Seattle features 24 units designed with a focus on energy efficiency and modern aesthetics. Each townhome includes high-efficiency insulation, triple-pane windows, and solar-ready roofing. The interiors showcase open floor plans, high ceilings, and premium finishes. Common areas include landscaped courtyards, a community garden, and electric vehicle charging stations. The project achieved Built Green 4-Star certification and has been recognized for its innovative approach to urban infill development.",
    completionDate: "August 2023",
    clientName: "Emerald City Homes"
  },
  {
    id: 5,
    title: "Coastal Restaurant",
    location: "San Diego, CA",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Waterfront dining establishment with panoramic ocean views and custom interior.",
    fullDescription: "This stunning waterfront restaurant in San Diego features panoramic ocean views and a custom interior design that celebrates the coastal environment. The construction involved complex structural engineering to maximize views while ensuring resistance to coastal weather conditions. The restaurant includes indoor and outdoor dining areas, a custom kitchen designed in collaboration with renowned chefs, and specialized lighting and acoustic treatments. Sustainable features include water recycling systems, locally sourced materials, and energy-efficient appliances and systems.",
    completionDate: "May 2023",
    clientName: "Coastal Cuisine Group"
  },
  {
    id: 6,
    title: "Mountain Cabin",
    location: "Aspen, CO",
    category: "residential",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Rustic yet modern mountain retreat built with sustainable materials and energy efficiency.",
    fullDescription: "This mountain retreat in Aspen combines rustic charm with modern sustainability. Built using locally harvested timber and reclaimed materials, the cabin features high-performance insulation, geothermal heating, and a small solar array. The design emphasizes connection with the natural environment through large windows, a wraparound deck, and natural finishes throughout. Special attention was paid to weather resistance and snow load management in this high-altitude location. The project demonstrates how traditional mountain architecture can incorporate contemporary energy efficiency and comfort.",
    completionDate: "December 2022",
    clientName: "Alpine Living LLC"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project with the matching ID
    const projectId = parseInt(id || '0');
    const foundProject = projects.find(p => p.id === projectId);
    setProject(foundProject);
    setLoading(false);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

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

  if (loading) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <p className="text-center">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <p className="mb-6">Sorry, the project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-end">
          <div className="text-white pb-12 relative z-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl">{project.location} | {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Project</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="outline" className="flex items-center">
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 initially-hidden opacity-0">
              <h2 className="text-3xl font-bold mb-6 text-construction-darkgray">Project Overview</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-construction-darkgray">Project Highlights</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-construction-brick bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-construction-brick" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Custom designed to meet client specifications</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-construction-brick bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-construction-brick" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sustainable and energy-efficient design elements</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-construction-brick bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-construction-brick" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Premium materials and craftsmanship throughout</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-construction-brick bg-opacity-10 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-construction-brick" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Completed on schedule and within budget</span>
                </li>
              </ul>
            </div>
            
            <div className="initially-hidden opacity-0">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-500">CLIENT</h4>
                    <p className="text-construction-darkgray">{project.clientName}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">LOCATION</h4>
                    <p className="text-construction-darkgray">{project.location}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">CATEGORY</h4>
                    <p className="text-construction-darkgray">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500">COMPLETION DATE</h4>
                    <p className="text-construction-darkgray">{project.completionDate}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-construction-darkgray">Interested in a similar project?</h3>
                  <p className="text-gray-700 mb-4">
                    Contact us to discuss your construction needs and how we can bring your vision to life.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-construction-brick hover:bg-construction-brick/90">
                      <Link to="/quote">Get a Free Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-construction-brick text-construction-brick hover:bg-construction-brick hover:text-white">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-construction-offwhite">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-construction-darkgray initially-hidden opacity-0">
            Related Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <div key={relatedProject.id} className="portfolio-item initially-hidden opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img 
                    src={relatedProject.imageUrl} 
                    alt={relatedProject.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="portfolio-overlay p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{relatedProject.title}</h3>
                    <p className="text-gray-200 mb-4">{relatedProject.location}</p>
                    <Button asChild className="btn-outline text-white border-white hover:bg-white hover:text-construction-darkgray">
                      <Link to={`/projects/${relatedProject.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-construction-brick hover:bg-construction-brick/90">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
