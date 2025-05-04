import React, { useContext, useState } from 'react';
import TaskContext from '../context/TasksContext';
import { toDoList } from '../types/types';
import PageLayout from './PageLayout';


//Setting add and remove functions using form on Item page using List from Context API
const ItemComponent: React.FC = () => {
  const {List, setList} = useContext(TaskContext)
  const [itemName, setItemName] = useState('');
  const [itemDesc, setItemDesc] = useState('');

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: toDoList = { id: Date.now(), task: itemName, description: itemDesc, completed: false };
    setList([...List, newItem])
    setItemName('');
  };

  const removeItem = (itemId: number) => {
    setList(List.filter((item) => item.id != itemId))
  };

  return (
    <PageLayout>
      <div>
        <h1>Item List</h1>
        <form onSubmit={addItem}>
          Task:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
          />
          Task Description:
          <input
            type="text"
            value={itemDesc}
            onChange={(e) => setItemDesc(e.target.value)}
            placeholder="Enter item description"
          />
          <button type="submit">Add Item</button>
        </form>
        
        {List.map((item) => (
          <div key={item.id}>
            Task: {item.task}{' '}
            Description: {item.description}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
        
      </div>
    </PageLayout>
  );
};

export default ItemComponent;