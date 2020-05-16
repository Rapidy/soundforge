import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player';
import contentService from '../services/contentService'

 class Player extends Component {

  contentService = new contentService();

  state = {
    songs: [],
    error: false,
  }

  componentDidMount() {
    this.updateSongs();
  }

  updateSongs() {
    this.contentService.getAllSongs()
    .then(this.onSongsLoaded)
    .catch(this.onError)
  }

  onSongsLoaded = (songs) => {
    this.setState({
      songs: songs,
      error: false
    });
  }

  onError = (error) => {
    this.setState({
      error: true
    })
  }
  
  render() {
    if (this.state.songs.length !== 0) {
      return (
        <section className="music-player">
          <MusicPlayer playlist={this.state.songs} />
        </section>
      );
    }else{
      return(null);
    }

  }

}

export default Player;
