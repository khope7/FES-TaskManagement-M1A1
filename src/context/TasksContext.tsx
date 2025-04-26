import React from 'react';

type TaskContextType = {
List: { TaskList: string  };
setTaskList: React.Dispatch<React.SetStateAction<{ TaskList: string }>>;
};


const TaskContext = React.createContext<TaskContextType>({
List: { TaskList: '' },
setTaskList: () => {},
});

export default TaskContext;