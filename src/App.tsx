/*
Task Management Features:
Task Dashboard Page:
Implement a dashboard interface for managing tasks, including features like task lists, creation, editing, and deletion.

Task Details Display:
Design a detailed view for individual tasks, displaying task information and allowing users to modify task details.

Task Creation and Editing Pages:
Develop forms for creating and editing tasks, incorporating TypeScript types for data validation and error handling.

Authentication and Authorization Pages:
Implement user authentication with Auth0 and authorization pages, including registration and login.

TypeScript Integration:
Utilize TypeScript to enforce type safety and enhance code readability and maintainability throughout the project.
Define TypeScript Interfaces or Type Aliases for data shapes and enforce type checking in React components and utility functions.
State Management with Typed Hooks:
Utilize React's useState hooks with TypeScript to manage application state effectively.
Context API for Global State Management:
Implement the Context API in React with TypeScript for managing global application state and sharing data between components.
Authentication and Authorization with Auth0:
Integrate Auth0 authentication services into the application for secure user authentication and authorization.
Configure TypeScript types for Auth0 user data.
Error Handling and Validation:
Implement error handling and form validation using TypeScript types and React components to provide a seamless user experience.
GitHub Repository:
Create a GitHub repository for the project and commit code regularly.
Maintain a detailed README.md file in the repository, providing clear instructions on project setup, installation, and usage.
Include documentation on project features, architecture, and implementation details.
*/

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProtectedPage from "./components/ProtectedPage";
import CallbackPage from "./components/CallbackPage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./components/AuthenticationGuard";
import ItemComponent from './components/ItemComponent';
import TaskContext from "./context/TasksContext";
import { useState, useEffect } from "react";
import { toDoList } from "./types/types";


// Creating App to hold component routing
const App: React.FC = () => {
  const [ List, setList ] = useState <toDoList[]>(() =>{
    const stored = sessionStorage.getItem("taskList")
    return stored ? JSON.parse(stored):[]
  });

  useEffect(() => {
    sessionStorage.setItem("taskList", JSON.stringify(List))
  }, [List]);

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <TaskContext.Provider value = {{List, setList}}>
      <Routes>
        <Route
          path="/"
          element={<AuthenticationGuard component={HomePage} />}
          />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={ProfilePage} />}
        />
        <Route 
          path="/protected"
          element={<AuthenticationGuard component={ProtectedPage} />}
        />
        <Route 
          path="/items"
          element={<AuthenticationGuard component={ItemComponent} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </TaskContext.Provider>
  );
};

export default App;