import React, { Component } from 'react';
import contentService from './../../services/contentService'

import bgImage from '../../img/top-song.jpg'

class Profile extends Component {
  contentService = new contentService();

  state = {
    profile: [],
    error: false,
  }

  render() {
    return (
      <section className="profile section">
        
        <div className="profile-header">

          <div className="profile-header-wrapper" style={{ backgroundImage: `url( ${bgImage} )` }}></div>

          <div className="profile-header__avatar">
            <img src="https://i.pinimg.com/originals/06/12/7d/06127dc4c4ca9241603a7c4dbe1464fd.jpg" alt=""/>
          </div>

          <div className="profile-header__info">
            
              <h2 className="h2">Андрей Какашкин</h2>
              <h2 className="h2">Рэп исполнитель</h2>           
              <h2 className="h2">Возраст: 20 лет</h2>

              <h3 className="h3">
                Дата регистрации: 
                <span> 17.05.2020</span>
              </h3>

          </div>

        </div>

        <section className="profile-content">
          
          <nav className="profile-content-tabs">
            <li className="active">Таб 1</li>
            <li>Таб 2</li>
            <li>Таб 3</li>
          </nav>

          <div className="profile-content-tabcontainer">

            <div className="profile-content-tabcontainer__item">
              fff
            </div>

          </div>

        </section>

      </section>
    );
  }
}

export default Profile;