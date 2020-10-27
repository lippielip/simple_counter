import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
			loading: true,
			showButtonPage: true
		};
		this.toggleStats = this.toggleStats.bind(this);
	}
	toggleStats () {
		this.setState({
			showButtonPage: !this.state.showButtonPage
		});
	}

	async componentDidMount () {
		// get all values with the functions in util.js and set them in the state. This also controls the loading attribute
		await setupVars(this.setState.bind(this));
		console.dir(this.state);
	}
	componentWillAppear () {}

	render () {
		//keep loading until the count has been updated. There is a slight delay between loading being set to false and the count actually updating
		if (this.state.loading || this.state.count < 0) {
			return <Loader />;
		} else {
			return (
				<div className="App">
					<ToggleButton toggleStats={this.toggleStats} />
					<TransitionGroup>
						<CSSTransition key={this.state.showButtonPage} appear timeout={1000} unmountOnExit={true} classNames="ButtonPage">
							{this.state.showButtonPage ? <ButtonPage count={this.state.count} writeData={writeData} state={this.state} /> : <StatsPage />}
						</CSSTransition>
					</TransitionGroup>
				</div>
			);
		}
	}
}

export default App;
