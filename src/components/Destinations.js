// import React, { useState } from 'react';
// import { Card, Button, Form, Row, Col } from 'react-bootstrap';
// import './Destinations.css'; // Add custom CSS for layout

// // Sample data for destinations (Andhra Pradesh, Kerala, Telangana added)
// const destinationsData = [
//   { id: 1, name: 'Ooty', category: 'Hill Station', state: 'Tamil Nadu', description: 'Beautiful hill station in Tamil Nadu', imageUrl: '/images/Ooty.jpg' },
//   { id: 2, name: 'Marina Beach', category: 'Beach', state: 'Tamil Nadu', description: 'Famous beach in Chennai', imageUrl: '/images/Marina.jpg' },
//   { id: 3, name: 'Meenakshi Temple', category: 'Temple', state: 'Tamil Nadu', description: 'Ancient temple in Madurai', imageUrl: '/images/Meenakshi.jpg' },
//   { id: 4, name: 'Kodaikanal', category: 'Hill Station', state: 'Tamil Nadu', description: 'A charming hill station known for its lakes and waterfalls', imageUrl: '/images/Kodaikanal.jpg' },
//   { id: 5, name: 'Mahabalipuram', category: 'Beach', state: 'Tamil Nadu', description: 'Historic coastal town with temples and beaches', imageUrl: '/images/Mahabalipuram.jpg' },
//   { id: 6, name: 'Rameswaram', category: 'Temple', state: 'Tamil Nadu', description: 'A sacred pilgrimage site', imageUrl: '/images/Rameswaram.jpg' },

//   // Andhra Pradesh
//   { id: 7, name: 'Tirupati', category: 'Temple', state: 'Andhra Pradesh', description: 'Famous pilgrimage site', imageUrl: '/images/Tirupathi.jpg' },
//   { id: 8, name: 'Araku Valley', category: 'Hill Station', state: 'Andhra Pradesh', description: 'A beautiful valley in Andhra Pradesh', imageUrl:'/images/Araku.jpg' },
//   { id: 9, name: 'Prakasam Barage', category: 'Water Body', state: 'Andhra Pradesh', description: 'Popular Tourist Attractions of the State', imageUrl: '/images/Prakasam.jpg' },
//   { id: 10, name: 'Lambasingi', category: 'Hill Station', state: 'Andhra Pradesh', description: 'Kashmir of Andhra Pradesh', imageUrl: '/images/Lambasingi.jpg' },
//   { id: 11, name: 'Vanajangi', category: 'Hill Station', state: 'Andhra Pradesh', description: 'Best Place to Experience the Sunrise', imageUrl: '/images/Vanajangi.jpg' },
//   { id: 12, name: 'Ramkrishna Beach', category: 'Beach', state: 'Andhra Pradesh', description: 'Renowned for its natural beauty and serene waters', imageUrl: '/images/Rk.jpg' },
  
//   // Kerala
//   { id: 13, name: 'Munnar', category: 'Hill Station', state: 'Kerala', description: 'A hill station known for tea gardens', imageUrl: '/images/Munnar.jpg' },
//   { id: 14, name: 'Alleppey', category: 'Water Body', state: 'Kerala', description: 'Famous for its backwaters and beaches', imageUrl: '/images/Allepy.jpg' },
//   { id: 15, name: 'Sabarimala', category: 'Temple', state: 'Kerala', description: 'Famous pilgrimage site in Kerala', imageUrl: '/images/sabarimala.jpg' },

//   // Telangana
//   { id: 16, name: 'Charminar', category: 'Historic Monument', state: 'Telangana', description: 'Famous monument in Hyderabad', imageUrl: '/images/Charminar.jpg' },
//   { id: 17, name: 'Ramappa Temple', category: 'Temple', state: 'Telangana', description: 'Ancient temple with intricate carvings', imageUrl: '/images/Ramappa.jpg' },
//   { id: 18, name: 'Nagarjuna Sagar', category: 'Water Body', state: 'Telangana', description: 'A massive dam and popular tourist spot', imageUrl: '/images/Nagarjuna.png' },
// ];

