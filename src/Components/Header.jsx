import React from 'react';
import { NavLink } from 'react-router-dom'

import ProfileHeader from './Header/ProfileHeader'

const Header = (props) => {
  return (

    <header className="header">

      <h1 className="header__logo"><NavLink to="/">Sound<span>Forge</span></NavLink></h1>
      
      <div className="header-container">

        <ProfileHeader name='Артем Вернигоров' days='300 дней'/>

        <div className="header-container__search">
          
          <input type="text" placeholder={props.lastSearch} required />

          <button><i className="fas fa-search"></i></button>

        </div>

      </div>

      <div className="offset-side"></div>

    </header>
  
  )
}

export default Header;