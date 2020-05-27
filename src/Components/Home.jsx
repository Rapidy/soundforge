import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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

function Home() {    
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default Home;
