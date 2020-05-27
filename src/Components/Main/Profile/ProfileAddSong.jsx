import React, { Component } from 'react';

import noPhoto from '../../../img/no-photo.jpg'

class ProfileAddSong extends Component {
  render() {
    return (
      <div className="addsong-container">

        <div className="addsong-container__avatar">
          <img src={noPhoto} alt="Пустая обложка песни"/>
          <input type="file" id="uploadSongAvatar"/>
          <label htmlFor="uploadSongAvatar">Загрузить фото</label>
        </div>

        <div className="addsong-container__input">
          <input type="text" placeholder=""/>
        </div>

      </div>
    );
  }
}

export default ProfileAddSong;