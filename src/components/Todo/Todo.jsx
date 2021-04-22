import React from "react";
import Task from "../Task/Task";
import "./Todo.css";

const Todo = ({ taskList }) => {
  // console.log(taskList)

  return (
    <section className="App-todo-list">
      {/* <Task/> */}
      {taskList.map((task) => (
        <Task key={task.text} objTask={task} />
      ))}
    </section>
  );
};

export default Todo;
