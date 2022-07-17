import React, { Component } from 'react'
import Keywords from '../keywords/Keywords';
import List from '../list/List'
import TaskState from '../taskState/TaskState';
import "./TaskItem.css"

export default class TaskItem extends Component {

  constructor(props){
    super(props);
    this.tasks = JSON.parse(localStorage.tasks);
  }

  state = {
    taskState: this.props.state,
  };
  
  toDraft = () => {
    const draftItemIndex = this.tasks.findIndex(task => task.title === this.props.title);
    this.tasks[draftItemIndex].state = "draft";
    localStorage.setItem("tasks",  JSON.stringify(this.tasks));
    
    this.setState({
      taskState: "draft",
    });
  };

  toCompleted = () => {
    const draftItemIndex = this.tasks.findIndex(task => task.title === this.props.title);
    this.tasks[draftItemIndex].state = "completed";
    localStorage.setItem("tasks",  JSON.stringify(this.tasks));

    this.setState({
      taskState: "completed",
    });
  };

  render() {
    return (
      <div className='task-item'>
        <TaskState taskState={this.state.taskState} toDraft={(e) => this.toDraft(e)} toCompleted={this.toCompleted}/>
        <h3 className="task-item__title">{this.props.title}</h3>
        <p className="task-item__date">{this.props.date}</p>
        <p className="task-item__desc">{this.props.desc}</p>
        <List list={this.props.list}/>
        <Keywords />
      </div>
    )
  }
}