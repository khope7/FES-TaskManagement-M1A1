//NavBar.tsx
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

  return (
    <Navbar>
      <Nav>
        <Link to="/">Dashboard |</Link>
        {isAuthenticated &&
            <>
                <Link to="/profile"> Task Manager |</Link>
                <Link to="/protected"> To-Do Lists</Link>
            </>
        }
      </Nav>
    </Navbar>
  );
};

export default NavBar;