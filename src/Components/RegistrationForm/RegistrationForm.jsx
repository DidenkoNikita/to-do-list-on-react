import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profileUser, signUpUser } from "../../store/asyncActions/todos";

import css from './RegistrationForm.module.css'

const RegistrationForm = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
   return (
    <div className={css.form}>
      <input 
        type='text' 
        onChange={e => setLogin(e.target.value)}
        className={css.input}
      >
      </input>
      <input 
        type='password' 
        onChange={e => setPassword(e.target.value)}
        className={css.input}
      >
      </input>
      <button 
        onClick={profileUser(login, password)}
        className={css.button}
        >
          <Link to='/home'>Войти</Link>
      </button>
      <button
        onClick={signUpUser(login, password)}
      >
        <Link to='/home'>Регистрация</Link>
      </button>
    </div>
  );
}

export default RegistrationForm;