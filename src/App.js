import logo from './logo.svg';
import Navbarr from './navbar.jsx';
import Silder from './header.jsx';
import ProductsComponent from './products.jsx';
import DummyJSONComponent from './dummyJSON.jsx';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import img from './images/Pushpa 2.png';
import img1 from './images/muna.png';
import img2 from './images/Dilwale.png';

import img3 from './images/Student-Of-the-Year2.png';
import img4 from './images/Kick.png';
import img5 from './images/Simbha.png';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Salam from './props.jsx';

function App() {
  const movies = [
    {
      title: "Student of the Year 2",
      link: "https://youtu.be/QZsthdsh6yk?si=ttbGM2dakjan-PEf",
      img: img3
    },
    {
      title: "Kick",
      link: "https://youtu.be/u-j1nx_HY5o?si=jnUqE3zvxVRm5UA4",
      img: img4
    },
    {
      title: "Simbha",
      link: "https://youtu.be/PtFY3WHztZc?si=RAcx4pC1f1buNUOd",
      img: img5
    }
  ];

  return (
    <div className="App">
      {/* --------------- */}
      <Navbarr></Navbarr>
      {/* --------------- */}

      {/* --------------- */}
      <Silder></Silder>
      {/* --------------- */}

      {/* --------------- */}
      <h1 className='my-4'>Props Array Movie Cards</h1>
      <div className="movie-section py-2">
        <Container>
          <Row>
            {movies.map((movie, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="mb-2">
                <div className="movie-card h-100">
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={movie.img}
                      style={{ height: '600px', objectFit: 'cover' }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <Card.Title>{movie.title}</Card.Title>
                      <a
                        href={movie.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" className="w-100 mt-3">
                          Watch Now
                        </Button>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* --------------- */}

      
      {/* --------------- */}
      <Container className="mt-4">
      <h1 className='my-4'>Props Hard Coded Movie Cards</h1>
      <Row>
        <Salam
          title="Pushpa 2"
          link="https://www.youtube.com/watch?v=1kVK0MZlbI4"
          img={img}
        />
        <Salam
          title="Muna Michael"
          link="https://youtu.be/1YOfv5tIGwU?si=QiIEOJn1LPWwySKz"
          img={img1}
        />
        <Salam
          title="Dilwale"
          link="https://youtu.be/AHuOo1DLcRc?si=0vZIWLtjBGS4NwMu"
          img={img2}
        />
      </Row>
    </Container>
      {/* --------------- */}

      {/* --------------- */}
      <h1 className='my-4'>Hard Coded Products</h1>
      <ProductsComponent></ProductsComponent>
      {/* --------------- */}

      {/* --------------- */}
      <h1 className='my-4'>DummyJSON Products</h1>
      <DummyJSONComponent></DummyJSONComponent>
      {/* --------------- */}

    </div>
  );
}

export default App;
