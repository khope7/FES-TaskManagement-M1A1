import React, {useContext } from "react";
import TaskContext from "../context/TasksContext";
import { Container } from "react-bootstrap";


// Creating official List using data from List within Context API
const TodoList: React.FC = () => {
  const { List } = useContext(TaskContext)

  console.log(List)

  return(
    <div>
      <Container className="mt-5">
        <h1>Manage Tasks:</h1>
        {List.map((toDo) => (
          <h1>Task: {toDo.task}
          <br />Description: {toDo.description}</h1>

        ))}
      </Container>
    </div>
  )
}

export default TodoList