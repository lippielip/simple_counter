import React from 'react';

export default class StatsPage extends React.Component {
	render () {
		return (
			<div>
				<canvas id="clicksPerDay" width="400" height="400" />
				<canvas id="clicksPerMonth" width="400" height="400" />
				<h1>HALLO WELT</h1>
				<canvas id="totalClicks" width="400" height="400" />
				<canvas id="osType" width="400" height="400" />
				<canvas id="deviceType" width="400" height="400" />
				<canvas id="location" width="400" height="400" />
				<canvas id="language" width="400" height="400" />
			</div>
		);
	}
}
