import React from 'react';
import {ExpandMore, ExpandLess} from 'styled-icons/material';
import {Context} from './store';

export default class Legend extends React.Component {
	render() {
		const {
			showLegend,
			toggleShowLegend,
		} = this.context;

		const {
			style,
			children,
		} = this.props;

		return (
		  <div className={'legend'} style={style}>
		    <div className={'show-legend-button'} onClick={toggleShowLegend}>
		      {'legend'}
					<div className={'expand-icon'}>{showLegend ? <ExpandMore/> : <ExpandLess/>}</div>
		    </div>
		    {showLegend && children}
		  </div>
		);
	}
}

Legend.contextType = Context;