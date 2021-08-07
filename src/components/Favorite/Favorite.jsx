import React from "react";
import Task from "../Task/Task";
import "./Favorite.css";

const Favorite = ({ favoriteArr, handleClickDelete }) => {
  console.log(favoriteArr);
  if (!favoriteArr.length)
    return <div className="no-favorite">Sin favoritos</div>;

  return (
    <section className="wrapper-favorite-section">
      <div className="App-favorite-section">
        {favoriteArr
          .filter((task) => task.favorite)
          .map((task) => (
            <Task
              key={task.text}
              objTask={task}
              // handleClickFavorite={handleClickFavorite}
              handleClickDelete={handleClickDelete}
              // handleClickSave={handleClickSave}
              // handleClickComplete={handleClickComplete}
            />
          ))}
      </div>
    </section>
  );
};

export default Favorite;
