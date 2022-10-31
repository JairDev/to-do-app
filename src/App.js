import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorite from "./components/Favorite/Favorite";
import { useSaveData } from "./hooks/useSaveData/useSaveData";
import Home from "./pages/Home/Home";
import "./App.css";
import image from "./assets/img/bg-desktop-dark.jpg";
import { useEffect, useState } from "react";
import { themeContext } from "./context/themeContext";

function App() {
  const [favorite, setFavorite] = useSaveData("favorite");
  const [task, setTask] = useSaveData("task");
  const [orderTask, setOrderTask] = useState(1);
  const [dragId, setDragId] = useState();
  const [theme, setTheme] = useState({
    themeColorLight: "hsl(0, 0%, 98%)",
    themeColorDark: "hsl(235, 24%, 19%)",
    light: false,
  });

  useEffect(() => {
    const lastElement = task[task.length - 1];
    if (lastElement) setOrderTask(lastElement.order + 1);
  }, [task]);

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
      order: orderTask,
    };
    const arrTask = task.concat([taskObject]);
    setTask(arrTask);
    setOrderTask((prev) => (prev += 1));
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
    setTask(isFavorite);
    setFavorite(pushFavorite);
  };

  const handleClickDelete = (e) => {
    const id = e.currentTarget.dataset.taskid;
    const newArr = task.filter((task) => task.id !== id);
    const newArrFavorite = favorite.filter((task) => task.id !== id);
    setTask(newArr);
    setFavorite(newArrFavorite);
  };

  ///select task///

  const handleSelectAllTask = () => {
    const isSelected = task.map((task) => ({
      ...task,
      selected: !task.selected,
    }));
    console.log(isSelected);
    setTask(isSelected);
  };

  const handleSelectActiveTask = () => {
    const isSelected = task.map((task) =>
      !task.completed ? { ...task, selected: !task.selected } : task
    );
    setTask(isSelected);
  };

  const handleSelectCompletedTask = () => {
    const isSelected = task.map((task) =>
      task.completed ? { ...task, selected: !task.selected } : task
    );
    console.log(isSelected);
    setTask(isSelected);
  };

  const handleDeleteSelect = () => {
    const selectedFilter = task.filter((task) => !task.selected);
    setTask(selectedFilter);
  };

  //drag
  const handleDragStart = (e) => {
    e.target.style.opacity = "0.3";
    setDragId(e.currentTarget.id);
  };

  const handleDrop = (e) => {
    const dragItem = task.find((task) => task.text === dragId);
    const dropItem = task.find((task) => task.text === e.currentTarget.id);

    const dragItemOrder = dragItem.order;
    const dropItemOrder = dropItem.order;

    const newTaskState = task.map((task) => {
      if (task.id === dragId) {
        task.order = dropItemOrder;
      }

      if (task.id === e.currentTarget.id) {
        task.order = dragItemOrder;
      }
      return task;
    });
    setTask(newTaskState);
  };

  const handleDragEnd = (e) => {
    console.log(e.target);
    e.target.style.opacity = "1";
  };

  // end drag /////////////////////////////////

  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundColor: theme.light
            ? theme.themeColorLight
            : theme.themeColorDark,
        }}
      >
        <div className="App-content-image-hero">
          <img src={image} alt=""></img>
        </div>
        <header className="App-header">
          <nav className="App-nav">
            <ul>
              <li className="item-link">
                <Link to="/">Inicio</Link>
              </li>
              <li className="item-link">
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
            <themeContext.Provider value={{ theme, setTheme }}>
              <Home
                task={task}
                handleSubmit={handleSubmit}
                handleClickFavorite={handleClickFavorite}
                handleClickDelete={handleClickDelete}
                handleClickComplete={handleClickComplete}
                handleSelectAllTask={handleSelectAllTask}
                handleSelectCompletedTask={handleSelectCompletedTask}
                handleSelectActiveTask={handleSelectActiveTask}
                handleDeleteSelect={handleDeleteSelect}
                handleDragStart={handleDragStart}
                handleDrop={handleDrop}
                handleDragEnd={handleDragEnd}
              />
            </themeContext.Provider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
