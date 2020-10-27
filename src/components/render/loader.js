import React from 'react';
import logo from '../../logo1080.png';

export default class Loader extends React.Component {
	render () {
		return (
			<div className="App">
				<header className="basePage">
					<img src={logo} alt="Loading" className="App-logo" />
				</header>
			</div>
		);
	}
}
