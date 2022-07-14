import React, { useState } from "react";
import "./CreateTask.css";
import { GrClose } from "react-icons/gr";

const CreateTask = (props) => {
  // function onListAdd() {
  //   const temp = [...list];
  //   temp.push(
  //     <div key={temp.length + 1} className="add-task">
  //       <input type="text" className="create-task__inp" />
  //       <button className="create-new__item" type="button" onClick={onListAdd}>
  //         +
  //       </button>
  //     </div>
  //   );
  //   setList([...temp])
  // };

  // const [list, setList] = useState([
  //   <div key={1} className="add-task">
  //     <input type="text" className="create-task__inp" />
  //     <button className="create-new__item" type="button" onClick={onListAdd}>
  //       +
  //     </button>
  //   </div>,
  // ]);

  const [list, setList] = useState([1]);

  const addTask = () => {
    const temp = [...list];
    temp.push(list.length + 1);
    setList(temp);
  };

  const removeTask = (i) => {
    let temp = [...list];
    temp.splice(i, 1);
    setList(temp);
  };

  const closePopup = () => {
    props.closePopup();
  };

  return (
    <form className="create-task">
      <div>
        <label htmlFor="task-title" className="task-label">
          Title:
        </label>
        <input type="text" id="task-title" className="create-task__inp" />
      </div>
      <div>
        <label htmlFor="task-desc" className="task-label">
          Description:
        </label>
        <textarea
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
      <button className="submit-task" type="button">
        Submit Task
      </button>
      <button onClick={closePopup} className="create-task__close" type="button">
        <GrClose />
      </button>
    </form>
  );
};

export default CreateTask;