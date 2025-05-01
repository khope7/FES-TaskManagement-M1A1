//NavBar.tsx
import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

  return (
    <Navbar>
      <Nav>
        <Nav.Link href="/">Dashboard |</Nav.Link>
        {isAuthenticated &&
            <>
                <Nav.Link href="/profile"> Task List |</Nav.Link>
                <Nav.Link href="/protected"> Task Manager |</Nav.Link>
            </>
        }
      </Nav>
    </Navbar>
  );
};

export default NavBar;