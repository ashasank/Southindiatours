import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Kerala.jpg"
          alt="Kerala"
        />
        <Carousel.Caption>
          <h3>Explore Kerala</h3>
          <p>The beauty of backwaters and lush landscapes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/chennai.jpg"
          alt="Tamilnadu"
        />
        <Carousel.Caption>
          <h3>Discover Tamil Nadu</h3>
          <p>Witness the magnificent temples and culture.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Karnataka.jpg"
          alt="Karnataka"
        />
        <Carousel.Caption>
          <h3>Adventure in Karnataka</h3>
          <p>From majestic hills to beautiful beaches.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Andhra Pradesh.jpg"
          alt="Andhra Pradesh"
        />
        <Carousel.Caption>
          <h3>Explore Andhra Pradesh</h3>
          <p>Marvel at the rich cultural heritage and scenic beauty.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Telangana Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/hyderabad.jpg"
          alt="Telangana"
        />
        <Carousel.Caption>
          <h3>Discover Telangana</h3>
          <p>Experience vibrant cities and historical monuments.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
