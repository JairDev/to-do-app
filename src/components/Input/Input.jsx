import React from "react" 

const Input = () => {
  return (
    <form>
      <label for="todo-text">Añade una tarea</label>
      <input id="todo-text" type="text" placeholder="Añade una tarea" name="todo-text"/>
    </form>
  )
}

export default Input