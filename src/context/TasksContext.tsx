import React from 'react';
import { toDoList } from '../types/types';
import { createContext } from 'react';

// Creating Context API and assigning data from Profile page as attributes
type TaskContextType = {
List: toDoList[];
setList: React.Dispatch<React.SetStateAction<toDoList[]>>;
};

const TaskContext = createContext<TaskContextType>({
List: [],
setList: () => {},
});


export default TaskContext;