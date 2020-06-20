import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import ProfileHeader from './Header/ProfileHeader';

class Header extends Component {

  render(){
  return (
    
    <header className="header">

      <h1 className="header__logo"><NavLink to="/">Sound<span>Forge</span></NavLink></h1>
      
      <div className="header-container">

        <ProfileHeader img={this.props.DataUser.photo} name={this.props.DataUser.name} days={'300 дней'}/>

        <div className="header-container__search">
          
          <input type="text" placeholder='Trippie Redd - Take a walk' required />

          <button><i className="fas fa-search"></i></button>

        </div>

      </div>

      <div className="offset-side"></div>

    </header>
  
  )
  }
}

export default Header;