import React, { Component } from 'react';
// import contentService from '../../services/contentService';

import topSong from '../../img/top-song.jpg';

import API from "../../utils/API";
import PropTypes from "prop-types";

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      songs: null
    };
  }

  gridData(arr) {
    return arr.map( (item, key) => {
      return (
        <div key={key} className="content-list__item">
          <img src={item.cover} alt={item.title}/>
        </div>
      )
    })
  }

  render() {
    const { isLoading, songs } = this.state;

    const loadingMessage = <span>Loading...</span>;

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
          {isLoading ? loadingMessage : this.gridData(songs)}
        </section>

      </section>
    );
  }

  async componentDidMount() {
    let songs = await API.get('/posts/music');
        songs = songs.data;
    this.setState({
      ...this.state, ...{
        isLoading: false,
        songs
      }
    });
  }

}

Content.propTypes = {
  songs: PropTypes.string
};

export default Content;
