import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileHeader = (props) => {
  return (

    <div className="header-container__profile">

      <div className="header-container__profile_avatar">
        <NavLink to="/profile/tracks">
        {/* <img src="https://i.pinimg.com/originals/06/12/7d/06127dc4c4ca9241603a7c4dbe1464fd.jpg" alt="Аватар профиля" /> */}
          <img src={props.img} alt="Аватар профиля" />
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