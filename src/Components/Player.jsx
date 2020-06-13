import React, { Component } from 'react';

 class Player extends Component {   

  constructor(props) {
    super(props);
    
    this.state = {
      playlist: this.props.playerSongs() ? this.props.playerSongs() : null,
      curentSong: null,
      music: "stopeed",
      currentTime: 1,
      duration: 1,
      statusPlayer: "refresh",
      keyRepeat: 0,
      volume: true
    }

  }

  FindData(Key) {
    let data = this.state.playlist.find(music => music.id === this.state.curentSong )[Key];
    if (Array.isArray(data)) {
     data = data.join(', ');
    }
    return data;
  }

  PlayerControl(song, where) {
    if (where) {
      ++song > this.state.playlist.length ? this.setState({curentSong: 1}) : this.setState({curentSong: song})
    } else {
      --song <= 0 ? this.setState({curentSong: this.state.playlist.length}) : this.setState({curentSong: song})
    }
  }

  // RightSideBarMusicList(playlist) {   
  //     return playlist.map(song => { 
  //       return(
  //       <li className="playlists-list-category__item" key={song.id} onClick={ ()=>{ this.setState({ curentSong: song.id }) }}>
  //         {song.title}
  //       </li>
  //       ); 
  //     });
  // }

  setPlauerCurent = () => {
    this.setState({ curentSong: this.props.playerCurentSong() });
    console.log('setPlauerCurent');
  }

  render() {    

    // const playlist = this.props.playerSongs();
    // this.state.playlist = playlist;
    // console.log(this.state.playlist);
    
    // const curentSong = this.props.curentSong();
    // this.state.curentSong = curentSong;
    // console.log(this.state.curentSong);



    if (this.state.playlist !== null) {
      
      const currentTime = this.getTime(this.state.currentTime);
      const duration = this.getTime(this.state.duration);
      
      return (
        <section className="music-player">
        <audio ref={ref => {this.music = ref}} />
         {this.state.curentSong !== null && (
            <div className="player">
              <div className="player__info">
                <div className="player__info-img" style = {{ backgroundImage: `url(${ this.FindData('cover') })` }}></div>
                <div className="player__info-description">
                    <div className="player__info-description__title">{ this.FindData('title') }</div>
                    <div className="player__info-description__artist">{ this.FindData('artist') }</div>
                </div>
              </div>

              <div className="player__control">
                <button className="player__control-btn" onClick={() => {this.PlayerControl(this.state.curentSong, false)}}><i className="fas fa-angle-left"></i></button>

                {this.state.music === 'paused' && (
                  <button className="player__control-btn" onClick={() => {this.setState({music: "playing"})}}><i className="far fa-play-circle"></i></button>
                )}
                {this.state.music === "playing" && (
                  <button className="player__control-btn" onClick={() => {this.setState({music: "paused"})} }><i className="far fa-pause-circle"></i></button>
                )}

                <button className="player__control-btn" onClick={() => {this.PlayerControl(this.state.curentSong, true)}}><i className="fas fa-angle-right"></i></button>
              </div>

              <div className="player__progressbar">
                <div className="player__progressbar-currentTime">{currentTime}</div>
                <input type="range" className="player__range" onChange={ () => this.Song() } ref={ref => {this.refSong = ref}}  min="0" defaultValue="0" max={ this.state.duration ? Math.round(this.state.duration): 0 } />
                <div className="player__progressbar-duration">{duration}</div>
              </div>

              <div className="player__type">    
                {this.state.statusPlayer === "refresh" && (
                    <button className="player__type-btn" onClick={() =>{ this.setState({ statusPlayer: "random" }) }}> <i className="fas fa-sync-alt"></i> </button>
                )}
                {this.state.statusPlayer === "random" && (
                    <button className="player__type-btn" onClick={() =>{ this.setState({ statusPlayer: "repeat" }) }}> <i className="fas fa-random"></i> </button>
                )}
                {this.state.statusPlayer === "repeat" && (
                    <button className="player__type-btn" onClick={() =>{ this.setState({ statusPlayer: "refresh" }) }}> <i className="fas fa-redo-alt"></i> </button>
                )}
              </div>

              <div className="player__volume flex">  
                {this.state.volume ? (
                  <button className="player__volume-btn flex" onClick={ ()=>{this.setState({volume: false})} }><i className="fas fa-volume-up"></i></button>
                ) : (
                  <button className="player__volume-btn flex" onClick={ ()=>{this.setState({volume: true})} }><i className="fas fa-volume-mute"></i></button>
                ) }             
                <div className="player__volume-bar">
                  <input type="range" className="player__range flex" onChange={ () => this.Volume() } ref={ref => {this.refVolume = ref}} defaultValue="40"  min="0" max="1" step="0.01" />
                </div>
              </div>

            </div>
          )}

          {/* { this.state.playlist ? this.RightSideBarMusicList(this.state.playlist) : null} */}
          {/* по клику передать в стэйт плэйера */}
				{ this.props.musicList() }
          {
            this.props.playerCurentSong() ? this.setPlauerCurent() : console.log('error')
          }
        { console.log(this.state.curentSong,'curentSong-player') }
        { console.log(this.state.playlist,'playlist-player') }
        </section>
      );
      

    }else{return null;}
  }

  Song() {
    this.music.currentTime = this.refSong.value;  
    this.music.play();
    this.setState({
      currentTime: this.getTime(this.refSong.value),
      music: "playing"
    });
  }

  Volume() {
    this.music.volume = this.refVolume.value;
  }

  getTime(time) {
    if (isNaN(time) || time === 0) {
      return '00:00';
    }else{
      var mins = Math.floor(time / 60);
      var secs = (time % 60).toFixed();
      return "".concat(mins < 10 ? '0' : '').concat(mins, ":").concat(secs < 10 ? '0' : '').concat(secs);
    }
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.curentSong !== prevState.curentSong) {
        let song =  this.FindData('music') ;
        this.music.src = song;
        this.music.play();
        this.setState({music: "playing"});
    }
    if (this.state.music !== prevState.music) {

      if (this.state.music === "paused") {
        this.music.pause();
      }

      if (this.state.music === "playing" && prevState.music === "paused") {
        this.music.play();
      }
      
    }
  }

  componentDidMount() { 
    if (this.state.playlist !== null) {
      this.music.addEventListener("timeupdate", e => {
        this.refSong.value = e.target.currentTime;
        if (Math.round(this.refSong.value) === Math.round(this.state.duration)) {
          if (this.state.statusPlayer === "refresh") {   
            let next = this.state.curentSong;
            ++next > this.state.playlist.length ? this.setState({curentSong: 1}) : this.setState({curentSong: next})
          }
          
          if (this.state.statusPlayer === "random") {
            this.setState({curentSong: this.randomInteger(1, this.state.playlist.length ) })
          }

          if(this.state.statusPlayer === "repeat"){
            this.setState({keyRepeat: this.state.curentSong});
            this.music.play();
          }
        }
        this.setState({
          currentTime: e.target.currentTime,
          duration: e.target.duration
        });
      });
    }  
  }

  componentWillUnmount(){
    this.music.removeEventListener("timeupdate", () => {});
  }

}

export default Player;
