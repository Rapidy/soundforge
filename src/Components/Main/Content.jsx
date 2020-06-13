import React, { Component } from 'react';
import API from "../../utils/API";

import topSong from '../../img/top-song.jpg';

import Preloader from '../Preloader';

class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      songs: null
    };

  } 


  gridData(array) {
    return array.map( (a) => {
      return(
        <div key={a.id} className="content-list__item" onClick = {this.props.PlaylistSongs.bind(this, a.songs) }>
          <img src={a.photo} alt={a.name}/>
        </div>
      );
    });
  }

  async componentDidMount() {
    let songs = await API.get('/music');
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

export default Content;