
import React from "react";
import TaskItem from "../taskItem/TaskItem";
import "./TaskItems.css";

const TaskItems = () => {

  const tasks = JSON.parse(localStorage.tasks);

  return (
    <div className="task-items">
      {tasks.map((item, i) => (
        <TaskItem key={i} {...item}/>
      ))}
    </div>
  );
};

export default TaskItems;