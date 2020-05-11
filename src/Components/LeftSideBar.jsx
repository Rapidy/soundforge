import React from 'react';

import audioWaveFilled from './../img/AudioWaveFilled.svg';
import music from './../img/Music.svg';
import love from './../img/Love.svg';
import hand from './../img/Hand.svg';
import shuffle from './../img/Shuffle.svg';

const LeftSideBar = () => {
  return (

    <nav className="nav">

			<div className="nav__menu">

				<a href="#" className="nav__menu__link">
					<img src={audioWaveFilled} className="nav__menu__icon" alt="top songs" />
					Топ треков
				</a>
				<a href="#" className="nav__menu__link">
					<img src={music} className="nav__menu__icon" alt="recomended" />
					Рекомендации
				</a>
				<a href="#" className="nav__menu__link">
					<img src={love} className="nav__menu__icon" alt="most heard" />
					Популярные
				</a>
				<a href="#" className="nav__menu__link">					
					<img src={hand} className="nav__menu__icon" alt="song of the day" />
					Избранные				
				</a>
				<a href="#" className="nav__menu__link">			
					<img src={shuffle} className="nav__menu__icon" alt="random song" />
					Любой трек				
				</a>

			</div>

			<div className="nav__statistic">
				<div className="nav__statistic-delimiter"></div>
				<p className="nav__statistic-heading">Статистика</p>
				<div className="nav__statistic-line">
					<div className="nav__statistic-line__title">Артистов:</div>
					<div className="nav__statistic-line__value">9.600</div>
				</div>
				<div className="nav__statistic-line">
					<div className="nav__statistic-line__title">Слушателей:</div>
					<div className="nav__statistic-line__value">56.356</div>
				</div>
				<div className="nav__statistic-line">
					<div className="nav__statistic-line__title">Треков:</div>
					<div className="nav__statistic-line__value">653.200</div>
				</div>
				<div className="nav__statistic-line">
					<div className="nav__statistic-line__title">Подписчиков:</div>
					<div className="nav__statistic-line__value">2.867</div>
				</div>
			</div>

		</nav>

  )
}

export default LeftSideBar;