import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import icon from '../../img/man.png';

export default class LogIn extends Component {
  render() {
    return (
      <div className="signup">

        <div className="signup-container">

          <div className="signup-container__icon">
            <img src={icon} alt="Иконка человека"/>
          </div>

          <div className="signup-container__input">
            <input type="email" placeholder="Введите почту" required/>
          </div>

          <div className="signup-container__input">
            <input type="password" placeholder="Введит пароль" required/>
          </div>

          <button className="signup-container__btn">Войти в аккаунт</button>

          <NavLink to="/signup">Нет аккаунта? Создать</NavLink>

        </div>

    </div>
    )
  }
}
