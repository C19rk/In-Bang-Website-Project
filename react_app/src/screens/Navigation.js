import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../screens/mediaqueries.css";

export function Navigation() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div className="container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">JWT Authentication</Navbar.Brand>
        <Nav className="me-auto">
          {isAuth ? <Nav.Link href="/">Homepage</Nav.Link> : null}
        </Nav>
        <Nav>
          {isAuth ? (
            <Nav.Link href="/logout">Logout</Nav.Link>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
