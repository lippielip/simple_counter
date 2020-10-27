import React from 'react';
import Fab from '@material-ui/core/Fab';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export default class ToggleButton extends React.Component {
	toggleClick = () => {
		document.getElementById('toggleButton').classList.toggle('toggleTransform');
		this.props.toggleStats();
	};

	render () {
		return (
			<Fab id="toggleButton" className="toggleButton" color="primary" aria-label="toggle Display" onClick={this.toggleClick}>
				<ExpandMoreRoundedIcon />
			</Fab>
		);
	}
}
