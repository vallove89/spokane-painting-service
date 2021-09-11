import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../icon/logo.svg';


const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: '#243e5c'}}>
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand className='m-2 p-2 fs-3'><img src={logo} alt='Spokane Painting Service' style={{ width: '80px', height: 'auto'}}/></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link className='m-2 p-2 fs-3'>Home</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Services" id="collasible-nav-dropdown" className='m-2 p-0 fs-3'>
                        <LinkContainer to="/commercial">
                            <NavDropdown.Item className='m-2 p-2 fs-3'>Commercial</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/exterior">
                            <NavDropdown.Item className='m-2 p-2 fs-3'>Residential Exterior</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/interior">
                            <NavDropdown.Item className='m-2 p-2 fs-3'>Residental Interior</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/cabinet">
                            <NavDropdown.Item className='m-2 p-2 fs-3'>Cabinet Painting</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    <LinkContainer to="/contact">
                        <Nav.Link className='m-2 p-2 fs-3'>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/estimate">
                        <button type='button' className='btn btn-danger btn-lg m-2 p-2 fs-3'>
                            Estimates
                        </button>

                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation;