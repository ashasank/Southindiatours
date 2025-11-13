// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const CustomNavbar = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = sessionStorage.getItem('authToken');
//     if (token) {
//       setIsAuthenticated(true); 
//     } else {
//       setIsAuthenticated(false); 
//     }
//   }, []);
//   const handleLogout = () => {
//     sessionStorage.removeItem('authToken'); 
//     setIsAuthenticated(false); 
//     navigate('/'); 
//   };
//   return (
//     <nav className="custom-navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-brand">South Indian Tours</Link>
//         <div className="navbar-links">
//           <Link to="/" className="nav-btn">Home</Link>
//           <Link to="/destinations" className="nav-btn">Destinations</Link>
//           {isAuthenticated ? (
//             <>
//               <Link to="/book" className="nav-btn">Book Now</Link>
//               <button onClick={handleLogout} className="nav-btns">Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/signin" className="nav-btn">SignIn</Link>
//               <Link to="/signup" className="nav-btn">SignUp</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default CustomNavbar;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const CustomNavbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true); 
    } else {
      setIsAuthenticated(false); 
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem('authToken'); 
    setIsAuthenticated(false); 
    navigate('/'); 
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">South Indian Tours</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/destinations" className="nav-btn">Destinations</Link>
          
          {/* If user is authenticated, show 'Book Now' and 'Logout', else show 'SignIn' and 'SignUp' */}
          {isAuthenticated ? (
            <>
              <Link to="/book" className="nav-btn">Book Now</Link>
              <button onClick={handleLogout} className="nav-btns">Logout</button>
            </>
          ) : (
            <>
              <Link to="/signin" className="nav-btn">SignIn</Link>
              <Link to="/signup" className="nav-btn">SignUp</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;