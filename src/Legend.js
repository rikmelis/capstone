import React from 'react';
import translate from './translate';

export default class Legend extends React.Component {
	render() {
		const {
			style,
			children,
		} = this.props;

		return (
		  <div className={'legend'} style={style}>
		    <div className={'legend-title'}>{translate('legend')}</div>
		    {children}
		  </div>
		);
	}
}
