//ProfilePage.tsx
import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import React, { useContext, useState } from 'react';
import TaskContext from '../context/TasksContext.tsx';
import { Row } from "react-bootstrap";


type toDoList = {
    id: number;
    task: string;
  }

  const ProfilePage: React.FC = () =>{
    const {user, isAuthenticated } = useAuth0();
    const [tasks, setTasks] = useState<toDoList[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    const { setTaskList } = useContext(TaskContext);

      const addTask = (): void => {
        if (newTask.trim() !== '') {
          const newTodo: toDoList = {
            id: Date.now(),
            task: newTask,
          };
    
          setTasks([...tasks, newTodo]);
          setNewTask('');
          try {
            console.log(tasks[0].task);
          } catch (error) {
            console.error('Something went wrong:', error);
          }

          
          setTaskList({TaskList: "test"})
        }
        
      };

      
    
      const deleteTask = (id: number): void => {
        setTasks((prevTasks) => prevTasks.filter((namedTask) => namedTask.id !== id));
      };

    if(!isAuthenticated){
        return <div>Not authenticated</div>
    }

    if(!user){
        return <div>No user profile</div>
    }

    return(
        <PageLayout>
            <h1>Welcome</h1>
            <h3>{user.name}</h3>
                {user?.picture && <img src={user.picture} alt={user.name} />}
                
                <div>
                 <div className='d-flex todo-list'>
                  <Row>
                    <h2 className='title'>Task List:</h2>      
                        {tasks.map((namedTask) => (
                        <div key={namedTask.id}>
                            {namedTask.task}
                            <button onClick={() => deleteTask(namedTask.id)}>🗑️</button>
                        </div>
                        ))}
                    </Row>
                    <div className="input-group">
                        <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="form-control me-2"
                        />
                        <button onClick={addTask} className="btn btn-primary">Add Task</button>
                    </div>
                    </div>
                </div>
        </PageLayout>
    )
}

export default ProfilePage;