import React, { useRef } from "react";
import Task from "../Task/Task";
import "./Todo.css";

const Todo = ({
  taskList,
  handleClickFavorite,
  handleClickDelete,
  handleClickSave,
  handleClickComplete,
  handleClickEdit,
  handleDragStart,
  handleDrop
}) => {
  // if(!taskList.length) return <div className="empty-task">Sin tareas</div>
  const contentRef = useRef(null);
  console.log(taskList)
  return (
    <section
      ref={contentRef}
      className="App-todo-list"
    >
      {taskList
        .sort((a, b) => a.order - b.order)
        .map((task) => (
          <Task
            key={task.text}
            objTask={task}
            handleClickFavorite={handleClickFavorite}
            handleClickDelete={handleClickDelete}
            handleClickSave={handleClickSave}
            handleClickComplete={handleClickComplete}
            handleClickEdit={handleClickEdit}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
          />
        ))}
    </section>
  );
};

export default Todo;
