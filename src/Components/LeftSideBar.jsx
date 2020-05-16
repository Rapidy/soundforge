import React from 'react';
import { NavLink } from 'react-router-dom'

import audioWaveFilled from './../img/AudioWaveFilled.svg';
import music from './../img/Music.svg';
import love from './../img/Love.svg';
import hand from './../img/Hand.svg';
import shuffle from './../img/Shuffle.svg';

import Statistic from './LeftSideBar/Statistic';

const LeftSideBar = () => {
  return (

    <nav className="nav">

			<div className="nav__menu">

				<NavLink to="/top-tracks" className="nav__menu__link">
					<img src={audioWaveFilled} className="nav__menu__icon" alt="top songs" />
					Топ треков
				</NavLink>
				<NavLink to="/recommendations" className="nav__menu__link">
					<img src={music} className="nav__menu__icon" alt="recomended" />
					Рекомендации
				</NavLink>
				<NavLink to="/popular" className="nav__menu__link">
					<img src={love} className="nav__menu__icon" alt="most heard" />
					Популярные
				</NavLink>
				<NavLink to="/favorite" className="nav__menu__link">					
					<img src={hand} className="nav__menu__icon" alt="song of the day" />
					Избранные				
				</NavLink>
				<NavLink to="/random-track" className="nav__menu__link">			
					<img src={shuffle} className="nav__menu__icon" alt="random song" />
					Любой трек				
				</NavLink>

			</div>

			<Statistic 
				amountOfArtist="9.600"
				amountOfTracks="251.738"
				amountOfListeners="102.690" 
			/>

		</nav>

  )
}

export default LeftSideBar;