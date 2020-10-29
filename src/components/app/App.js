import React from 'react';
import { writeData, setupVars } from '../utils/util';
import Loader from '../render/loader';
import Button from '../render/button';

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			count: -1,
			ip: '',
			country: '',
			date: Math.floor(Date.now() / 1000),
			prev: '',
			loading: true
		};
	}

	async componentDidMount () {
		await setupVars(this.setState.bind(this));
		console.dir(this.state);
	}

	render () {
		if (this.state.loading || this.state.count < 0) {
			return <Loader />;
		} else {
			return <Button count={this.state.count} writeData={writeData} state={this.state} />;
		}
	}
}

export default App;
