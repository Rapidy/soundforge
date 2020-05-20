import React, { Component } from 'react';

class Statistic extends Component {
  render() {
    return (
      <div className="nav__statistic">

				<div className="nav__statistic-delimiter"></div>

				<h4 className="nav__statistic-heading">Статистика</h4>

				<div className="nav__statistic-line">

					<div className="nav__statistic-line__title">Артистов:</div>
					<div className="nav__statistic-line__value">{this.props.amountOfArtists}</div>

				</div>

				<div className="nav__statistic-line">

					<div className="nav__statistic-line__title">Слушателей:</div>
					<div className="nav__statistic-line__value">{this.props.amountOfListeners}</div>

				</div>

				<div className="nav__statistic-line">

					<div className="nav__statistic-line__title">Треков:</div>
					<div className="nav__statistic-line__value">{this.props.amountOfTracks}</div>

				</div>
				
			</div>
    );
  }
}

export default Statistic;