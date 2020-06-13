import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import API from "../utils/API";

import Header from './Header';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import Player from './Player';

import Profile from './Main/Profile';
import Content from './Main/Content';
import TopSongs from './Main/TopSongs'
import Recommend from './Main/Recommend'
import NewSongs from './Main/NewSongs'
import FavoriteSongs from './Main/FavoriteSongs'
import RandomSong from './Main/RandomSong'

class Home extends Component {   
  constructor(props) {
    super(props);

    this.state = {
      playlist: null,
      curentSong: null
    };

  } 

  ContentPlaylistSongs = (songs) => {        
    API.post('/songs/playlist', songs)
    .then( res => {
      this.setState({playlist: res.data});    
    }).catch(error => {
      console.log(`😱 Axios request failed: ${error}`);
   });  
  }

  RightSideBarMusicList = () => {   
    let playlist = this.state.playlist;
    if(playlist) { 
      return playlist.map(song => { 
        return(
        <li className="playlists-list-category__item" key={song.id} onClick={ this.onCurentSong.bind(this, song.id) }>
          {song.title}
        </li>
        ); 
      });
    }
  }
  
  onCurentSong = (id) => {
    this.setState({ curentSong: id });
  }

  playerSongs = () => {
   let playlist = this.state.playlist;
   return playlist;
  }

  playerCurentSong = () => {
    let curentSong = this.state.curentSong;
    return curentSong;
  }


    render(){    
      return (
        <BrowserRouter>

          <Header lastSearch='Trippie Redd - Take a walk'/>

          <main className="window">

            <LeftSideBar />

              <Route exact path="/"  render={(props)=><Content PlaylistSongs = { this.ContentPlaylistSongs } {...props}/>} />	
              <Route path="/profile" component={Profile}/>	
              <Route path="/top-tracks" component={TopSongs}/>
              <Route path="/recommendations" component={Recommend}/>
              <Route path="/new-songs" component={NewSongs}/>
              <Route path="/favorite" component={FavoriteSongs}/>
              <Route path="/random-track" component={RandomSong}/>

            <RightSideBar musicList={this.RightSideBarMusicList} /> 

            {/* {this.state.playlist && this.state.curentSong ? <Player playerSongs = {this.playerSongs} curentSong = {this.playerCurentSong}/> : null } */}
            {this.state.playlist ? <Player musicList={this.RightSideBarMusicList} playerCurentSong = {this.playerCurentSong} playerSongs = {this.playerSongs} /> : null}

            {console.log(this.state.playlist, 'playlist-home')}
            {console.log(this.state.curentSong, 'curentSong-home')}

          </main>

        </BrowserRouter>
      );
    }  
}

export default Home;

