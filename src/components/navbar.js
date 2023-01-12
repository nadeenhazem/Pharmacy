import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { InputGroup } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../styling/Home.css";
import { CiSearch } from "react-icons/ci";
import logo from '../Imgs/logo.jpeg'
import profile from '../Imgs/profile.png'

function NavbarBet() {
    
    return (
        <>

            <Navbar expand='xl' className="mb-3" id='top-nav'>
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
                    <Navbar.Offcanvas>

                        <Offcanvas.Body>
                        <img src={profile} alt='' className='img-profile img-nav'/>
                            <Form className="d-flex">
                                <label className='search-label'>أبحث:</label>
                                <InputGroup >
                                    <Form.Control
                                        type="search"
                                        style={{borderRadius: '20px'}}
                                        aria-label="البحث"
                                        className="search-input"
                                    />
                                    <div className="search-icon">
                                        <CiSearch />
                                    </div>
                                </InputGroup>
                            </Form>
                            <Nav className="justify-content-end flex-grow-2 pe-3">
                                <Nav.Link href="#action1" className='navbar-nav-link' 
                                id='navbar-nav-link-id'> زبائن</Nav.Link>
                                <Nav.Link href="#action2" className='navbar-nav-link'
                                id='navbar-nav-link-id'>موردين</Nav.Link>
                                <Nav.Link href="#action1" className='navbar-nav-link'
                                id='navbar-nav-link-id'>تجار</Nav.Link>
                                
                            </Nav>


                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Brand href="#"> 
                    <img src={logo} className='logo' alt='..'/></Navbar.Brand>

                </Container>
                
            </Navbar>
            <div id='nav-line'></div>
        </>
    );
}

export default NavbarBet;