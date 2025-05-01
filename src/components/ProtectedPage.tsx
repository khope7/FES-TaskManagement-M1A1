import React from "react";
import TodoList from "./TodoList";
import NavBar from "./Navbar";
  
const ProtectedPage: React.FC = () => {

  return (
    <div>
      <NavBar></NavBar>
      <TodoList></TodoList>
    </div>

  );
};
export default ProtectedPage;