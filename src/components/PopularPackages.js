import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import React Router's useNavigate
import './PopularPackages.css'; // Custom CSS for the popular packages section

const PopularPackages = () => {
  const navigate = useNavigate(); // Use navigate function from React Router

  // Function to handle the "Book Now" click
  const handleBookNow = (destination) => {
    navigate('/book', { state: { destination } }); // Navigate to the booking page with the destination
  };

  return (
    <section className="popular-packages-section">
      <div className="container">
        <h2 className="section-title">Our Popular Destinations</h2>
        <div className="package-list">
          
          <div className="package-item">
            <img
              src="/images/Araku.jpg"
              alt="Andhra Pradesh"
              className="package-img"
            />
            <div className="package-info">
              <h3>Araku</h3>
              <p>Explore the rich culture and heritage of Andhra Pradesh.</p>
              <button className="package-btn" onClick={() => handleBookNow('Araku')}>Book Now</button>
            </div>
          </div>

          <div className="package-item">
            <img
              src="/images/papikondalu.png"
              alt="Telangana"
              className="package-img"
            />
            <div className="package-info">
              <h3>Papikondalu</h3>
              <p>Discover the vibrant culture and history of Telangana.</p>
              <button className="package-btn" onClick={() => handleBookNow('Papikondalu')}>Book Now</button>
            </div>
          </div>

          <div className="package-item">
            <img
              src="/images/Allepy.jpg"
              alt="Kerala"
              className="package-img"
            />
            <div className="package-info">
              <h3>Alleppey</h3>
              <p>Experience the serene backwaters of Kerala.</p>
              <button className="package-btn" onClick={() => handleBookNow('Alleppey')}>Book Now</button>
            </div>
          </div>

          <div className="package-item">
            <img
              src="/images/gokarna.jpg"
              alt="Karnataka"
              className="package-img"
            />
            <div className="package-info">
              <h3>Gokarna</h3>
              <p>Explore the hill stations and scenic views of Karnataka.</p>
              <button className="package-btn" onClick={() => handleBookNow('Gokarna')}>Book Now</button>
            </div>
          </div>

          <div className="package-item">
            <img
              src="/images/Ooty.jpg"
              alt="Tamil Nadu"
              className="package-img"
            />
            <div className="package-info">
              <h3>Ooty</h3>
              <p>Experience the culture of Tamil Nadu.</p>
              <button className="package-btn" onClick={() => handleBookNow('Ooty')}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