// const Destinations = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('');
//   const [filterState, setFilterState] = useState('');
//   const filteredDestinations = destinationsData.filter(destination => {
//     const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = filterCategory ? destination.category === filterCategory : true;
//     const matchesState = filterState ? destination.state === filterState : true;
//     return matchesSearch && matchesCategory && matchesState;
//   });

//   return (
//     <div className="destinations-container">
//       <h2 className="text-center my-4">Famous Tourist Places</h2>

//       {/* Search Bar */}
//       <Form className="mb-4">
//         <Row className="align-items-center">
//           <Col md={6}>
//             <Form.Control 
//               type="text" 
//               placeholder="Search for a destination..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)} 
//             />
//           </Col>

//           {/* Filter by Category */}
//           <Col md={3}>
//             <Form.Select 
//               value={filterCategory} 
//               onChange={(e) => setFilterCategory(e.target.value)}
//             >
//               <option value="">Filter by Category</option>
//               <option value="Beach">Beach</option>
//               <option value="Hill Station">Hill Station</option>
//               <option value="Temple">Temple</option>
//               <option value="Historic Monument">Historic Monument</option>
//               <option value="Water Body">Water Body</option>
//             </Form.Select>
//           </Col>

//           {/* Filter by State */}
//           <Col md={3}>
//             <Form.Select 
//               value={filterState} 
//               onChange={(e) => setFilterState(e.target.value)}
//             >
//               <option value="">Filter by State</option>
//               <option value="Tamil Nadu">Tamil Nadu</option>
//               <option value="Andhra Pradesh">Andhra Pradesh</option>
//               <option value="Kerala">Kerala</option>
//               <option value="Telangana">Telangana</option>
//             </Form.Select>
//           </Col>
//         </Row>
//       </Form>

//       {/* Destinations Card Grid */}
//       <Row>
//         {filteredDestinations.map(destination => (
//           <Col md={4} className="mb-4" key={destination.id}>
//             <Card className="destination-card">
//               <Card.Img variant="top" src={destination.imageUrl} alt={destination.name} />
//               <Card.Body>
//                 <Card.Title>{destination.name}</Card.Title>
//                 <Card.Text>{destination.description}</Card.Text>
//                 <Button variant="primary">Book Now</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}

//         {/* No results message */}
//         {filteredDestinations.length === 0 && (
//           <Col>
//             <p className="text-center">No destinations found matching your search.</p>
//           </Col>
//         )}
//       </Row>
//     </div>
//   );
// };

// export default Destinations;






