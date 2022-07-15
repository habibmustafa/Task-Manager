import React, { Component } from "react";
import { GiConfirmed } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";
import "./TaskState.css";

export default class TaskState extends Component {
  state = {
    taskState: this.props.state,
  };

  toDraft = () => {
    this.setState({
      taskState: "draft",
    });

    
  };

  toCompleted = () => {
    this.setState({
      taskState: "completed",
    });
  };



  render() {
    const { taskState } = this.state;

    return (
      <div className="task-state-container">
        <div
          className={`task-state ${
            taskState === "draft"
              ? "task-state_draft"
              : taskState === "completed"
              ? "task-state_completed"
              : "task-state_default"
          }`}
        >
          {taskState === "draft"
            ? "draft"
            : taskState === "completed"
            ? "completed"
            : "planning"}
        </div>
        <div className="task-state__btns">
          <button
            className="task-state__btn task-state__btn-draft"
            onClick={this.toDraft}
          >
            <CgCloseO />
          </button>
          <button
            className="task-state__btn task-state__btn-completed"
            onClick={this.toCompleted}
          >
            <GiConfirmed />
          </button>
        </div>
      </div>
    );
  }
}