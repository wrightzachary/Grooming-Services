import React from 'react';
import { Col, Container, Row, Card, Nav, Button, CardGroup} from "react-bootstrap";

const Services = () => {
    return ( 
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                      <div className='services' id='services'>
                        <h1>Our Services</h1>
                        <CardGroup>
                          <Card>
                            <Card.Body>
                              <Card.Title className='text-center'>Grooming Services</Card.Title>
                              <Card.Text>
                                <ul>
                                  <li>Style Cut</li>
                                  <li>Bath</li>
                                  <li>Ear Cleaning</li>
                                  <li>Nails</li>
                                  <li>Sanitation Grooming</li>
                                  <li>Nail Polish</li>
                                  <li>Flea Treatment</li>
                                </ul>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Body>
                              <Card.Title className='text-center'>Doggy Daycare Services</Card.Title>
                              <Card.Text>
                                <ul>
                                  <li>Short Terme: Up to 4 hours</li>
                                  <li>Long Term: 4 - 8 hours</li>
                                  <li>Overnight</li>
                                </ul>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </CardGroup>
                      </div>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default Services;