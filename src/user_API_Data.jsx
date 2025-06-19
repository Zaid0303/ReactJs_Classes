import React, { useEffect, useState } from "react";
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap';

function UsersComponent() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch users:", err);
                setLoading(false);
            });
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Users List</h2>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status" />
                    <p>Loading users...</p>
                </div>
            ) : (
                <Row>
                    {users.map((user) => (
                        <Col key={user.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Email:</strong> {user.email} <br />
                                        <strong>Phone:</strong> {user.phone} <br />
                                        <strong>Company:</strong> {user.company.name}
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

export default UsersComponent;
