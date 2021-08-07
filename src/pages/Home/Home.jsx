import React, { useEffect, useRef, useState } from "react";
// import FilterDate from "../../components/FilterDate/FilterDate";
// import FilterTask from "../../components/FilterTask/FilterTask";
import Todo from "../../components/Todo/Todo";
import "./Home.css";
import iconNight from "../../assets/img/icon-moon.svg";
import iconDay from "../../assets/img/icon-sun.svg";

function changeMode(mode) {
  const app = document.querySelector(".App");
  const iconThemeMode = document.querySelector(".icon-mode img");
  const input = document.querySelector(".content-input-user-task");
  const task = document.querySelector(".App-todo-list");
  const action = document.querySelector(".App-content-actions");
  if (mode) {
    iconThemeMode.setAttribute("src", iconNight)
    app.classList.remove("light");
    input.classList.remove("light");
    task.classList.remove("light");
    action.classList.remove("light");
  } else {
    iconThemeMode.setAttribute("src", iconDay)
    app.classList.add("light");
    input.classList.add("light");
    task.classList.add("light");
    action.classList.add("light");
  }
}

const Home = ({
  task,
  handleFilterTask,
  handleFilterDate,
  handleClickFavorite,
  handleClickDelete,
  handleClickSave,
  handleClickComplete,
  handleClickEdit,
  handleSelectAllTask,
  handleSelectCompletedTask,
  handleSelectAll,
  handleDeleteSelect,
  handleSelectActiveTask,
  handleSubmit,
  handleDragStart,
  handleDrop
}) => {
  const refInput = useRef(null);
  let dark = true;
  const handleMode = (e) => {
    dark = !dark;
    changeMode(dark);
  };
  return (
    <>
      <section className="App-content-all-todolist">
        {/* <aside className="App-aside">
          <span>Filtrar por:</span>
          <FilterTask handleFilterTask={handleFilterTask} />
          <FilterDate handleFilterDate={handleFilterDate} />
        </aside> */}

        <div className="App-content-title-app">
          <div className="title-app">
            <h1>TODO</h1>
          </div>

          <div onClick={handleMode} className="icon-mode">
            <img src={iconNight} alt=""></img>
          </div>
        </div>
        <main className="App-main">
          <section className="App-todo">
            <div className="content-input-user-task">
              <form
                className="form-user-input"
                onSubmit={(e) => handleSubmit(e, refInput)}
              >
                {/* <label htmlFor="todo-text">Añade una tarea</label> */}
                <input
                  id="todo-text"
                  type="text"
                  placeholder="Añade una tarea"
                  name="todo-text"
                  ref={refInput}
                />
              </form>
            </div>
            <Todo
              taskList={task}
              handleClickFavorite={handleClickFavorite}
              handleClickDelete={handleClickDelete}
              handleClickSave={handleClickSave}
              handleClickComplete={handleClickComplete}
              handleClickEdit={handleClickEdit}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
            />
          </section>

          <div className="App-content-actions">
            <span>{task.length} items left</span>
            <div className="App-select-state-task">
              <span
                onClick={handleSelectAllTask}
                className="App-handle-select favorite"
              >
                All
              </span>
              <span
                onClick={handleSelectActiveTask}
                className="App-handle-select completed"
              >
                Active
              </span>
              <span
                onClick={handleSelectCompletedTask}
                className="App-handle-select no-completed"
              >
                Completed
              </span>
            </div>
            <span
              onClick={handleDeleteSelect}
              className="App-handle-select select-all"
            >
              Delete Selected
            </span>

            {/* <div className="App-select-delete-all">
              <span
                onClick={handleDeleteSelect}
                className="App-handle-select select-all"
              >
                Clear Completed
              </span>
            </div> */}
            {/* <span
              onClick={handleSelectAll}
              className="App-handle-select select-all"
            >
              Seleccionar todos
            </span> */}
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
