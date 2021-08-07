import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorite from "./components/Favorite/Favorite";
import { useSaveData } from "./hooks/useSaveData/useSaveData";
import Home from "./pages/Home/Home";
import "./App.css";
import image from "./assets/img/bg-desktop-dark.jpg";
import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useSaveData("task");
  const [orderTask, setOrderTask] = useState(1)
  // const [allTask, setAllTask] = useSaveData("alltask");
  const [favorite, setFavorite] = useSaveData("favorite");
  const [dragId, setDragId] = useState()

  useEffect(() => {
    const lastElement = task[task.length - 1]
    if(lastElement) setOrderTask(lastElement.order + 1)
  }, [task])

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
      order: orderTask

    };
    const arrTask = task.concat([taskObject]);
    // setAllTask(arrTask);
    setTask(arrTask);
    setOrderTask(prev => prev += 1)
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
    console.log(pushFavorite)
    console.log(favorite)
    setTask(isFavorite);
    setFavorite(pushFavorite);
    // setAllTask(isFavorite);
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
    console.log(isSelected);
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
    setDragId(e.currentTarget.id)
  }

  const handleDrop = (e) => {
    const dragItem = task.find(task => task.text === dragId)
    const dropItem = task.find(task => task.text === e.currentTarget.id)
    
    const dragItemOrder = dragItem.order
    const dropItemOrder = dropItem.order
    
    const newTaskState = task.map(task => {
      if(task.id === dragId) {
        task.order = dropItemOrder
      }

      if(task.id === e.currentTarget.id) {
        task.order = dragItemOrder
      }
      return task
    })
    // e.stopPropagation()
    setTask(newTaskState)
  }

  // const handleSelectAll = (e) => {
  //   const nodeTask = document.querySelectorAll(".App-task");
  //   Array.from(nodeTask).map((task) => (task.style = "border: 2px solid red"));
  //   const isAllSelected = task.map((task) => ({
  //     ...task,
  //     selected: !task.selected,
  //   }));
  //   console.log(isAllSelected);
  //   setTask(isAllSelected);
  // };

  // const handleClickEdit = (e, objTask, editTask) => {
  //   const input = document.getElementById("input-task-edit");
  //   input.removeAttribute("readonly");
  //   const isEdit = task.map((task) =>
  //     task.id === objTask.id ? { ...task, edit: !task.edit } : task
  //   );
  //   setTask(isEdit);
  //   e.preventDefault();
  // };

  // const handleClickSave = (e, editTask, objTask) => {
  //   const editCompleted = task.map((task) =>
  //     task.id === objTask.id && task.edit
  //       ? { ...task, text: editTask, edit: !task.edit }
  //       : task
  //   );
  //   setTask(editCompleted);
  //   e.preventDefault();
  // };

  // const handleFilterTask = (e) => {
  //   const errorSpan = document.querySelector(".handle-error-empty-favorite");
  //   const filterFavorite = task.filter((task) => (task.favorite ? task : null));
  //   if (!filterFavorite.length) {
  //     errorSpan.classList.add("display-error-favorite");
  //     e.target.checked = false;
  //     setTimeout(() => {
  //       errorSpan.classList.remove("display-e|rror-favorite");
  //     }, 500);
  //     return;
  //   }
  //   e.target.checked ? setTask(filterFavorite) : setTask(allTask);
  // };

  // const handleFilterDate = (e, init, end) => {
  //   const initD = new Date(init.value);
  //   const finalD = new Date(end.value);
  //   const filterDate = task.filter((task) => {
  //     const dateCreate = task.taskCreate;
  //     const date = new Date(dateCreate);
  //     if (date >= initD && date <= finalD) return task;
  //   });
  //   e.preventDefault();
  // };

  return (
    <Router>
      <div className="App">
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
            <Home
              task={task}
              handleClickFavorite={handleClickFavorite}
              handleClickDelete={handleClickDelete}
              handleClickComplete={handleClickComplete}
              handleSelectAllTask={handleSelectAllTask}
              handleSelectCompletedTask={handleSelectCompletedTask}
              handleSelectActiveTask={handleSelectActiveTask}
              // handleFilterTask={handleFilterTask}
              // handleFilterDate={handleFilterDate}
              // handleClickSave={handleClickSave}
              // handleClickEdit={handleClickEdit}
              // handleSelectAll={handleSelectAll}
              handleDeleteSelect={handleDeleteSelect}
              handleSubmit={handleSubmit}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
