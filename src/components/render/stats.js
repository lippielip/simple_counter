import React from 'react';

export default class StatsPage extends React.Component {
	render () {
		return (
			<div id="StatsPage" className="statPage">
				<canvas id="clicksPerDay" width="400" height="400" />
				<canvas id="clicksPerMonth" width="400" height="400" />
				<h1>*Statistics Page WIP*</h1>
				<canvas id="totalClicks" width="400" height="400" />
				<canvas id="osType" width="400" height="400" />
				<canvas id="deviceType" width="400" height="400" />
				<canvas id="location" width="400" height="400" />
				<canvas id="language" width="400" height="400" />
			</div>
		);
	}
}
