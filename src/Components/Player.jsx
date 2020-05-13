import React from 'react';

const Player = () => {
  return (

    <section className="music-player">
      <div className="player">
        <audio preload="auto" src="/audio/audio.mp3">
          <track kind="captions" />
        </audio>
    
        <div className="player__info">
          <div className="player__info-img" style={{}}></div>
          <div className="player__info-description">
            <div className="player__info-description__title">DARK HORSE</div>
            <div className="player__info-description__artist">Katy Perry</div>
          </div>
        </div>
    
        <div className="player__control">
          <button type="button" className="step-backward" style={{}}></button>
          <button type="button" className="icon-play" style={{}}></button>
          <button type="button" className="step-forward" style={{}}></button>
        </div>
    
        <div className="player__progressbar">
          <div className="player__progressbar-time">-02:05</div>
          <div role="progressbar" tabIndex="-1" className="progress" style={{}}>
            <div className="progress-inner" style={{}}></div>
          </div>
        </div>
    
        <div className="player__type">
          <button type="button" className="fa icon-refresh" style={{}}></button>
        </div>
    
        <div className="player__volume"><i className="player__volume-icon icon-volume-up"></i>
          <div className="player__volume-bar">
            <div role="progressbar" tabIndex="-1" className="progress" style={{}}>
              <div className="progress-inner" style={{}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Player;