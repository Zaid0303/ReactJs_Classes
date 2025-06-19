import React, { useEffect, useState } from "react";
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap';

function MoviesComponent() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/akabab/3d9f7473fbaa70d0b8ecfe1cbfb22a8e/raw/movies.json")
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch movies:", err);
                setLoading(false);
            });
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Movie List</h2>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status" />
                    <p>Loading movies...</p>
                </div>
            ) : (
                <Row>
                    {movies.map((movie) => (
                        <Col key={movie.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={movie.poster} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        <strong>Year:</strong> {movie.year} <br />
                                        <strong>Rating:</strong> {movie.rating}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default MoviesComponent;
