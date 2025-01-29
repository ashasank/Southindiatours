import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Testimonials.css'; // Import custom CSS for styling

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <Container>
        <h2 className="testimonials-header">What Our Clients Say</h2>
        <Row className="testimonial-list">
          {/* Testimonial 1 */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text>
                  "South Indian Tours gave us the trip of a lifetime!"
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <span>- Rajesh K.</span>
              </Card.Footer>
            </Card>
          </Col>

          {/* Testimonial 2 */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text>
                  "Amazing service and unforgettable experiences."
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <span>- Priya S.</span>
              </Card.Footer>
            </Card>
          </Col>

          {/* Testimonial 3 */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text>
                  "Highly recommend this tour company!"
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <span>- Arun V.</span>
              </Card.Footer>
            </Card>
          </Col>

          {/* Testimonial 4 (New) */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text>
                  "The tour was flawless, and every detail was taken care of."
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <span>- Anita P.</span>
              </Card.Footer>
            </Card>
          </Col>

          {/* Testimonial 5 (New) */}
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text>
                  "One of the best travel experiences we've ever had."
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <span>- Karthik M.</span>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;