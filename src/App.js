import React, { Component } from "react";
import Aside from "./components/aside/Aside";
import "./App.css";
import Search from "./components/search/Search";
import Filter from "./components/filter/Filter";
import TaskItems from "./components/taskItems/TaskItems";
import CreateTask from "./components/createTask/CreateTask";

class App extends Component {

  constructor(props){
    super(props);
    if(!localStorage.tasks) {
      localStorage.setItem('tasks', JSON.stringify([]))
    }
  }

  
  state = {
    isPopupOpen: false,
  };

  togglePopup = () => {
    this.setState({
      isPopupOpen: !this.state.isPopupOpen
    })
  };

  render() {
    const { isPopupOpen } = this.state;

    return (
      <>
        <div className="container">
          <aside className="aside">
            <Aside />
          </aside>
          <main className="main">
            <Search openPopup={this.togglePopup}/>
            <Filter />
            <TaskItems />
          </main>
        </div>
        {isPopupOpen ? (
          <div className="popup">
            <CreateTask closePopup={this.togglePopup} />
          </div>
        ) : null}
      </>
    );
  }
}

export default App;