import React, { useContext, useRef } from "react";
import { themeContext } from "../../context/themeContext";
import Task from "../Task/Task";
import "./Todo.css";

const Todo = ({
  taskList,
  handleClickFavorite,
  handleClickDelete,
  handleClickComplete,
  handleDragStart,
  handleDrop,
  handleDragEnd,
}) => {
  const { theme } = useContext(themeContext);
  const contentRef = useRef(null);
  const backgroundClass = theme.light
    ? theme.themeColorLight
    : theme.themeColorDark;

  if (!taskList.length)
    return (
      <div
        className="empty-task"
        style={{
          backgroundColor: backgroundClass,
        }}
      >
        Agrega una tarea...
      </div>
    );

  return (
    <section
      ref={contentRef}
      className="App-todo-list"
      style={{
        backgroundColor: backgroundClass,
      }}
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
        ))}
    </section>
  );
};

export default Todo;
