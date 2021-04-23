import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home, { useSaveFavorite, useSaveTask } from "./pages/Home/Home";
import Favorite from "./components/Favorite/Favorite";
import FilterTask from "./components/FilterTask/FilterTask";
import Todo from "./components/Todo/Todo";
import { useRef, useState } from "react";
import FilterDate from "./components/FilterDate/FilterDate";

export const useSaveTask = () => {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  localStorage.setItem("task", JSON.stringify(task));
  return [task, setTask];
};

export const useSaveFavorite = () => {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );

  localStorage.setItem("favorite", JSON.stringify(favorite));
  return [favorite, setFavorite];
};

export const useSaveAll = () => {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("alltask")) || []
  );

  localStorage.setItem("alltask", JSON.stringify(favorite));
  return [favorite, setFavorite];
};

function App() {
  const [task, setTask] = useSaveTask();
  const [allTask, setAllTask] = useSaveAll();
  const [favorite, setFavorite] = useSaveFavorite();
  const refInput = useRef(null);

  const handleSubmit = (e) => {
    const date = new Date();
    const taskText = refInput.current.value;
    const taskObject = {
      id: taskText,
      text: taskText,
      completed: false,
      favorite: false,
      selected: false,
      edit: false,
      date: date.toLocaleString(),
    };
    const arrTask = task.concat([taskObject]);
    setAllTask(arrTask)
    setTask(arrTask);
    refInput.current.value = "";
    e.preventDefault();
  };

  const handleClickComplete = (e) => {
    const id = e.target.dataset.taskid;
    const objIsComplete = task.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTask(objIsComplete);
  };

  const handleClickFavorite = (e, objTask) => {
    const id = objTask.id;
    const isFavorite = task.map((task) =>
      task.id === id ? { ...task, favorite: !task.favorite } : task
    );

    setTask(isFavorite);
    setFavorite(isFavorite)
    setAllTask(isFavorite)
  };

  const handleClickDelete = (e) => {
    console.log(e)
    const id = e.currentTarget.dataset.taskid;
    const newArr = task.filter((task) => task.id !== id);
    const newArrFavorite = favorite.filter((task) => task.id !== id);
    setTask(newArr);
    setFavorite(newArrFavorite)
  };

  const handleSelectFavorites = (e) => {
    const isSelected = task.map((task) =>
      task.favorite ? { ...task, selected: !task.selected } : task
    );
    
    setTask(isSelected);
  };

  const handleDeleteSelect = (e) => {
    const selectedFilter = task.filter((task) => !task.selected);
    setTask(selectedFilter);
  };

  const handleSelectCompleted = (e) => {
    const isSelected = task.map((task) =>
      task.completed ? { ...task, selected: !task.selected } : task
    );
    console.log(isSelected);
    setTask(isSelected);
  };

  const handleSelectNotCompleted = (e) => {
    const isSelected = task.map((task) =>
      !task.completed ? { ...task, selected: !task.selected } : task
    );
    setTask(isSelected);
  };

  const handleSelectAll = (e) => {
    const nodeTask = document.querySelectorAll(".App-task");
    Array.from(nodeTask).map((task) => (task.style = "border: 2px solid red"));
    const isAllSelected = task.map((task) => ({
      ...task,
      selected: !task.selected,
    }));
    console.log(isAllSelected);
    setTask(isAllSelected);
  };

  const handleClickEdit = (e, objTask, editTask) => {
    const input = document.getElementById("input-task-edit");
    input.removeAttribute("readonly");
    const isEdit = task.map((task) =>
      task.id === objTask.id ? { ...task, edit: !task.edit } : task
    );
    setTask(isEdit);
    e.preventDefault();
  };

  const handleClickSave = (e, editTask, objTask) => {
    const editCompleted = task.map((task) =>
      task.id === objTask.id && task.edit
        ? { ...task, text: editTask, edit: !task.edit }
        : task
    );
    setTask(editCompleted);
    e.preventDefault();
  };

  const handleFilterTask = (e) => {
    console.log(e.target.checked)
    const filterFavorite = task.filter(task => task.favorite ? task : null )    
    // setTask(filterFavorite)
    e.target.checked ? setTask(filterFavorite) : setTask(allTask)
  }

  const handleFilterDate = (e) => {
    const value  = e.target.lastChild.value
    e.preventDefault()
    const filterDate = task.filter(task => {
      const regex = new RegExp(value, "gi");
      return task.date.match(regex)
    })   
    
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="favorites">Mis favoritos</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/favorites">
            <Favorite favoriteArr={favorite} handleClickDelete={handleClickDelete} />
          </Route>
          <Route path="/">
            {/* <Home /> */}
            <div className="App-content-title-app">
              <h1>To-do App</h1>
            </div>

            <section className="App-content-all-todolist">
              <aside className="App-aside">
                <span>Filtrar por:</span>
                <FilterTask handleFilterTask={handleFilterTask} />
                <FilterDate handleFilterDate={handleFilterDate}/>
              </aside>

              <main className="App-main">
                <section className="App-todo">
                  <Todo
                    taskList={task}
                    handleClickFavorite={handleClickFavorite}
                    handleClickDelete={handleClickDelete}
                    handleClickSave={handleClickSave}
                    handleClickComplete={handleClickComplete}
                    handleClickEdit={handleClickEdit}
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
                  <span
                    onClick={handleSelectFavorites}
                    className="App-handle-select favorite"
                  >
                    Favoritos
                  </span>
                  <span
                    onClick={handleSelectCompleted}
                    className="App-handle-select completed"
                  >
                    Completados
                  </span>
                  <span
                    onClick={handleSelectNotCompleted}
                    className="App-handle-select no-completed"
                  >
                    No completados
                  </span>
                </div>

                <div className="App-select-delete-all">
                  <span
                    onClick={handleDeleteSelect}
                    className="App-handle-select select-all"
                  >
                    Eliminar seleccionados
                  </span>
                  <span
                    onClick={handleSelectAll}
                    className="App-handle-select select-all"
                  >
                    Seleccionar todos
                  </span>
                  {/* <span className="App-handle-select delete-all">
                    Borrar todos
                  </span> */}
                </div>
              </main>
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
