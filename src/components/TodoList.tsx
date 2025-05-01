import React, {useContext } from "react";
import TaskContext from "../context/TasksContext";
import { Container } from "react-bootstrap";

const TodoList: React.FC = () => {
  const { List } = useContext(TaskContext)

  console.log(List)

  return(
    <div>
      <Container className="mt-5">
        <h1>Manage Tasks:</h1>
        {List.map((toDo) => (
          <h1>{toDo.task}</h1>
        ))}
      </Container>
    </div>
  )
}

export default TodoList