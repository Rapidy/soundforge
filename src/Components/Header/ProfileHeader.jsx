import React from 'react';
import { NavLink } from 'react-router-dom';

import avatar from './../../img/avatar.png';

const ProfileHeader = (props) => {
  return (

    <div className="header-container__profile">

      <div className="header-container__profile_avatar">
        <NavLink to="/profile">
          <img src={avatar} alt="Аватар профиля" />
        </NavLink>
      </div>

      <div className="header-container__profile-text">

        <h2 className="h2">{props.name}</h2>
        <h3 className="h3">{props.days}</h3>

      </div>       

    </div>

  )
}

export default ProfileHeader;