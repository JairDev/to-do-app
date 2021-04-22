import logo from "./logo.svg";
import "./App.css";
import Todo from "../src/components/Todo/Todo";
import FilterTask from "./components/FilterTask/FilterTask";
import { useRef, useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const refInput = useRef(null)

  const handleSubmit = (e) => {
    const taskText = refInput.current.value 
    const taskObject = {
      text: taskText,
      completed: false,
      favorite: false,
    };
    // console.log(taskObject);
    const arrTask = task.concat([taskObject])
    setTask(arrTask)
    e.preventDefault();
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li>Mis Favoritos</li>
          </ul>
        </nav>
      </header>
      <section className="App-content-all-todolist">
        <aside className="App-aside">
          <FilterTask />
        </aside>
        <main className="App-main">
          <section className="App-todo">
            <Todo taskList={task} />
            <div className="content-input-user-task">
              <form
                className="form-user-input"
                onSubmit={(e) => handleSubmit(e)}
              >
                <label htmlFor="todo-text">Añade una tarea</label>
                <input
                  id="todo-text"
                  type="text"
                  placeholder="Añade una tarea"
                  name="todo-text"
                  ref={refInput}
                />
              </form>
            </div>
          </section>

          <div className="App-select-state-task">
            <span>Favoritos</span>
            <span>Completados</span>
            <span>No completados</span>
          </div>
          <div className="App-select-delete-all">
            <span>Seleccionar todos</span>
            <span>Borrar todos</span>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
