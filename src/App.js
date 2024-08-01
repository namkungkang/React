import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import List from "./components/List";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Shoe shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              <div className="main-bg"></div>
              <List />
            </div>
          }
        />
        <Route path="/detail" element={<div>상세페이지임</div>} />
        <Route path="about" element={<div>어바웃페이지임</div>} />
      </Routes>

    </div>
  );
}
export default App;
