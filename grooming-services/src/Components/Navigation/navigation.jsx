import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './navigation.css';

const Navigation = () => {
    return (  
        <React.Fragment>
            {/* navbar */}
            <Navbar bg="light" variant="light">
            <Container  id="home" className='h-100 myNav'>
                {/* company name  */}
                <Navbar.Brand>
                    <h4>Grooming Services</h4>
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/* navbar collapse*/}
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* navigation links */}
                    <Nav>
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Who we are</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Pricing</Nav.Link>
                        <Nav.Link href="#">Book An Appointment</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </React.Fragment>
    );
}
 
export default Navigation;