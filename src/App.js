import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';

import Header from './Components/Header/Header';
import OurProjects from './Components/OurProjects/OurProjects';
import TodoList from './Components/TodoList/TodoList';
import { addManyBoards } from './store/store';


const App = () => {  
  useEffect(() => {addManyBoards()}, [])

  return (
    <div className='region'>
      <Header />
        <Routes>
          <Route path='/toDoList' element={<TodoList />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/ourProjects' element={<OurProjects />} />
        </Routes> 
    </div>
  );
}

export default App;
