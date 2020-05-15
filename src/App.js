import React from 'react';
import './sass/App.sass';

import Header from './Components/Header';
import LeftSideBar from './Components/LeftSideBar';
import Content from './Components/Content';
import RightSideBar from './Components/RightSideBar';
import Player from './Components/Player';

import topSong from './img/top-song.jpg'

function App() {

  return (
    
    <div className="App">
      
      <Header lastSearch='Trippie Redd - Take a walk'/>

      <main className="window">

        <LeftSideBar />

        <section className="content">
			
          <header className="content-header">

            <img className="content-header__photo" src={topSong} alt="" />

            <div className="content-header__text">
              <h2 className="h2">Топ этой недели</h2>
              <h3 className="h3">Clean Bandit</h3>	
            </div>

          </header>

          <Content />	

        </section>

        <RightSideBar />

        <Player />

      </main>   
      
    </div>
  );
}

export default App;
