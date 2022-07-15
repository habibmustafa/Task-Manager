import React, { Component } from 'react'
import Keywords from '../keywords/Keywords';
import List from '../list/List'
import TaskState from '../taskState/TaskState';
import "./TaskItem.css"

export default class TaskItem extends Component {
  render() {
    return (
      <div className='task-item'>
        <TaskState data={this.props.state}/>
        <h3 className="task-item__title">{this.props.title}</h3>
        <p className="task-item__date">{this.props.date}</p>
        <p className="task-item__desc">{this.props.desc}</p>
        <List data={this.props.list}/>
        <Keywords />
      </div>
    )
  }
}