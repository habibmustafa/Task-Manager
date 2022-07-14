import React, { Component } from 'react';
import TaskItem from '../taskItem/TaskItem';
import "./TaskItems.css"


export default class TaskItems extends Component {

  render() {
    return (
      <div className='task-items'>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    )
  }
}