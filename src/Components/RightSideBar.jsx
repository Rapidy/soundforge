import React from 'react';

import iconPlaylist from '../img/Playlist.svg'

const RightSideBar = () => {
  return (

    <aside className="playlists">

			<h2 className="h2"><img src={iconPlaylist} className="nav__menu__icon" alt="" />Плейлисты</h2>

			<div className="playlists-list">

				<ul className="playlists-list-category">
					<h3 className="h3">Rap</h3>
	
					<li className="playlists-list-category__item">Roddy Ricch - Die Young</li>
					<li className="playlists-list-category__item">Polo G - Heartless</li>
					<li className="playlists-list-category__item">Calboy - Envy me</li>
				</ul>

				<ul className="playlists-list-category">
					<h3 className="h3">Rap</h3>
				</ul>

				<ul className="playlists-list-category">
					<h3 className="h3">Rap</h3>
				</ul>

				<ul className="playlists-list-category">
					<h3 className="h3">Rap</h3>
				</ul>
	
			</div>

		</aside>
  
  )
}

export default RightSideBar;