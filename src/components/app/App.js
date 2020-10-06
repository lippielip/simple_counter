import React from 'react';
import '../../App.css';
import { getData, writeData, getIp, getCountry } from '../utils/util';
import Loader from '../utils/loader';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			count: 0,
			ip: '',
			country: '',
			date: new Date(),
			loading: true
		};
	}

	async componentDidMount () {
		getData(this.setState.bind(this));
		let ipAddress = await getIp();
		let location = await getCountry();

		this.setState({
			ip: ipAddress,
			country: location,
			loading: false
		});
	}

	render () {
		if (this.state.loading) {
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
