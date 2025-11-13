import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import './Services.css'; // Import custom CSS for styling

const Services = () => {
  return (
    <div className="services-section">
      <Container>
        <h2 className="services-header">Our Services</h2>
        <Row>
          <Col md={4} className="service-item">
            <Card>
              <Card.Body>
                <Card.Title>Custom Tours</Card.Title>
                <Card.Text>
                  Tailor your experience with our custom tour packages.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="service-item">
            <Card>
              <Card.Body>
                <Card.Title>Accommodation</Card.Title>
                <Card.Text>
                  Stay at the finest hotels and resorts in South India.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="service-item">
            <Card>
              <Card.Body>
                <Card.Title>Guided Tours</Card.Title>
                <Card.Text>
                  Explore with our knowledgeable and friendly guides.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;