import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorite from "./components/Favorite/Favorite";
import { useSaveData } from "./hooks/useSaveData/useSaveData";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  const [task, setTask] = useSaveData("task");
  const [allTask, setAllTask] = useSaveData("alltask");
  const [favorite, setFavorite] = useSaveData("favorite");

  const handleSubmit = (e, refInput) => {
    const date = new Date();
    const taskText = refInput.current.value;
    const taskObject = {
      id: taskText,
      text: taskText,
      completed: false,
      favorite: false,
      selected: false,
      edit: false,
      dateFormat: date.toLocaleString(),
      taskCreate: date.toISOString(),
    };
    const arrTask = task.concat([taskObject]);
    setAllTask(arrTask);
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

    const pushFavorite = isFavorite.filter((task) =>
      task.favorite ? task : null
    );
    console.log(isFavorite);
    console.log(pushFavorite);

    setTask(isFavorite);
    setFavorite(pushFavorite);
    setAllTask(isFavorite);
  };

  const handleClickDelete = (e) => {
    const id = e.currentTarget.dataset.taskid;
    const newArr = task.filter((task) => task.id !== id);
    const newArrFavorite = favorite.filter((task) => task.id !== id);
    setTask(newArr);
    setFavorite(newArrFavorite);
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
    const errorSpan = document.querySelector(".handle-error-empty-favorite");
    const filterFavorite = task.filter((task) => (task.favorite ? task : null));
    if (!filterFavorite.length) {
      errorSpan.classList.add("display-error-favorite");
      e.target.checked = false
      setTimeout(() => {
        errorSpan.classList.remove("display-error-favorite");
      }, 500);
      return;
    }
    e.target.checked ? setTask(filterFavorite) : setTask(allTask);
  };

  const handleFilterDate = (e, init, end) => {
    const initD = new Date(init.value);
    const finalD = new Date(end.value);
    const filterDate = task.filter((task) => {
      const dateCreate = task.taskCreate;
      const date = new Date(dateCreate);
      if (date >= initD && date <= finalD) return task;
    });
    e.preventDefault();
  };

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
            <Favorite
              favoriteArr={favorite}
              handleClickDelete={handleClickDelete}
            />
          </Route>
          <Route path="/">
            <Home
              task={task}
              handleFilterTask={handleFilterTask}
              handleFilterDate={handleFilterDate}
              handleClickFavorite={handleClickFavorite}
              handleClickDelete={handleClickDelete}
              handleClickSave={handleClickSave}
              handleClickComplete={handleClickComplete}
              handleClickEdit={handleClickEdit}
              handleSelectFavorites={handleSelectFavorites}
              handleSelectCompleted={handleSelectCompleted}
              handleSelectAll={handleSelectAll}
              handleDeleteSelect={handleDeleteSelect}
              handleSelectNotCompleted={handleSelectNotCompleted}
              handleSubmit={handleSubmit}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
