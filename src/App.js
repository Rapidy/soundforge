import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './sass/App.sass';

import Header from './Components/Header';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import Player from './Components/Player';

import Profile from './Components/Main/Profile';
import Content from './Components/Main/Content';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        
        <Header lastSearch='Trippie Redd - Take a walk'/>

        <main className="window">

          <LeftSideBar />

          <Route exact path="/" component={Content}/>	

          <Route exact path="/profile" component={Profile}/>	

          <RightSideBar />

          <Player />

        </main>   
        
      </div>
    </BrowserRouter>  
  );
}

export default App;
