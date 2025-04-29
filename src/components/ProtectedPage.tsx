import React from "react";
import TodoList from "./TodoList";
import NavBar from "./Navbar";
  
const ProtectedPage: React.FC = () => {

  return (
    <div>
      <NavBar />
      <TodoList />
    </div>
    
  );
};

export default ProtectedPage;