import React, { useRef, useState } from "react";
import { useLocalStorage } from "../../App";
import "./Task.css";

let edit = false;

const Task = ({
  objTask,
  handleClickFavorite,
  handleClickDelete,
  handleClickSave,
  handleClickComplete,
}) => {
  // console.log(objTask);
  const [editTask, setEditTask] = useState("");
  const inputRef = useRef(null);
  // const [task, setTask] = useLocalStorage()
  // console.log(edit)
  const handleChange = (e) => {
    setEditTask(e.target.value);
  };

  const handleClickEdit = (e) => {
    edit = true;
    const input = inputRef.current;
    input.removeAttribute("readonly");
    e.preventDefault();
  };

  // const handleClickSave = (e) => {
  //   edit = false;
  //   const input = inputRef.current;
  //   const id = e.target.dataset.taskid
  //   input.readOnly
  //     ? input.removeAttribute("readonly")
  //     : (input.readOnly = true);
  //   // const index = task.findIndex(task => task.id === id)
  //   // console.log(index)
  //   const objTaskEdit = { ...objTask, text: editTask };
  //   // console.log(objTaskEdit);
  //   // const newArrTask = task.filter(task => task.id === id)
  //   // console.log([...newArrTask, objTaskEdit])
  //   // console.log(newArrTask)
  //   // console.log("task", task)
  //   // setTask([...task, objTaskEdit])
  //   console.log(id)
  //   e.preventDefault();
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App-task">
      <div className="App-check-completed">
        <form>
          <input
            data-taskid={objTask.id}
            onClick={(e) => handleClickComplete(e, objTask)}
            type="checkbox"
          />
        </form>
      </div>
      <div className="App-task-edit">
        <form onSubmit={handleSubmit}>
          <input
            id="input-task-edit"
            type="text"
            name="task-edit"
            value={edit ? editTask : objTask.text}
            onChange={handleChange}
            readOnly="readonly"
            ref={inputRef}
          />
        </form>
      </div>

      <div className="content-icon-favorite">
        <span
          onClick={(e) => handleClickFavorite(e, objTask)}
          className="icon-favorite"
        ></span>
      </div>

      <div>
        <form>
          <button onClick={handleClickEdit}>Editar</button>
        </form>
      </div>
      <div>
        <form>
          <button
            data-taskid={objTask.id}
            onClick={(e) => handleClickSave(e, edit, inputRef, editTask)}
          >
            Guardar
          </button>
        </form>
      </div>

      <div className="content-icon-delete">
        <span onClick={handleClickDelete} className="icon-delete"></span>
      </div>
    </div>
  );
};

export default Task;
