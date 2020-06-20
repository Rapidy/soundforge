import React, { Component } from 'react';
// import API from "../../utils/API";
// import { instanceOf } from 'prop-types';
// import { withCookies, Cookies } from 'react-cookie';

import topSong from '../../img/top-song.jpg';

import Preloader from '../Preloader';

class Content extends Component {

  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired
  // };

  // constructor(props) {
  //   super(props);
  //   const { cookies } = props;
  //   this.state = {
  //     apiToken: cookies.get('apiToken'),
  //     // isLoading: true,
  //     // albums: null
  //   };

  // } 


  // gridData(array) {
  //   return array.map( (a) => {
  //     return(
  //       <div key={a.id} className="content-list__item" onClick = {this.props.PlaylistSongs.bind(this, a.songs) }>
  //         <img src={a.photo} alt={a.name}/>
  //       </div>
  //     );
  //   });
  // }

  // async componentDidMount() {
  //   await API.post('albums/all', { 'token': this.state.apiToken })
  //   .then(res => {
  //       this.setState({
  //         isLoading: false,
  //         albums: res.data
  //       });
  //   }).catch(error => {
  //     console.log(`😱 Axios request failed: ${error}`);
  //   });
  // }

  render() {
    const { isLoading, Songs } = this.props;
    return (
      <section className="content section">

        <header className="content-header">
          <img className="content-header__photo" src={topSong} alt="" />
          <div className="content-header__text">
            <h2 className="h2">Топ этой недели</h2>
            <h3 className="h3">{}</h3>
          </div>
        </header>

        <section className="content-list">
          { isLoading ? <Preloader /> : this.props.SongsOutput(Songs) }
        </section>

      </section>
    );
  }

}

export default Content;