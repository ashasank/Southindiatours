import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const destinationFromState = location.state?.destination || ''; // Retrieve the destination if passed from state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: destinationFromState,
    date: '',
    guests: 1,
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated (token exists)
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      // Redirect to sign-in page if not authenticated
      alert('You must sign in to book a destination.');
      navigate('/signin', { state: { from: '/book' } }); 
    } else {
      setIsAuthenticated(true); // Set authenticated status
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert('Please sign in before booking.');
      return;
    }

    try {
      const token = sessionStorage.getItem('authToken');
      const response = await axios.post(
        'http://localhost:5000/api/bookings',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in the request header
          },
        }
      );
      alert(response.data.message); // Success message

      // Clear the form fields after successful booking
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: destinationFromState, // Reset to the same destination if needed
        date: '',
        guests: 1,
      });

      navigate('/'); // Redirect to home or any other page after booking
    } catch (error) {
      console.error(error);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    isAuthenticated && ( // Only render the booking form if the user is authenticated
      <div className="booking-container">
        <h2 className="booking-title">Plan Your Vacation!</h2>
        <Form onSubmit={handleSubmit} className="booking-form">
          <Form.Group controlId="name" className="booking-group">
            <Form.Label className="booking-label">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="booking-input"
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="booking-group">
            <Form.Label className="booking-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="booking-input"
              required
            />
          </Form.Group>

          <Form.Group controlId="phone" className="booking-group">
            <Form.Label className="booking-label">Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="booking-input"
              required
            />
          </Form.Group>

          <Form.Group controlId="destination" className="booking-group">
            <Form.Label className="booking-label">Destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="booking-input"
              required
            />
          </Form.Group>

          <Form.Group controlId="date" className="booking-group">
            <Form.Label className="booking-label">Date of Trip</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="booking-input"
              required
            />
          </Form.Group>

          <Form.Group controlId="guests" className="booking-group">
            <Form.Label className="booking-label">Number of Guests</Form.Label>
            <Form.Control
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="booking-input"
              required
            />
          </Form.Group>

          <Button className="booking-button" variant="primary" type="submit">
            Book Now
          </Button>
        </Form>
      </div>
    )
  );
};

export default BookingPage;
