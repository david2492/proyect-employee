import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import imagenempleados1 from "../img/imagenempleados-1.png";
import imagenempleados2 from "../img/imagenempleados-2.png";
import imagenempleados3 from "../img/imagenempleados-3.png";

const ServicesSection = () => {
    

    return (
        <Container fluid className="sectionStyle color-change-2x">
            <h1>Nuestros Servicios</h1>
            <Row className="rowservicestyle">
                <Col xs="12" sm="6" md="4" className="serviceStyle">
                    <img
                        className="imageStyle"
                        src={imagenempleados1} // URL de la primera imagen
                        alt="Servicio 1"
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
                        sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                </Col>
                <Col xs="12" sm="6" md="4" className="serviceStyle">
                    <img
                        className="imageStyle"
                        src={imagenempleados2}  // URL de la segunda imagen
                        alt="Servicio 2"
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
                        sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                </Col>
                <Col xs="12" sm="6" md="4" className="serviceStyle">
                    <img
                        className="imageStyle"
                        src={imagenempleados3}  // URL de la tercera imagen
                        alt="Servicio 3"
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
                        sit amet, adipiscing nec, ultricies sed, dolor.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ServicesSection;