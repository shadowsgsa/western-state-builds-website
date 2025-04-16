
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const QuoteButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      to="/quote"
      className={`fixed bottom-6 right-6 z-40 bg-construction-brick text-white rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <MessageSquare className="h-6 w-6 mr-2" />
      <span className="font-medium">Get a Quote</span>
    </Link>
  );
};

export default QuoteButton;
