import React, { Component } from 'react';
import contentService from '../../services/contentService';

import topSong from '../../img/top-song.jpg';

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
    return arr.map( (item, key) => {
      return (

        <div key={key} className="content-list__item">
          <img src={item.cover} alt={item.title}/>
        </div>

      )
    })
  }

  renderTopSong(arr) {
    return arr.map( (item, key) => {
      
      // Расчет топ песни недели

    })
  }

  render() {
    const items = this.renderItems(this.state.songs);

    return (

      <section className="content section">
        
        <header className="content-header">

          <img className="content-header__photo" src={topSong} alt="" />

          <div className="content-header__text">
            <h2 className="h2">Топ этой недели</h2>
            <h3 className="h3">{}</h3>	
          </div>

        </header>

        <section className="content-list">
          {items}
        </section>

      </section>
      

    )
  }
}
