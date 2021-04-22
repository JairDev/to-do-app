import React from "react";
import Task from "../Task/Task";
import "./Todo.css";

const Todo = ({
  taskList,
  handleClickFavorite,
  handleClickDelete,
  handleClickSave,
  handleClickComplete
}) => {
  return (
    <section className="App-todo-list">
      {taskList.map((task) => (
        <Task
          key={task.text}
          objTask={task}
          handleClickFavorite={handleClickFavorite}
          handleClickDelete={handleClickDelete}
          handleClickSave={handleClickSave}
          handleClickComplete={handleClickComplete}
        />
      ))}
    </section>
  );
};

export default Todo;
