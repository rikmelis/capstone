import React from 'react';
import {ExpandMore, ExpandLess} from 'styled-icons/material';

export default class Legend extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showLegend: true,
		};
	}

	render() {
		const {
			showLegend,
		} = this.state;

		const {
			style,
			children,
		} = this.props;

		return (
		  <div className={'legend'} style={style}>
		    <div className={'show-legend-button'} onClick={() => this.setState({showLegend: !showLegend})}>
		      {'legend'}
					<div className={'expand-icon'}>{showLegend ? <ExpandMore/> : <ExpandLess/>}</div>
		    </div>
		    {showLegend && children}
		  </div>
		);
	}
}