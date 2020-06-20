import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import API from "../utils/API";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

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
import Songs from './Songs'

class Home extends Component {   

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      apiToken: cookies.get('apiToken'),
      DataUser: '', 
      Songs: null,
      playlist: null,
      curentSong: null,
      isLoading: true,
    };
    
  } 

  ContentPlaylistSongs = (songs) => { 
    console.log(songs); 
        
  //   API.post('/songs/playlist', songs)
  //   .then( res => {
  //     this.setState({playlist: res.data});    
  //   }).catch(error => {
  //     console.log(`😱 Axios request failed: ${error}`);
  //  });  
  }
  
  onCurentSong = (id) => {
    this.setState({ curentSong: id });
  }

  playerCurentSong = () => {
    let curentSong = this.state.curentSong;
    return curentSong;
  }

  async componentDidMount() {

    await API.post('user/get', { 'token': this.state.apiToken })
    .then(res => {
      let DataUser = res.data;
      this.setState({ DataUser: DataUser });
    }).catch(error => {console.error(`😱 Axios request failed: ${error}`)}); 

    await API.post('songs/all', { 'token': this.state.apiToken })
    .then(res => {
        this.setState({
          isLoading: false,
          Songs: res.data
        });
        
    }).catch(error => {
      console.log(`😱 Axios request failed: ${error}`);
    });

  }

  SongsOutput = (array) => {
    return array.map( (a) => {
      return(
        <Songs 
          song = {a} 
          UserFavoritesAdd = {this.UserFavoritesAdd} 
          onCurentSong = {this.onCurentSong}
          key = {a.key}
          // onClickLike = {this.LikeSong}
          // isLiked = {a.key === this.state.isLiked}
        />
      );
    });
  }

  UserFavoritesAdd = (id, type) => {
    console.log(id, type);
    
    // API.post('user/favorites/add', { 'token': this.state.apiToken, 'id': id, 'type': type })
    // .then(res => {
    //     console.log(res, 'UserFavoritesAdd');
    // }).catch(error => {
    //   console.error(`😱 Axios request failed: ${error}`)
    // });
  }

  LikeSong = (key) => {
    this.setState({
      isLiked: key
    })
  }

  // UserFavoritesGet = () => {
  //   API.post('user/favorites/get', { 'token': this.state.apiToken })
  //   .then(res => {
  //       this.setState({
  //         isLoading: false,
  //         albums: res.data
  //       });
  //   }).catch(error => {
  //     console.log(`😱 Axios request failed: ${error}`);
  //   });
  // }

  // RightSideBarMusicList(playlist) {   
  //   return playlist.map(song => { 
  //     return(
  //     <li className="playlists-list-category__item" key={song.id}>
  //       {song.name}
  //     </li>
  //     ); 
  //   });
  // }

    render(){
      return (
        <BrowserRouter>
          <Header DataUser={this.state.DataUser} />

          <main className="window">

            <LeftSideBar />
              <Switch>
                <Route exact path="/"  render = {()=><Content isLoading = {this.state.isLoading} Songs = {this.state.Songs} SongsOutput = {this.SongsOutput} />} />	
                <Route path="/profile" render = {()=><Profile DataUser={this.state.DataUser} />} />	
                <Route path="/top-tracks" component={TopSongs} />
                <Route path="/recommendations" component={Recommend} />
                <Route path="/new-songs" component={NewSongs} />
                <Route path="/favorite" component={FavoriteSongs} />
                <Route path="/random-track" render = {() => <RandomSong isLoading = {this.state.isLoading} Songs = {this.state.Songs} SongsOutput = {this.SongsOutput} />} />
              </Switch>
            <RightSideBar musicList={this.RightSideBarMusicList} /> 

           {this.state.Songs ? <Player playlist={this.state.Songs} playerCurentSong = {this.playerCurentSong} onCurentSong = {this.onCurentSong} /> : null }  

          </main>

        </BrowserRouter>
      );
    }  
}

export default withCookies(Home);

