Hello, here are the tasks for FES Mod1Assignment1

A brief explanation of your project
Setup and installation instructions
A list of features and any additional important details

# Brief explanation:
This project starts with an inital Dashboard that asks the user to log into their individual accounts for authorization using authentication via auth0, only google authorization works.

Once the user is logged in they will see 3 different links, Dashboard, Task List, Task Manager, and Items

Dashboard allows for user to log off
Task List allows for user to include task and task details which then routes to Task Manager and Items useing useState Variables and sending to global state using useContext methods
Task Manager provides a list of tasks and task details pulled from profile page using Task Context for global state management
Items allows for Task management using useContext methods and data submission via forms

# Setup Installation and instructions
Auth0:
Be sure to create an account with auth0 for log in functionality

Installs needed:
npm install
npm install axios
npm i @auth0/auth0-react
npm install react-bootstrap
npm install react-router-dom

# Features
Program is installed with add task buttons, along with edit and trashcan icon buttons after task addition. Both bottons are working
Edit button takes you to a sub text box for both task and task detail which allows for you to update both and either save or cancel which then updates the task list dynamically

## Additional info
The App itself is wrapped with the context provider thus giving access to task list database for all components.
PageLayot is used for the ProfilePage
All pages have been wrapped with the navigation bar to allow for seamless user browsing

