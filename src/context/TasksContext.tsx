import React from 'react';
import { toDoList } from '../types/types';
import { createContext, useContext } from 'react';

type TaskContextType = {
List: toDoList[];
setTaskList: React.Dispatch<React.SetStateAction<toDoList[]>>;
};

const TaskContext = createContext<TaskContextType>({
List: [],
setTaskList: () => {},
});


export default TaskContext;