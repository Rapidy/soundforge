import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player';
import contentService from '../services/contentService'

export default class Player extends Component {

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
    return (
      <section className="music-player">
        <MusicPlayer playlist={this.state.songs} />
      </section>
    );
  }
}
