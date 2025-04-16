
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import QuoteButton from './QuoteButton';
import ScrollToTop from './ScrollToTop';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        {children}
      </main>
      <QuoteButton />
      <Footer />
    </>
  );
};

export default PageLayout;
