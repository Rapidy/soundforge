import React, { Component } from 'react';

import noPhoto from '../../../img/no-photo.jpg'

class ProfileAddSong extends Component {

  constructor() {
    super();

    this.uploadedPhoto = React.createRef();

    this.state = {
      photo: noPhoto,
      songs: []
    }
  }

  updatePhoto = () => {
    this.setState({
      photo: this.uploadedPhoto.current.files[0].name
    })
  }

  uploadSongs = (e) => {
    this.setState({
      songs: e.target.files
    })
  }

  uploadedSongs = (songs) => {
    return songs.map(song => {
      return <div>{song.name}</div>
    })
  }

  componentDidUpdate() {
    this.uploadedSongs(this.state.songs);
  }

  render() {
    
    return (
      <div className="addsong-container">

        <div className="addsong-container__avatar">
          <img src={this.state.photo} alt="Пустая обложка песни"/>
          <input type="file" id="uploadSongAvatar" ref={this.uploadedPhoto} onChange={this.updatePhoto}/>
          <label htmlFor="uploadSongAvatar">Загрузить фото</label>
        </div>

        <form className="addsong-container-data">

          <div className="addsong-container-data__info">
            <input type="text" placeholder="Название трека"/>
            <input type="text" placeholder="Введите соучастника"/>
            <input type="text" placeholder="Введите альбом"/>
            <input type="text" placeholder="Выберите жанр"/>
          </div>

          <div className="addsong-container-data__lyrics">
            <textarea cols="35" rows="10" placeholder="Введите текст песни"></textarea>
          </div>

          <div className="addsong-container-data__song">
            <input type="file" id="uploadSong"/>
            <label htmlFor="uploadSong">Загрузить песню</label>
          </div>

        </form>

        <div className="addsong-container-controls">
          <button className="addsong-container-controls__btn" title="Добавить"><i className="fas fa-check"></i></button>
        </div>

      </div>
    );
  }

}

export default ProfileAddSong;