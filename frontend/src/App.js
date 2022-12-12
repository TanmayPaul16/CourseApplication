import React from "react";
//import logo from './logo.svg';
import './App.css';
import { Row,Col,Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import AddCourse from "./components/AddCourse";
import Header from './components/Header';
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <ToastContainer />

        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
             

              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-course" element={<AllCourses />} exact />
              </Routes>

            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
