import React from 'react'

const ProfileHeaderInfo = (props) => {
  return (
    <div className="profile-header__info">
            
      <h2 className="h2">{props.name}</h2>
      <h2 className="h2">{props.genre} исполнитель</h2>           
      <h2 className="h2">Возраст: {props.age} лет</h2>

      <h3 className="h3">
        Дата регистрации: 
        <span>{props.registrDate}</span>
      </h3>

  </div>
  )
}

export default ProfileHeaderInfo