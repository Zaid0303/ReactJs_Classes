import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [variant, setVariant] = useState('danger');

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded credentials
        const validEmail = 'admin@gmail.com';
        const validPassword = '123456';

        if (email === validEmail && password === validPassword) {
            setMessage('Login successful!');
            setVariant('success');
            console.log('User logged in:', { email });
            // You can redirect or set login state here
        } else {
            setMessage('Invalid email or password.');
            setVariant('danger');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow">
                <h3 className="text-center mb-4">Login</h3>
                {message && <Alert variant={variant}>{message}</Alert>}
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}

export default Login;
