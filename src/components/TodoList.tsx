//TodoList.tsx
import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


type Todo = {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<string>('');

  const startEditing = (todo: Todo): void => {
    setEditingId(todo.id);
    setEditedTask(todo.task);
    };

  const cancelEditing = (): void => {
    setEditingId(null);
    setEditedTask('');
  };

  const addTodo = (): void => {
    if (newTask.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        task: newTask,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setNewTask('');
    }
  };

  const toggleTodo = (id: number): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const saveEdit = (id: number): void => {  
    if (editedTask.trim() === '') return;
  
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, task: editedTask } : todo
      )
    );
    cancelEditing();
  };

  const deleteTodo = (id: number): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='todo-list'>
      <h2 className='title'>Your To-do List:</h2>
        <div>
          
        </div>
        {todos.map((todo) => (
          <div key={todo.id} className='d-flex align-items-center'>
            <input
              type="checkbox"
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
                {todo.task}
              </span>
              <button
                onClick={() => startEditing(todo)}
                className='btn btn-outline-primary btn-sm me-2'
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className='btn btn-danger btn-sm'
              >
                🗑️
              </button>
            </>
          )}
        </div>
      ))}
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control me-2"
        />
        <button onClick={addTodo} className="btn btn-primary">Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;