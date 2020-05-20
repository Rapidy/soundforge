import React, { Component } from 'react';
import PropTypes from "prop-types";
import API from "../../utils/API";

import topSong from '../../img/top-song.jpg';

import Preloader from '../Preloader';

class Content extends Component {
  state = {
    isLoading: true,
    songs: null
  };

  gridData(arr) {
    return arr.map( (item, key) => {
      return (
        <div key={key} className="content-list__item">
          <img src={item.cover} alt={item.title}/>
        </div>
      );
    })
  }

  async componentDidMount() {
    let songs = await API.get('/posts/music');
        songs = songs.data;
    this.setState({
      isLoading: false,
      songs: songs
    });
  }

  render() {
    const { isLoading, songs } = this.state;

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
          { isLoading ? <Preloader /> : this.gridData(songs) }
        </section>

      </section>
    );
  }

}

Content.propTypes = {
  songs: PropTypes.string
};

export default Content;




// import contentService from '../../services/contentService';