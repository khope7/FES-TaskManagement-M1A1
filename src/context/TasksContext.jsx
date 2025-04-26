import React from 'react';

const TaskContext = React.createContext({
  List: { TaskList: '' },
  setTasks: () => {}
});

export default TaskContext;