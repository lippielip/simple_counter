import React from 'react';

export default class Button extends React.Component {
	render () {
		return (
			<div className="App">
				<header className="App-header">
					<label className="hero-text">{this.props.count}</label>
					<button id="counter" className="button" onClick={() => this.props.writeData(this.setState.bind(this), this.props.state)}>
						Click Me
					</button>
				</header>
			</div>
		);
	}
}
