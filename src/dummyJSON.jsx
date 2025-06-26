import React, { useEffect, useState, useContext } from "react";
import { Card, Button, Row, Col, Container, Spinner } from 'react-bootstrap';
import { CartContext } from './CartContext';

function DummyJSONComponent() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch products:", err);
                setLoading(false);
            });
    }, []);

    return (
        <Container className="mt-4">
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status" />
                    <p>Loading products...</p>
                </div>
            ) : (
                <Row>
                    {products.map((pro) => (
                        <Col key={pro.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={pro.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{pro.title}</Card.Title>
                                    <Card.Text>
                                        {pro.description.slice(0, 60)}...
                                        <br />
                                        Price: Rs. {pro.price}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => addToCart(pro)}>
                                        Add To Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default DummyJSONComponent;
