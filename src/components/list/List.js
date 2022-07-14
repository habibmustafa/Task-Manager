import React, { Component } from "react";
import "./List.css"

class List extends Component {
  render() {
    return (
      <div>
        <h5 className="task-item__list-title">List:</h5>
        <ul className="task-item__list">
          <li>Task No1</li>
          <li>Task No3</li>
        </ul>
      </div>
    );
  }
}

export default List;