import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import React from "react";


// Setting log in button for user authentication
const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  if(!isAuthenticated) return (<Button onClick={handleLogin}>Log In</Button>)
  return null;
};

export default LoginButton;