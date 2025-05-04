import { Col, Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import NavBar from "./Navbar";
import React from "react";

//Dashboard initializing authentication request
const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth0();


  return (
    <Container>
      <Col>
        <NavBar></NavBar>
        <h1>Task List Dashboard</h1>
        {!isAuthenticated && (
        <>
          <h3>Log-in to access Task Manager:</h3>
        </>
      )}

        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;