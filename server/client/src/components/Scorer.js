import React from 'react';

class Scorer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			player1score: 501,
			player2score: 501,
			startingPlayer: Math.random() < 0.5 ? 1 : 2,
			player1name: this.props.p1name || 'James',
			player2name: this.props.p2name || 'Bill',
		};
	}

	render() {
		return (
			<div id="scores">
				<div className="player">
					<div className="playerName">{this.state.player1name}</div>
					<div className="playerScore">{this.state.player1score}</div>
				</div>
				<div className="player">
					<div className="playerName">{this.state.player2name}</div>
					<div className="playerScore">{this.state.player2score}</div>
				</div>
			</div>
		);
	}
}

export default Scorer;