import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Add React Router
import './Destinations.css'; // Add custom CSS for layout

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterState, setFilterState] = useState('');
  const navigate = useNavigate(); // React Router navigate function

  const destinationsData = [
      { id: 1, name: 'Ooty', category: 'Hill Station', state: 'Tamil Nadu', description: 'Beautiful hill station in Tamil Nadu', imageUrl: '/images/Ooty.jpg' },
      { id: 2, name: 'Marina Beach', category: 'Beach', state: 'Tamil Nadu', description: 'Famous beach in Chennai', imageUrl: '/images/Marina.jpg' },
      { id: 3, name: 'Meenakshi Temple', category: 'Temple', state: 'Tamil Nadu', description: 'Ancient temple in Madurai', imageUrl: '/images/Meenakshi.jpg' },
      { id: 4, name: 'Kodaikanal', category: 'Hill Station', state: 'Tamil Nadu', description: 'A charming hill station known for its lakes and waterfalls', imageUrl: '/images/Kodaikanal.jpg' },
      { id: 5, name: 'Mahabalipuram', category: 'Beach', state: 'Tamil Nadu', description: 'Historic coastal town with temples and beaches', imageUrl: '/images/Mahabalipuram.jpg' },
      { id: 6, name: 'Rameswaram', category: 'Temple', state: 'Tamil Nadu', description: 'A sacred pilgrimage site', imageUrl: '/images/Rameswaram.jpg' },
    
      // Andhra Pradesh
      { id: 7, name: 'Tirupati', category: 'Temple', state: 'Andhra Pradesh', description: 'Famous pilgrimage site', imageUrl: '/images/Tirupathi.jpg' },
      { id: 8, name: 'Araku Valley', category: 'Hill Station', state: 'Andhra Pradesh', description: 'A beautiful valley in Andhra Pradesh', imageUrl:'/images/Araku.jpg' },
      { id: 9, name: 'Prakasam Barage', category: 'Water Body', state: 'Andhra Pradesh', description: 'Popular Tourist Attractions of the State', imageUrl: '/images/Prakasam.jpg' },
      { id: 10, name: 'Lambasingi', category: 'Hill Station', state: 'Andhra Pradesh', description: 'Kashmir of Andhra Pradesh', imageUrl: '/images/Lambasingi.jpg' },
      { id: 11, name: 'Vanajangi', category: 'Hill Station', state: 'Andhra Pradesh', description: 'Best Place to Experience the Sunrise', imageUrl: '/images/Vanajangi.jpg' },
      { id: 12, name: 'Ramkrishna Beach', category: 'Beach', state: 'Andhra Pradesh', description: 'Renowned for its natural beauty and serene waters', imageUrl: '/images/Rk.jpg' },
      
      // Kerala
      { id: 13, name: 'Munnar', category: 'Hill Station', state: 'Kerala', description: 'A hill station known for tea gardens', imageUrl: '/images/Munnar.jpg' },
      { id: 14, name: 'Alleppey', category: 'Water Body', state: 'Kerala', description: 'Famous for its backwaters and beaches', imageUrl: '/images/Allepy.jpg' },
      { id: 15, name: 'Sabarimala', category: 'Temple', state: 'Kerala', description: 'Famous pilgrimage site in Kerala', imageUrl: '/images/sabarimala.jpg' },
    
      // Telangana
      { id: 16, name: 'Charminar', category: 'Historic Monument', state: 'Telangana', description: 'Famous monument in Hyderabad', imageUrl: '/images/Charminar.jpg' },
      { id: 17, name: 'Ramappa Temple', category: 'Temple', state: 'Telangana', description: 'Ancient temple with intricate carvings', imageUrl: '/images/Ramappa.jpg' },
      { id: 18, name: 'Nagarjuna Sagar', category: 'Water Body', state: 'Telangana', description: 'A massive dam and popular tourist spot', imageUrl: '/images/Nagarjuna.png' },
    ];

  const filteredDestinations = destinationsData.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory ? destination.category === filterCategory : true;
    const matchesState = filterState ? destination.state === filterState : true;
    return matchesSearch && matchesCategory && matchesState;
  });

  // Function to handle 'Book Now' click
  const handleBookNow = (destination) => {
    navigate('/book', { state: { destination } }); // Navigate to booking page with destination data
  };

  return (
    <div className="destinations-container">
      <h2 className="text-center my-4">Famous Tourist Places</h2>

      {/* Search Bar */}
      <Form className="mb-4">
        <Row className="align-items-center">
          <Col md={6}>
            <Form.Control 
              type="text" 
              placeholder="Search for a destination..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </Col>

          {/* Filter by Category */}
          <Col md={3}>
            <Form.Select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">Filter by Category</option>
              <option value="Beach">Beach</option>
              <option value="Hill Station">Hill Station</option>
              <option value="Temple">Temple</option>
              <option value="Historic Monument">Historic Monument</option>
              <option value="Water Body">Water Body</option>
            </Form.Select>
          </Col>

          {/* Filter by State */}
          <Col md={3}>
            <Form.Select 
              value={filterState} 
              onChange={(e) => setFilterState(e.target.value)}
            >
              <option value="">Filter by State</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Kerala">Kerala</option>
              <option value="Telangana">Telangana</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      {/* Destinations Card Grid */}
      <Row>
        {filteredDestinations.map(destination => (
          <Col md={4} className="mb-4" key={destination.id}>
            <Card className="destination-card">
              <Card.Img variant="top" src={destination.imageUrl} alt={destination.name} />
              <Card.Body>
                <Card.Title>{destination.name}</Card.Title>
                <Card.Text>{destination.description}</Card.Text>
                <Button variant="primary" onClick={() => handleBookNow(destination.name)}>Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

        {/* No results message */}
        {filteredDestinations.length === 0 && (
          <Col>
            <p className="text-center">No destinations found matching your search.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};
export default Destinations;