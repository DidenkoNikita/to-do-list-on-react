import React from "react";

import { Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Header from "../Header/Header";
import OurProjects from "../OurProjects/OurProjects";
import TodoList from "../TodoList/TodoList";

const Profile = () => {
  return (
    <div>
      <Header />
            <Routes>
              <Route path='/home/toDoList' element={<TodoList />} />
              <Route path='/home/aboutUs' element={<AboutUs />} />
              <Route path='/home/ourProjects' element={<OurProjects />} />
            </Routes> 
    </div>
  );
};

export default Profile;