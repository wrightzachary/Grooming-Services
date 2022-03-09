import React from 'react';
import { Button, Col, Container, Row, Card} from "react-bootstrap";
import './home.css';

const Home = () => {
    return (  
        <React.Fragment>
            <div className='home'>
            <Container>
            <Row>
                <h2 className='divineGrooming'>Divine Grooming and Doggy Daycare</h2>
            </Row>
            <Row>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Chania W</Card.Title>
                            <Card.Text>
                                My dog was under the upmost care while he was getting a full grooming. Divine Grooming 
                                gave my dog the best grooming he ever had! I will continue my business with this amazing comapny!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Zuania M</Card.Title>
                            <Card.Text>
                               Although I only took my dog for her nails, I will continue my business
                               here and take my dog here to get groomed the enxt time when she needs it.
                               Highly recommend Divine Grooming!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Zach W</Card.Title>
                            <Card.Text>
                                Wow! That is exactly what I said when I saw my dog when we picked him up. 
                                I could not believe how good he looked! My dog felt as good as he looked after his vist. 
                                Found my new groomer!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Button className='bookAppointment' variant="info" href='#'>Book An Appointment</Button>
                </Col>
            </Row>
            </Container>
            </div>
        </React.Fragment>
    );
}
 
export default Home;