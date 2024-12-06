import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import L from './components/L'; // Import Login Component
import S from './components/S'; // Import Sign Up Component

const App = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<L />} />
              <Route path="/signup" element={<S />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};


export default App;
