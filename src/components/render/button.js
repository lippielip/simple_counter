import React from 'react';

export default class ButtonPage extends React.Component {
	render () {
		return (
			<div className="basePage">
				<label className="hero-text" alt="Click Counter">
					{this.props.count}
				</label>
				<button id="counter" className="button" onClick={() => this.props.writeData(this.setState.bind(this), this.props.state)}>
					Click Me
				</button>
			</div>
		);
	}
}
