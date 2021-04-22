import logo from "./logo.svg";
import "./App.css";
import Todo from "../src/components/Todo/Todo";
import FilterTask from "./components/FilterTask/FilterTask";
import { useRef, useState } from "react";

export const useSaveTask = () => {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")) || []);

  localStorage.setItem("task", JSON.stringify(task))
  return [task, setTask]
}

export const useSaveFavorite = () => {
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favorite")) || []);

  localStorage.setItem("favorite", JSON.stringify(favorite))
  return [favorite, setFavorite]
}

function App() {
  const [task, setTask] = useSaveTask();
  
  const [favorite, setFavorite] = useSaveFavorite();

  const refInput = useRef(null);


  const handleSubmit = (e) => {
    const taskText = refInput.current.value;
    const taskObject = {
      id: taskText,
      text: taskText,
      completed: false,
      favorite: false,
    };
    const arrTask = task.concat([taskObject]);
    setTask(arrTask);
    e.preventDefault();
  };

  const handleClickComplete = (e, objTask) => {
    const checked = e.target.checked
    const id = e.target.dataset.taskid
    const index = task.findIndex(task => task.id === id)
    const findTask = task.find(task => task.id === id)
    const objIsComplete = checked ? {...findTask, completed: true} : {...findTask, completed: false};
    const copyTaskArr = [...task]
    copyTaskArr.splice(index, 1, objIsComplete)
    console.log(copyTaskArr)
    setTask(copyTaskArr)
  }

  const handleClickFavorite = (e, objTask) => {
    const favoriteArr = favorite.concat([objTask])
    console.log(favoriteArr);
    setFavorite(favoriteArr)
  };

  const handleClickDelete = (e) => {
    // console.log(e);
  };

  const handleClickSave = (e, edit, ref, editTask) => {
    edit = false;
    const input = ref.current;
    const id = e.target.dataset.taskid
    input.readOnly
      ? input.removeAttribute("readonly")
      : (input.readOnly = true);
    const index = task.findIndex(task => task.id === id)
    const findTask = task.find(task => task.id === id)
    const objTaskEdit = { ...findTask, text: editTask };
    const copyTaskArr = [...task]
    copyTaskArr.splice(index, 1, objTaskEdit)
    // const newArrTask = task.filter(task => task.id === id
    // setTask(copyTaskArr)
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
            <Todo
              taskList={task}
              handleClickFavorite={handleClickFavorite}
              handleClickDelete={handleClickDelete}
              handleClickSave={handleClickSave}
              handleClickComplete={handleClickComplete}
            />
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
