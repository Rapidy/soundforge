import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './sass/App.sass';

import Header from './Components/Header';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import Player from './Components/Player';

import Profile from './Components/Main/Profile';
import Content from './Components/Main/Content';
import TopSongs from './Components/Main/TopSongs'
import Recommend from './Components/Main/Recommend'
import NewSongs from './Components/Main/NewSongs'
import FavoriteSongs from './Components/Main/FavoriteSongs'
import RandomSong from './Components/Main/RandomSong'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        
        <Header lastSearch='Trippie Redd - Take a walk'/>

        <main className="window">

          <LeftSideBar />

          <Route exact path="/" component={Content}/>	

          <Route path="/profile" component={Profile}/>	

          <Route path="/top-tracks" component={TopSongs}/>
          <Route path="/recommendations" component={Recommend}/>
          <Route path="/new-songs" component={NewSongs}/>
          <Route path="/favorite" component={FavoriteSongs}/>
          <Route path="/random-track" component={RandomSong}/>

          <RightSideBar />

          <Player />

        </main>   
        
      </div>
    </BrowserRouter>  
  );
}

export default App;
