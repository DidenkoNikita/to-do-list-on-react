import React from 'react';
import Logo from '../Header/Logo';
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import css from './LoginHeader.module.css'

const LoginHeader = () => {
  return (
    <div>
      <div className={css.header}>
        <Logo />
      </div>
      <RegistrationForm />
    </div>
  );
}

export default LoginHeader;