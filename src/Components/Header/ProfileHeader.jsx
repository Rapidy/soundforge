import React from 'react';

import avatar from './../../img/avatar.png';

const ProfileHeader = (props) => {
  return (

    <div className="header-container__profile">

      <div className="header-container__profile_avatar">
        <img src={avatar} alt="Аватар профиля" />
      </div>

      <div className="header-container__profile-text">

        <h2>{props.name}</h2>
        <h3>{props.days}</h3>

      </div>       

    </div>

  )
}

export default ProfileHeader;