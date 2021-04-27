import React, { useRef } from "react";
import "./FilterDate.css";

const FilterDate = ({ favoriteArr, handleFilterDate, getDate }) => {
  const refValueInit = useRef(null)
  const refValueEnd = useRef(null)
  
  // const getDate = (e) => {
  //   const valueInit = refValueInit.current.value
  //   const valueEnd = refValueEnd.current.value

  //   console.log(valueInit, valueEnd)
  // }
  return (
    <div className="App-content-filter-date">
      <form >
        <label htmlFor="filter-check">Buscar por fecha</label>
        <span className="span-date-range-desde">Desde:</span>
        <span className="span-date">yy/mm/dd</span>
        <input ref={refValueInit} placeholder="Eg 2021/04/10" id="filter-check-date" type="text" />
      </form>
      <form >
        <span className="span-date-range-hasta">Hasta:</span>
        <span className="span-date">yy/mm/dd</span>
        <input ref={refValueEnd} placeholder="Eg 2021/04/20" id="filter-check-date" type="text" />
      </form>
      <span onClick={(e) => handleFilterDate(e, refValueInit.current, refValueEnd.current)}>Buscar</span>
    </div>
  );
};

export default FilterDate;
