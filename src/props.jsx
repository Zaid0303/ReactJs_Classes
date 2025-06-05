import img from "./images/Pushpa 2.png"
import img1 from "./images/muna.png"
import img2 from "./images/Dilwale.png"
import { Card, Button, Row, Col, Container, } from 'react-bootstrap';

function Salam(props) {
    return (
        <Col sm={12} md={6} lg={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={props.img} style={{ height: '600px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    );
}

export default Salam;