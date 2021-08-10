import React, { useEffect, useRef } from "react";
import "./Task.css";
import { Icon } from "@iconify/react";
import starOutlined from "@iconify/icons-ant-design/star-outlined";
import deleteOutlined from "@iconify/icons-ant-design/delete-outlined";

const Task = ({
  objTask,
  handleClickFavorite,
  handleClickDelete,
  handleClickComplete,
  handleDragStart,
  handleDrop,
  handleDragEnd,
}) => {
  const favoriteIconRef = useRef(null);
  const spanCompletedStyle = useRef(null);
  const isCheckedStyle = useRef(null);
  const refTask = useRef(null);
  const checkRadiusStyle = useRef(null);

  useEffect(() => {
    const svg = favoriteIconRef.current;
    const span = spanCompletedStyle.current;
    const task = refTask.current;
    const checkCompleted = checkRadiusStyle.current;
    let check = isCheckedStyle.current;

    objTask.favorite
      ? (svg.style.color = "hsl(60, 100%, 50%)")
      : (svg.style.color = "hsl(236, 9%, 61%)");

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

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="drop-zone">
      <div
        id={objTask.id}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragEnd={handleDragEnd}
        ref={refTask}
        className="App-task"
        draggable={true}
      >
        <div className="wrapper-task-child">
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
            <p>{objTask.text}</p>
          </div>

          <div className="content-icon-favorite action-task">
            <span
              onClick={(e) => handleClickFavorite(e, objTask)}
              className="icon-favorite"
            >
              <svg ref={favoriteIconRef} className="icon icon-star-empty">
                <Icon icon={starOutlined} style={{ fontSize: "25px" }} />
              </svg>
            </span>
          </div>

          <div className="content-icon-delete action-task">
            <span
              data-taskid={objTask.id}
              onClick={handleClickDelete}
              className="icon-delete-letter"
            >
              <Icon icon={deleteOutlined} style={{ fontSize: "25px" }} />
            </span>
          </div>
        </div>
        <span className="date-task">{objTask.dateFormat}</span>
      </div>
    </div>
  );
};

export default Task;
