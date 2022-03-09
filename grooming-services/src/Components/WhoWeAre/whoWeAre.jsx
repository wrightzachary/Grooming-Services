import React from 'react';
import { Col, Container, Row, Card} from "react-bootstrap";

const WhoWeAre = () => {
    return ( 
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={4}></Col>
                   <Col sm={4}>
                       <Card>
                           <Card.Body>
                            <Card.Title className='text-center'>Who We Are</Card.Title>
                                <Card.Text>
                                    At Divine Grooming and Doggy Daycare, we value your dogs as if they were our own pets. 
                                    We know that as dog parents, from our experience, it is hard to find reliable services for
                                    our furry little children and we aim to make our services your favorite choice. We are a Christain based
                                    family and we promise you that we will love your pets as God loves us and as we love our own pets. 
                                </Card.Text>
                        </Card.Body>
                       </Card>
                   </Col>
                   <Col sm={4}></Col>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default WhoWeAre;