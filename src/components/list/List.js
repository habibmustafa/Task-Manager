import React, { Component } from "react";
import "./List.css"

class List extends Component {
  render() {
    const {list} = this.props;

    return (
      <div>
        <h5 className="task-item__list-title">List:</h5>
        <ul className="task-item__list">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;