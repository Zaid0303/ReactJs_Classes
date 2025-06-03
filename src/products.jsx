import React from "react";
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

function ProductsComponent() {
    const products = [
        { id: 1, name: 'Iphone 11', price: 55000, image: 'https://www.pakmobizone.pk/wp-content/uploads/2024/08/Apple-iPhone-11-White-2-866x1024.png' },
        { id: 2, name: 'Iphone 12', price: 59000, image: 'https://www.pakmobizone.pk/wp-content/uploads/2022/03/Apple-iphone-12-Black-2.jpg' },
        { id: 3, name: 'Iphone 13', price: 64000, image: 'https://m.media-amazon.com/images/I/61ecgBYOAJL._AC_UF1000,1000_QL80_.jpg' },
        { id: 3, name: 'Iphone 14', price: 64000, image: 'https://www.mega.pk/items_images/Apple+iPhone+14+128GB+Dual+Sim+Non+PTA+Price+in+Pakistan%2C+Specifications%2C+Features_-_23575.webp' },
    ];

    return (
        <Container className="mt-4">
            <Row>
                {products.map((Pro) => (
                    <Col key={Pro.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={Pro.image} />
                            <Card.Body>
                                <Card.Title>{Pro.name}</Card.Title>
                                <Card.Text>Price: Rs. {Pro.price}</Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductsComponent;
