import React from "react";

import css from './FilterTasks.module.css'

const FilterTasks = ({search, setSearch, handleSubmit}) => {

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;

//     const query = form.search.value;

//     const params = {};

//     if(query.length) params.task = query;

//     // setSearchParams(params);
//     console.log('query',query)
// }

// console.log(search)

  return (
    <form autoComplete = "off" onSubmit={handleSubmit} className={css.filter} >
      <input type = 'search' name='search' onChange = { event => setSearch(event.target.value) } value={search} />
      <input type = 'submit' value = 'Search' />
    </form>
  );
}

export default FilterTasks;