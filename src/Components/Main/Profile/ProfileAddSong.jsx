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

    const addedSongs = this.uploadedSongs(this.state.songs);
    
    return (
      <div className="addsong-container">

        <div className="addsong-container__avatar">
          <img src={this.state.photo} alt="Пустая обложка песни"/>
          <input type="file" id="uploadSongAvatar" ref={this.uploadedPhoto} onChange={this.updatePhoto}/>
          <label htmlFor="uploadSongAvatar">Загрузить фото</label>
        </div>

        <form className="addsong-container__input">
          <input type="file" multiple onChange={this.uploadSongs}/>
        </form>
        
        {addedSongs}

      </div>
    );
  }

}

export default ProfileAddSong;