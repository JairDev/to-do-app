import React from "react";
import Task from "../Task/Task";

const Favorite = ({ favoriteArr, handleClickDelete }) => {
  // console.log(favoriteArr);
  // if(!favoriteArr.length) return <div className="no-favorite">Sin favoritos</div>
  
  return (
    <section className="App-favorite-section">
      {favoriteArr.map((task) => ( 
        <Task
          key={task.text}
          objTask={task}
          // handleClickFavorite={handleClickFavorite}
          handleClickDelete={handleClickDelete}
          // handleClickSave={handleClickSave}
          // handleClickComplete={handleClickComplete}
        />
      ))}
    </section>
  );
};

export default Favorite;
