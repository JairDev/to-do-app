import React, { useEffect, useRef, useState } from "react";
import "./Task.css";
import { Icon, InlineIcon } from "@iconify/react";
import starOutlined from "@iconify/icons-ant-design/star-outlined";
import deleteOutlined from "@iconify/icons-ant-design/delete-outlined";

import svgCheck from "../../assets/img/icon-check.svg";
const Task = ({
  objTask,
  handleClickFavorite,
  handleClickDelete,
  handleClickSave,
  handleClickComplete,
  handleClickEdit,
  handleDragStart,
  handleDrop,
}) => {
  const favoriteIconRef = useRef(null);
  const spanCompletedStyle = useRef(null);
  const isCheckedStyle = useRef(null);
  const refTask = useRef(null);
  // const [editTask, setEditTask] = useState("");
  // const inputRef = useRef(null);
  const checkRadiusStyle = useRef(null);

  useEffect(() => {
    // console.log(svgCheck);
    const svg = favoriteIconRef.current;
    const span = spanCompletedStyle.current;
    const task = refTask.current;
    const checkCompleted = checkRadiusStyle.current;
    let check = isCheckedStyle.current;

    objTask.favorite
      ? svg.classList.add("selected")
      : svg.classList.remove("selected");

    objTask.completed
      ? span.classList.add("line-completed")
      : span.classList.remove("line-completed");

    objTask.completed
      ? checkCompleted.classList.add("completed")
      : checkCompleted.classList.remove("completed");

    objTask.completed ? (check.checked = true) : (check.checked = false);

    objTask.favorite && objTask.selected
      ? task.classList.add("selected-favorite")
      : task.classList.remove("selected-favorite");

    objTask.completed && objTask.selected
      ? task.classList.add("selected-completed")
      : task.classList.remove("selected-completed");

    !objTask.completed && objTask.selected
      ? task.classList.add("selected-not-completed")
      : task.classList.remove("selected-not-completed");
  }, [objTask.completed, objTask.favorite, objTask.selected]);

  // const handleChange = (e) => {
  //   setEditTask(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div
      id={objTask.id}
      onDragOver={(e) => e.preventDefault()}
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      // onDragStart={onDragStart}
      // onDragEnd={onDragEnd}
      ref={refTask}
      className="App-task"
      draggable={true}
    >
      {/* <span className="date-task">{objTask.dateFormat}</span> */}
      <span ref={spanCompletedStyle} className="style-completed"></span>
      <div className="App-check-completed">
        <span ref={checkRadiusStyle} className="check-style">
          <svg className="icon icon-checkmark">
            <use xlinkHref="#icon-checkmark"></use>
          </svg>
        </span>
        <form>
          <input
            id="input-check"
            ref={isCheckedStyle}
            data-taskid={objTask.id}
            onClick={(e) => handleClickComplete(e, objTask)}
            type="checkbox"
          />
        </form>
      </div>
      <div className="App-task-edit">
        {/* <form onSubmit={handleSubmit}>
          <input
            id="input-task-edit"
            type="text"
            name="task-edit"
            value={objTask.edit ? editTask : objTask.text}
            onChange={handleChange}
            readOnly="readonly"
            ref={inputRef}
          />
        </form> */}
        <p>{objTask.text}</p>
      </div>

      <div className="content-icon-favorite action-task">
        <span
          onClick={(e) => handleClickFavorite(e, objTask)}
          className="icon-favorite"
        >
          <svg ref={favoriteIconRef} className="icon icon-star-empty">
            {/* <use xlinkHref="#icon-star-empty"></use> */}
            <Icon icon={starOutlined} style={{fontSize: '25px'}} />
          </svg>
        </span>
      </div>

      {/* <div className="content-editar action-task">
        <form>
          <button onClick={(e) => handleClickEdit(e, objTask, editTask)}>
            {objTask.edit ? "Guardar" : "Editar"}
          </button>
        </form>
      </div> */}

      {/* <div className="content-guardar action-task">
        <form>
          <button
            data-taskid={objTask.id}
            onClick={(e) => handleClickSave(e, editTask, objTask)}
          >
            Guardar
          </button>
        </form>
      </div> */}

      <div className="content-icon-delete action-task">
        <span
          data-taskid={objTask.id}
          onClick={handleClickDelete}
          className="icon-delete-letter"
        >
          {/* <svg className="icon icon-bin">
            <use xlinkHref="#icon-bin"></use>
          </svg> */}
          <Icon icon={deleteOutlined} style={{fontSize: '25px'}} />
        </span>
      </div>
    </div>
  );
};

export default Task;
