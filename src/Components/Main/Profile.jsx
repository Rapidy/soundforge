import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'

import bgImage from '../../img/top-song.jpg'

import ProfileHeaderInfo from './Profile/ProfileHeaderInfo'
import ProfileTracks from './Profile/ProfileTracks'
import ProfileAlbums from './Profile/ProfileAlbums'
import ProfileInfo from './Profile/ProfileInfo'

class Profile extends Component {

  render() {
    return (
      <section className="profile section">
        
        <div className="profile-header">

          <div className="profile-header-wrapper" style={{ backgroundImage: `url( ${bgImage} )` }}></div>

          <div className="profile-header__avatar">
            <img src="https://i.pinimg.com/originals/06/12/7d/06127dc4c4ca9241603a7c4dbe1464fd.jpg" alt=""/>
          </div>

          <ProfileHeaderInfo name="Андрей Какашкин" age="20" genre="Рэп" registrDate=" 17.05.2020" />

        </div>

        <section className="profile-content">
          
          <nav className="profile-content-nav">
            <NavLink to="/profile/tracks" className="profile-content-tabs__item">Треки</NavLink>
            <NavLink to="/profile/albums" className="profile-content-tabs__item">Альбомы</NavLink>
            <NavLink to="/profile/info" className="profile-content-tabs__item">Информация</NavLink>
          </nav>

          <div className="profile-content-container">

            <Route exact path="/profile/tracks" component={ProfileTracks} />
            <Route exact path="/profile/albums" component={ProfileAlbums} />
            <Route exact path="/profile/info" component={ProfileInfo} />

          </div>

        </section>

      </section>
    );
  }
}

export default Profile;