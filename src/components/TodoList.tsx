import React, {useContext } from "react";
import {TaskContext} from "../context/TasksContext";
import { Container } from "react-bootstrap";

const TodoList: React.FC = () => {
  const { List } = useContext(TaskContext)
  console.log(List.TaskList)

  return(
    <div>
      <Container className="mt-5">
        <h1>Task-List:</h1>
        {List.TaskList.map((task) => (
            <div key={task.id}>
                <h2>{task.task}</h2>
            </div>
        ))}
      </Container>
    </div>
  )
}

export default TodoList