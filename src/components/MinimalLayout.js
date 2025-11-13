import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomNavbar from './Navbar'; // Make sure Navbar is imported
import BookingPage from './BookingPage';
const MinimalLayout = ({ children }) => {
  return (
    <>
      <CustomNavbar />
      <div>
        <Routes>
          <Route path="/book" element={<BookingPage />} />
        </Routes>
        {children}
      </div>
    </>
  );
};

export default MinimalLayout;