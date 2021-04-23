import React from "react"
import "./FilterTask.css"

const FilterTask = ({handleFilterTask}) => {  
  return (
    <div className="App-content-filter">
      <form>
        <input onChange={handleFilterTask} id="filter-check" type="checkbox"/>
        <label htmlFor="filter-check">Favoritos</label>
      </form>
    </div>
  )
}

export default FilterTask