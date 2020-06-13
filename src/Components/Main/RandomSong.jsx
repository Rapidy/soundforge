import React, { Component } from 'react';
import Preloader from '../Preloader';

class RandomSong extends Component {
  render() {
    const { isLoading, albums } = this.props;
    return (
      <section className="content section">
        <section className="content-list">
        { isLoading ? <Preloader /> : this.props.AlbumOutput(albums) }
        </section>
      </section>
    );
  }
}

export default RandomSong;