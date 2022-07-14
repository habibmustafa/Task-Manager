import React, { Component } from 'react'
import Keywords from '../keywords/Keywords';
import List from '../list/List'
import TaskState from '../taskState/TaskState';
import "./TaskItem.css"

export default class TaskItem extends Component {
  render() {
    return (
      <div className='task-item'>
        <TaskState />
        <h3 className="task-item__title">Task Title</h3>
        <p className="task-item__date">10/02/2022</p>
        <p className="task-item__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi ad? Sint quam quis debitis!</p>
        <List />
        <Keywords />
      </div>
    )
  }
}