import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    NavbarToggler,
    Collapse,
    Row,
    Col
} from 'reactstrap';
import logoImage from "../img/Logo.png";

import '../styles/style.css';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar style={{ backgroundColor: '#e71616' }} expand="md">
            <Container fluid>
                <Row>
                    <Col md="2">
                        <NavbarBrand href="/">
                            <img src={logoImage} alt="MiLogo" className="logo-img" />
                        </NavbarBrand>
                    </Col>
                    
                    <Col md="10">
                        <Navbar dark expand="md"> 
                            <NavbarToggler onClick={toggleNavbar} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="#">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Servicios</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Acerca de Nosotros</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Contacto</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        
                    </Col>
                
                
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;