import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import CustomNavbar from './Navbar';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  const location = useLocation(); // Get current location

  return (
    <>
      <CustomNavbar />
      <div>{children}</div> {/* Render the main page content */}
      
      {/* Conditionally render Services and Testimonials only on the home page */}
      {location.pathname === '/' && (
        <>
          <Services />
          <Testimonials />
        </>
      )}
      
      <Footer />
    </>
  );
};

export default MainLayout;
