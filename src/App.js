import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import MinimalLayout from './components/MinimalLayout';
import HeroSection from './components/HeroSection';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Destinations from './components/Destinations';
import PopularPackages from './components/PopularPackages';
import BookingPage from './components/BookingPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HeroSection />
            <PopularPackages />
          </MainLayout>
        } />
        <Route path="/book/*" element={<BookingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Main layout for the Destinations page */}
        <Route path="/destinations" element={
          <MainLayout>
            <Destinations />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}
export default App;