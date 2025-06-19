import React, { useEffect, useState } from "react";
import { Container, Button, Card, Form } from 'react-bootstrap';

function ProductCounter() {
    const [num, setNum] = useState(0);
    const [product, setProduct] = useState("Eggs");
    const [input, setInput] = useState("");

    useEffect(() => {
        alert(product + " Demand");
    }, [num]);

    const handleChangeProduct = () => {
        if (input.trim() !== "") {
            setProduct(input);
            setNum(0); // optionally reset demand when product changes
        }
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '22rem' }} className="text-center p-3">
                <Card.Body>
                    <Card.Title>Product Counter</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{product}</Card.Subtitle>
                    <Card.Text>
                        <strong>Demand Count:</strong> {num}
                    </Card.Text>

                    <Button variant="primary" className="me-2" onClick={() => setNum(num + 1)}>Increase</Button>
                    <Button variant="danger" onClick={() => setNum(0)}>Reset</Button>

                    <hr />

                    <Form.Group className="mt-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter new product name"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button
                            variant="success"
                            className="mt-2"
                            onClick={handleChangeProduct}
                        >
                            Change Product
                        </Button>
                    </Form.Group>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ProductCounter;
