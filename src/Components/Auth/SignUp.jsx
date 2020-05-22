import React from 'react'
import { NavLink } from 'react-router-dom'

import icon from '../../img/man2.png';

export default function SignUp() {
  return (
    <div className="signup">

      <div className="signup-container">

        <div className="signup-container__icon">
          <img src={icon} alt="Иконка человека"/>
        </div>

        <div className="signup-container__input">
          <input type="text" placeholder="Придумайте имя" required/>
        </div>

        <div className="signup-container__input">
          <input type="email" placeholder="Введите почту" required/>
        </div>

        <div className="signup-container__input">
          <input type="password" placeholder="Придумайте пароль" required/>
        </div>

        <div className="signup-container__input">
          <input type="password" placeholder="Повторите пароль" required/>
        </div>

        <button className="signup-container__btn">Создать аккаунт</button>

        <NavLink to="/login">Есть аккаунт? Войти</NavLink>

      </div>

    </div>
  )
}
