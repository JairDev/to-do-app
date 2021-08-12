import React, { useRef } from "react";
import Todo from "../../components/Todo/Todo";
import "./Home.css";
import { changeMode } from "../../utils/changeThemeMode";
import iconNight from "../../assets/img/icon-moon.svg";

const Home = ({
  task,
  handleClickFavorite,
  handleClickDelete,
  handleClickComplete,
  handleSelectAllTask,
  handleSelectCompletedTask,
  handleDeleteSelect,
  handleSelectActiveTask,
  handleSubmit,
  handleDragStart,
  handleDrop,
  handleDragEnd,
}) => {
  const refInput = useRef(null);
  let dark = true;

  const handleMode = () => {
    dark = !dark;
    changeMode(dark);
  };

  return (
    <>
      <section className="App-content-all-todolist">
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
              handleClickComplete={handleClickComplete}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
              handleDragEnd={handleDragEnd}
            />
          </section>

          <div className="App-content-actions">
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

            <div className="App-content-action-delete">
              <span>{task.length} items left</span>
              <span
                onClick={handleDeleteSelect}
                className="App-handle-select select-all"
              >
                Delete Selected
              </span>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
