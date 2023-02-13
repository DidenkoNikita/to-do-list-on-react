import React from "react";

import css from './FilterTasks.module.css'

const FilterTasks = ({search, setSearch, handleSubmit}) => {
  return (
    <form autoComplete = "off" onSubmit={handleSubmit} className={css.filter} >
      <input type = 'search' name='search' onChange = { event => setSearch(event.target.value) } value={search} />
      <input type = 'submit' value = 'Search' />
    </form>
  );
}

export default FilterTasks;