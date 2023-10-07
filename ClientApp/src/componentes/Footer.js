import React from 'react';
import { Container, Row, Col } from 'reactstrap';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';*/

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
            <Container>
                <Row>
                    <Col md="6">
                        <h4>Contacto</h4>
                        <p>Email: info@empresaempleados.com</p>
                        <p>Teléfono: +123456789</p>
                    </Col>
                   <Col md="6">
                       
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;