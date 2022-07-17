import React, { useState } from "react";
import "./CreateTask.css";
import { GrClose } from "react-icons/gr";

const CreateTask = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([""]);
  const [keyword, setKeyword] = useState([""]);
  const [listInput, setListInput] = useState("");
  // const listInput = useRef();

  const tasks = JSON.parse(localStorage.tasks);

  const addTask = () => {
    const temp = [...list];
    temp.push(listInput);
    setList(temp);
  };

  const removeTask = (i) => {
    let temp = [...list];
    temp.splice(i, 1);
    setList(temp);
  };

  const onTitleChange = (value) => {
    setTitle(value);
  };

  const onDescChange = (value) => {
    setDesc(value);
  };

  const closePopup = () => {
    props.closePopup();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const temp = [...list, listInput];
    const date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

    tasks.push({
      state: "planning",
      date: `${monthNames[date.getMonth()]} ${date.getDate()},  ${date.getFullYear()} ${formatAMPM(date)}`,
      title,
      desc,
      list: temp.slice(1),
      keyword,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    closePopup();
  };

  return (
    <form onSubmit={(e) => onFormSubmit(e)} className="create-task">
      <div>
        <label htmlFor="task-title" className="task-label">
          Title:
        </label>
        <input
          onChange={(e) => onTitleChange(e.target.value)}
          value={title}
          type="text"
          id="task-title"
          className="create-task__inp"
          required={true}
        />
      </div>
      <div>
        <label htmlFor="task-desc" className="task-label">
          Description:
        </label>
        <textarea
          required={true}
          onChange={(e) => onDescChange(e.target.value)}
          value={desc}
          rows={4}
          type="text"
          id="task-desc"
          className="create-task__inp"
        />
      </div>
      <h5 className="task-item__list-title">List</h5>
      {list.map((item, i) => (
        <div key={item} className="add-task">

          <input
            // ref={listInput}
            onChange={(e) => {setListInput(e.target.value)}}
            type="text"
            className="create-task__inp"
            readOnly={i !== list.length - 1}
          />

          {i === list.length - 1 ? (
            <button
              className="create-new__item"
              type="button"
              onClick={addTask}
            >
              +
            </button>
          ) : (
            <button
              className="create-new__item"
              type="button"
              onClick={() => removeTask(i)}
            >
              x
            </button>
          )}
        </div>
      ))}
      <h5 className="task-item__keywords-title">Keywords</h5>
      <div className="add-keywords">
        <input type="text" className="create-task__inp" />
        <button className="create-new__item" type="button">
          +
        </button>
      </div>
      <button className="submit-task">Submit Task</button>
      <button onClick={closePopup} className="create-task__close" type="button">
        <GrClose />
      </button>
    </form>
  );
};

export default CreateTask;