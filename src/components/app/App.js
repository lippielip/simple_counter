import React from 'react';
import { writeData, setupVars } from '../utils/util';
import Loader from '../render/loader';
import ButtonPage from '../render/button';
import ToggleButton from '../render/toggleButton';
import StatsPage from '../render/stats';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			//initialize Count with impossible value
			count: -1,
			ip: '',
			country: '',
			// Convert Milliseconds to Seconds (UNIX Timestamp)
			date: Math.floor(Date.now() / 1000),
			prev: '',
			loading: true
		};
	}

	async componentDidMount () {
		// get all values with the functions in util.js and set them in the state. This also controls the loading attribute
		await setupVars(this.setState.bind(this));
		this.setState({loading: false})
	}

	render () {
		//keep loading until the count has been updated. There is a slight delay between loading being set to false and the count actually updating
		if (this.state.loading || this.state.count < 0) {
			return <Loader />;
		} else {
			return (
				<div className="App">
					<ToggleButton toggleStats={this.toggleStats} />
					<ButtonPage count={this.state.count} writeData={writeData} state={this.state} /> 
					<StatsPage />
				</div>
				
			);
		}
	}
}

export default App;
