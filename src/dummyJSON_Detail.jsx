import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner } from 'react-bootstrap';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status" />
                <p>Loading product details...</p>
            </div>
        );
    }

    return (
        <Container className="mt-5">
            <Card>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <h5>Price: Rs. {product.price}</h5>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    <p>Rating: {product.rating}</p>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ProductDetail;
