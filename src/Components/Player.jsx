import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player';

const playlist = [
  {
    url: '/audio/audio.mp3',
    cover: '/static/media/placeholder.jpg',
    title: 'DARK HORSE',
    artist: [
      'Prism-Katy Perry',
    ]
  },
  {
    url: '/audio/audio2.mp3',
    cover: '../img/placeholder.jpg',
    title: 'DARK HORSE1',
    artist: [
      'Prism-Katy Perry1',
    ]
  },
  {
      url: '/audio/audio3.mp3',
      cover: '../img/placeholder.jpg',
      title: 'DARK HORSE2',
      artist: [
        'Prism-Katy Perry2',
      ]
  }
];

export default class Player extends Component {
  render() {
    return (
    <section class="music-player">
      <MusicPlayer playlist={playlist} />
    </section>
    );
  }
}
