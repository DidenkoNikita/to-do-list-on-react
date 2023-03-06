import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import './App.css';
import LoginHeader from './Components/LoginHeader/LoginHeader';
import Profile from './Components/Profile/Profile';

import { addManyBoards } from './store/store';


const App = () => {  
  useEffect(() => {addManyBoards()}, [])
    return (
      <div className='region'>
          <Routes>
            <Route path='/' element={<LoginHeader />} />
            <Route path='/home/*' element={<Profile />} />
          </Routes>
      </div>
    );
}

export default App;
