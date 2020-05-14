import React from 'react';

const RightSideBar = () => {
  return (

    <aside className="playlists">

			<h2><img src="img/Playlists.svg" className="nav__menu__icon" alt="" />Плейлисты</h2>

			<div className="playlists-list">

				<ul className="playlists-list-category">
					<h2>Rap</h2>
	
					<li className="playlists-list-category__item">Roddy Ricch - Die Young</li>
					<li className="playlists-list-category__item">Polo G - Heartless</li>
					<li className="playlists-list-category__item">Calboy - Envy me</li>
				</ul>

				<ul className="playlists-list-category">
					<h2>Rap</h2>
				</ul>

				<ul className="playlists-list-category">
					<h2>Rap</h2>
				</ul>

				<ul className="playlists-list-category">
					<h2>Rap</h2>
				</ul>
	
			</div>

		</aside>
  
  )
}

export default RightSideBar;