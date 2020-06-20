import React, { Component } from 'react';
import Preloader from '../Preloader';

class RandomSong extends Component {
  render() {
    const { isLoading, Songs } = this.props;
    return (
      <section className="content section">
        <section className="content-list">
        { isLoading ? <Preloader /> : this.props.SongsOutput(Songs) }
        </section>
      </section>
    );
  }
}

export default RandomSong;