//ProfilePage.tsx
import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import React, { useContext, useState } from 'react';
import TaskContext from '../context/TasksContext.tsx';
import { Row } from "react-bootstrap";
import { toDoList } from "../types/types.ts";


// Initalizing task list using addTask function along with delete, toggle, and edit functions and storing to Context API
  const ProfilePage: React.FC = () =>{
    const {user, isAuthenticated } = useAuth0();
    const [newTask, setNewTask] = useState<string>('');
    const [newTaskDesc, setNewTaskDesc] = useState<string>('');
    const { List, setList } = useContext(TaskContext);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedTask, setEditedTask] = useState<string>('');
    const [editingDescId, setEditingDescId] = useState<number | null>(null);
    const [editedDesc, setEditedDesc] = useState<string>('');

      const addTask = (): void => {
        if (newTask.trim() !== '') {
          const newTodo: toDoList = {
            id: Date.now(),
            task: newTask,
            completed: false,
            description: newTaskDesc,
          };
    
          setList([...List, newTodo]);
          setNewTask('');
      };
    }
    
      const deleteTask = (id: number): void => {
        setList(List.filter((task) => task.id !== id));
      };

      const startEditing = (List): void => {
        setEditingId(List.id);
        setEditedTask(List.task);
        setEditedDesc(List.description);
        };

      const cancelEditing = (): void => {  
          setEditingId(null);  
          setEditedTask('');  
        };

        const cancelDescEditing = (): void => {  
          setEditingDescId(null);  
          setEditedDesc('');  
        };

        const toggleTodo = (id: number): void => {
          setList((prevTodos) =>
            prevTodos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo ));
        };
        
        const saveEdit = (id: number): void => {  
          if (editedTask.trim() === '') return;
        
          setList(prevTodos =>  
            prevTodos.map(todo =>  
              todo.id === id ? { ...todo, task: editedTask, description: editedDesc } : todo
            )
          );  
          cancelDescEditing();  
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
                    {List.map(todo => (  
                      <div key={todo.id} className='d-flex align-items-center mb-2'>  
                        <input  
                          type='checkbox'  
                          checked={todo.completed}  
                          onChange={() => toggleTodo(todo.id)}  
                          className='me-2'  
                        />
                
                        {editingId === todo.id ? (  
                          <>  
                            <input  
                              type='text'  
                              value={editedTask}  
                              onChange={e => setEditedTask(e.target.value)}  
                              className='form-control me-2'  
                            />
                            <input  
                              type='text'  
                              value={editedDesc}  
                              onChange={e => setEditedDesc(e.target.value)}  
                              className='form-control me-2'
                            />    
                            <button  
                              onClick={() => saveEdit(todo.id)}
                              className='btn btn-success btn-sm me-2'  
                            >  
                              Save  
                            </button>
   
                            <button  
                              onClick={cancelEditing}  
                              className='btn btn-secondary btn-sm'  
                            >  
                              Cancel  
                            </button>  
                          </>  
                        ) : (  
                          <>  
                            <span  
                              style={{  
                                textDecoration: todo.completed ? 'line-through' : 'none',  
                              }}  
                              className='flex-grow-1'  
                            > 
                            <h4>Task: {todo.task}</h4>
                            <h4>Description: {todo.description}</h4>  
                            </span>  
                            <button  
                              onClick={() => startEditing(todo)}  
                              className='btn btn-outline-primary btn-sm me-2'  
                            >  
                              Edit  
                            </button>
                            <button  
                              onClick={() => deleteTask(todo.id)}  
                              className='btn btn-danger btn-sm'  
                            >  
                              🗑️  
                            </button>
                          </>  
                        )}  
                      </div>  
                    ))}
                  </Row>
                    <div className="input-group">
                        Task: 
                        <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="form-control me-2"
                        /> Task Description: 
                        <input
                        type="note"
                        value={newTaskDesc}
                        onChange={(e) => setNewTaskDesc(e.target.value)}
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