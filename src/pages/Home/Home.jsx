import React, { useRef, useState } from "react";
import FilterDate from "../../components/FilterDate/FilterDate";
import FilterTask from "../../components/FilterTask/FilterTask";
import Todo from "../../components/Todo/Todo";
import "./Home.css";

const Home = ({
  task,
  handleFilterTask,
  handleFilterDate,
  handleClickFavorite,
  handleClickDelete,
  handleClickSave,
  handleClickComplete,
  handleClickEdit,
  handleSelectFavorites,
  handleSelectCompleted,
  handleSelectAll,
  handleDeleteSelect,
  handleSelectNotCompleted,
  handleSubmit,
}) => {
  const refInput = useRef(null);

  return (
    <>
      <div className="App-content-title-app">
        <h1>To-do App</h1>
      </div>

      <section className="App-content-all-todolist">
        {/* <aside className="App-aside">
          <span>Filtrar por:</span>
          <FilterTask handleFilterTask={handleFilterTask} />
          <FilterDate handleFilterDate={handleFilterDate} />
        </aside> */}

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
            />
          </section>

          <div className="App-content-actions">
            <span>3 items left</span>
            <div className="App-select-state-task">
              <span
                onClick={handleSelectFavorites}
                className="App-handle-select favorite"
              >
                All
              </span>
              <span
                onClick={handleSelectCompleted}
                className="App-handle-select completed"
              >
                Active
              </span>
              <span
                onClick={handleSelectNotCompleted}
                className="App-handle-select no-completed"
              >
                Completed
              </span>
            </div>
            <span
              onClick={handleDeleteSelect}
              className="App-handle-select select-all"
            >
              Clear Completed
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
