import React from 'react';

export default class ButtonPage extends React.Component {
	render () {
		return (
			<div id="ButtonPage" className="basePage buttonPage">
				<label className="hero-text" alt="Counter">
					{this.props.count}
				</label>
				<button id="counter" className="button" onClick={() => this.props.writeData(this.setState.bind(this), this.props.state)}>
					Click Me
				</button>
			</div>
		);
	}
}
