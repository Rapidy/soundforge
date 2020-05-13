import React, { Component } from 'react';
import contentService from '../services/contentService'

export default class Content extends Component {
  contentService = new contentService();

  state = {
    songs: [],
    error: false
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
    })
  }

  onError = (error) => {
    this.setState({
      error: true
    })
  }

  render() {
    return (

      <div class="content-list__item">
        <img />
      </div>

    )
  }
}
