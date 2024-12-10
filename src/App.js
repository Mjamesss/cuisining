import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import L from './components/L'; // Import Login Component
import S from './components/S'; // Import Sign Up Component
import ForgotPass from './components/ForgotPass'; // Import Forgot Password Component
import OTP from './components/OTP'; // Import OTP Component
import SetNewPass from './components/SetNewPass'; // Import Set New Password Component
import Done from './components/Done'; // Import Done Component
import Landing from './components/Landing'; // Import Home Component
import DoneRegister from './components/DoneRegister'; // Import Done Register Component

const App = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<L />} />
              <Route path="/signup" element={<S />} />
              <Route path="/ForgotPass" element={<ForgotPass />} />
              <Route path="/OTP" element={<OTP />} />
              <Route path="/SetNewPass" element={<SetNewPass />} />
              <Route path="/Done" element={<Done />} />
              <Route path="/Landing" element={<Landing />} />       
              <Route path="/DoneRegister" element={<DoneRegister />} />         
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
