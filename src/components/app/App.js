import React from 'react';
import { getData, writeData, getIp, getCountry, getDomain } from '../utils/util';
import Loader from '../utils/loader';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			count: -1,
			ip: '',
			country: '',
			date: Date.now(),
			prev: '',
			loading: true
		};
	}

	async componentDidMount () {
		getData(this.setState.bind(this));
		let ipAddress = await getIp();
		let location = await getCountry();
		let domain = getDomain();
		this.setState({
			ip: ipAddress,
			country: location,
			loading: false,
			prev: domain
		});
		console.dir(this.state);
	}

	render () {
		if (this.state.loading || this.state.count < 0) {
			return <Loader />;
		} else {
			return (
				<div className="App">
					<header className="App-header">
						<label className="hero-text">{this.state.count}</label>
						<button id="counter" className="button" onClick={() => writeData(this.setState.bind(this), this.state)}>
							Click Me
						</button>
					</header>
				</div>
			);
		}
	}
}

export default App;
