import React, { createContext, useState, ReactNode } from 'react';
import { toDoList } from '../components/types';

type TaskContextType = {
  List: { TaskList: toDoList[] };
  setTaskList: React.Dispatch<React.SetStateAction<{ TaskList: toDoList[] }>>;
};

export const TaskContext = createContext<TaskContextType>({
  List: { TaskList: [] },
  setTaskList: () => {},
});

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [taskList, setTaskList] = useState<{ TaskList: toDoList[] }>({ TaskList: [] });

  return (
    <TaskContext.Provider value={{ List: taskList, setTaskList }}>
      {children}
    </TaskContext.Provider>
  );
};