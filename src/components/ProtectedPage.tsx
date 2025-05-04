import React from "react";
import TodoList from "./TodoList";
import NavBar from "./Navbar";

// Protected page to trigger the redirect back to login screen
const ProtectedPage: React.FC = () => {

  return (
    <div>
      <NavBar></NavBar>
      <TodoList></TodoList>
    </div>

  );
};
export default ProtectedPage;