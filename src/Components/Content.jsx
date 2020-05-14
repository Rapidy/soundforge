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
    });
  }

  onError = (error) => {
    this.setState({
      error: true
    })
  }

  renderItems(arr) {
    return arr.map(item => {
      const {alt, photo, id} = item;

      return (

        <div key={id} className="content-list__item">
          <img src={photo} alt={alt}/>
        </div>

      )
    })
  }

  render() {
    const {error, songs} = this.state;
    const items = this.renderItems(songs);

    return (
      
      <section className="content-list">
        {items}
      </section>

    )
  }
}
