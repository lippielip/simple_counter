import React from 'react';
import Fab from '@material-ui/core/Fab';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export default class ToggleButton extends React.Component {
	toggleClick = () => {
		document.getElementById('toggleButton').classList.toggle('toggleTransform');
		document.getElementById('body').classList.toggle('noScroll');
		document.getElementById('ButtonPage').classList.toggle('clicked');
		document.getElementById('StatsPage').classList.toggle('clicked');

	};

	render () {
		return (
			<Fab id="toggleButton" className="toggleButton" color="primary" aria-label="toggle Display" onClick={this.toggleClick}>
				<ExpandMoreRoundedIcon />
			</Fab>
		);
	}
}
