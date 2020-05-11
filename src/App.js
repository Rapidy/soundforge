import React from 'react';
import './sass/App.sass';

import Header from './Components/Header';
import LeftSideBar from './Components/LeftSideBar';
import RightSideBar from './Components/RightSideBar';
import Player from './Components/Player';

function App() {
  return (
    <div className="App">
      
      <Header lastSearch='Roddy Ricch - The Box'/>

      <main className="window">

        <LeftSideBar />

        <section className="content">
			
          <header className="content-header">

            <div className="content-header__photo">
              <img src="img/top-song.jpg" alt="" />
            </div>

            <div className="content-header__text">
              <h2>Топ этой недели</h2>
              <h3>Clean Bandit</h3>	
            </div>

          </header>

          <section className="content-list">
          
            

          </section>		

        </section>

        <RightSideBar />

        <Player />

      </main>   
      
    </div>
  );
}

export default App;
