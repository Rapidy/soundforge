import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player';
import API from "../utils/API";

 class Player extends Component {

  state = {
    player: null
  };

  async componentDidMount() {
    let player = await API.get('/posts/player');
        player = player.data[0].posts;
    this.setState({
      player: player
    });
  }

  
  render() {
    
    if (this.state.player !== null) {
      return (
        <section className="music-player">
          <MusicPlayer playlist={this.state.player} autoplay={false} />
        </section>
      );
    } else{
      return null;
    }
  }

}

export default Player;
