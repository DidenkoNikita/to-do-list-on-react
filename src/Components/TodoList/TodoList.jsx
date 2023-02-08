import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addBoard } from "../../store/store";
import BoardAddArea from "../BoardAddArea/BoardAddArea";
import Button from "../Button/Button";
import FilterTasks from "../FilterTasks/FilterTasks";
import ModalTaskCreationWindow from "../ModalTaskCreationWindow/ModalTaskCreationWindow";

import css from './TodoList.module.css';

const TodoList = () => {
  let boards = useSelector(state => state.boards);

  const [ search, setSearch ] = useState('');

  const [query, setQuery ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    setQuery(form.search.value)
  }

let filter = boards.filter( (board) => {
  return board.title.toLowerCase().includes(query.toLocaleLowerCase())
})

  console.log('query',query)
  return (
    <div className={css.region}>
      <Button onClick={() => {addBoard()}}/>
      <FilterTasks search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
      <BoardAddArea filter={filter} />
      <ModalTaskCreationWindow />
    </div>
  );
}

export default TodoList;