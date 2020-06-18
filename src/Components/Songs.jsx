import React, {Component} from 'react';

class Songs extends Component {
    
   render(){ 
       return (
        <div key={this.props.song.id} className="content-list__item">
          <div className="content-list__func">
              <span className="content-list__link" onClick = {this.props.UserFavoritesAdd.bind(this, this.props.song.id, 'songs')} > 
              {/* onClickLike = {this.props.onClickLike(this.props.key)} */}
                <span className={`content-list__icon ${this.props.isLiked ? 'content-list__heart--fill' : 'content-list__heart'}`}></span>
                {/* <span className='content-list__icon content-list__heart--fill'></span> */}
              </span>
              <div className="content-list__actions"> 
                <span className="content-list__link content-list__link--play" onClick = {this.props.onCurentSong.bind(this, this.props.song.id)}>
                  <span className='content-list__icon content-list__play'></span>
                </span>  
              </div>
          </div>
          <img src={this.props.song.photo} alt={this.props.song.name}/>
        </div>
       );
    }
}

export default Songs;