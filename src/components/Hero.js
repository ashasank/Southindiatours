import React from 'react';
import HeroCarousel from './HeroCarousel'; // Heroic Section
import PopularPackages from './PopularPackages'; // Popular Packages Section
import Services from './Services'; // Services Section
import Testimonials from './Testimonials'; // Testimonials Section
import Footer from './Footer'; // Footer Section

const Home = () => {
  return (
    <div>
      <HeroCarousel /> {/* Heroic Section */}
      <PopularPackages /> {/* Popular Packages Section */}
      <Services /> {/* Services Section */}
      <Testimonials /> {/* Testimonials Section */}
      <Footer /> {/* Footer Section */}
    </div>
  );
};

export default Home;
