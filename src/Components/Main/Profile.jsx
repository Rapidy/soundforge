import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'

import bgImage from '../../img/bgimage.jpg'

import ProfileHeaderInfo from './Profile/ProfileHeaderInfo'
import ProfileTracks from './Profile/ProfileTracks'
import ProfileAlbums from './Profile/ProfileAlbums'
import ProfileInfo from './Profile/ProfileInfo'
import ProfileAddSong from './Profile/ProfileAddSong'
import ProfileSettings from './Profile/ProfileSettings';

class Profile extends Component {

  render() {
    return (
      <section className="profile section">
        
        <div className="profile-header">

          <div className="profile-header-wrapper" style={{ backgroundImage: `url( ${bgImage} )` }}></div>

          <div className="profile-header__avatar">
            <img src={this.props.DataUser.photo} alt={this.props.DataUser.name}/>
          </div>

          <ProfileHeaderInfo name={this.props.DataUser.name} age={this.props.DataUser.age} genre={this.props.DataUser.genre,'-'} registrDate={this.props.DataUser.created_at} />

        </div>

        <section className="profile-content">
          
          <nav className="profile-content-nav">

            <NavLink to="/profile/tracks">Треки</NavLink>
            <NavLink to="/profile/albums">Альбомы</NavLink>
            <NavLink to="/profile/info">Информация</NavLink>
            <NavLink to="/profile/settings">Настройки</NavLink>
            <NavLink to="/profile/add-song" className="addsong">Добавить песню</NavLink>
            
          </nav>

          <div className="profile-content-container">

            <Route exact path="/profile/tracks" component={ProfileTracks} />
            <Route exact path="/profile/albums" component={ProfileAlbums} />
            <Route exact path="/profile/info" component={ProfileInfo} />
            <Route exact path="/profile/settings" component={ProfileSettings} />
            <Route exact path="/profile/add-song" component={ProfileAddSong} />

          </div>

        </section>

      </section>
    );
  }
}

export default Profile;