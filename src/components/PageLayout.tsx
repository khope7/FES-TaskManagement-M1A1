//PageLayout.tsx
import { Col, Container } from "react-bootstrap";
import NavBar from "./Navbar";
import NavBarButtons from "./NavbarButtons";
import React from "react";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Col>
      <NavBar />
      </Col>
      <Col>
      {children}
      </Col>
      <footer>
        <NavBarButtons />
      </footer>
    </Container>
  );
};

export default PageLayout;