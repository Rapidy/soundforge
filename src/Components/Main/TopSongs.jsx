import React, { Component } from 'react';
import PropTypes from "prop-types";
import API from "../../utils/API";

import Preloader from '../Preloader';

class TopSongs extends Component {
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

        <section className="content-list">
          { isLoading ? <Preloader /> : this.gridData(songs) }
        </section>

      </section>
    );
  }
}

TopSongs.propTypes = {
  songs: PropTypes.string
};


export default TopSongs;