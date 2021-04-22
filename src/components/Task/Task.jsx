import React, { useRef, useState } from "react";
import "./Task.css";


let edit = false

const Task = ({ objTask }) => {
  console.log(objTask);
  const [editTask, setEditTask] = useState("");
  const inputRef = useRef(null)
  
  const handleChange = (e) => {
    setEditTask(e.target.value)
  }

  const handleClickEdit = (e) => {
    edit = true
    const input = inputRef.current 
    input.removeAttribute("readonly")
    e.preventDefault()
  }

  const handleClickSave = (e) => {
    edit = false
    const input = inputRef.current 
    input.readOnly ? input.removeAttribute("readonly") : input.readOnly = true 
    const objTaskEdit = {...objTask, text: editTask}
    console.log(objTaskEdit)
    console.log("helpo")
    e.preventDefault()
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App-task">
      <div className="App-check-completed">
        <form>
          <input type="checkbox" />
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
      <div>
        <form>
          <button onClick={handleClickEdit}>Editar</button>
        </form>
      </div>
      <div>
        <form>
          <button onClick={handleClickSave}>Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default Task;
