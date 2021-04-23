import React from "react";
import "./FilterDate.css"
const FilterDate = ({ favoriteArr, handleFilterDate }) => {

  return (
    <div className="App-content-filter-date">
      <form onSubmit={(e) => handleFilterDate(e)}>
        <label htmlFor="filter-check">Buscar por Día</label>
        <input  placeholder="Ingresa un día"  id="filter-check-date" type="text"/>
      </form>
    </div>
  )
};

export default  FilterDate;