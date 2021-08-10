import React, { useRef } from "react";
import Task from "../Task/Task";
import "./Todo.css";

const Todo = ({
  taskList,
  handleClickFavorite,
  handleClickDelete,
  handleClickComplete,
  handleDragStart,
  handleDrop,
  handleDragEnd
}) => {
  const contentRef = useRef(null);
  
  if(!taskList.length) return <div className="empty-task">Agrega una tarea...</div>

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
            handleClickComplete={handleClickComplete}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDragEnd={handleDragEnd}
          />
        ))
      }
    </section>
  );
};

export default Todo;
