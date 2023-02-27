import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';

import Header from './Components/Header/Header';
import LoginHeader from './Components/LoginHeader/LoginHeader';
import OurProjects from './Components/OurProjects/OurProjects';
// import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import TodoList from './Components/TodoList/TodoList';
import { addManyBoards } from './store/store';


const App = () => {  
  useEffect(() => {addManyBoards()}, [])
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
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
  } else {
    return <LoginHeader />
  }
}

export default App;
