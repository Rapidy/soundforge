import React from 'react';

const Player = () => {
  return (

    <section class="music-player">
      <div class="player">
        <audio preload="auto" src="/audio/audio.mp3">
          <track kind="captions" />
        </audio>
    
        <div class="player__info">
          <div class="player__info-img" style={{}}></div>
          <div class="player__info-description">
            <div class="player__info-description__title">DARK HORSE</div>
            <div class="player__info-description__artist">Prism-Katy Perry</div>
          </div>
        </div>
    
        <div class="player__control">
          <button type="button" class="step-backward" style={{}}></button>
          <button type="button" class="icon-play" style={{}}></button>
          <button type="button" class="step-forward" style={{}}></button>
        </div>
    
        <div class="player__progressbar">
          <div class="player__progressbar-time">-02:05</div>
          <div role="progressbar" tabindex="-1" class="progress" style={{}}>
            <div class="progress-inner" style={{}}></div>
          </div>
        </div>
    
        <div class="player__type">
          <button type="button" class="fa icon-refresh" style={{}}></button>
        </div>
    
        <div class="player__volume"><i class="player__volume-icon icon-volume-up"></i>
          <div class="player__volume-bar">
            <div role="progressbar" tabindex="-1" class="progress" style={{}}>
              <div class="progress-inner" style={{}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Player;