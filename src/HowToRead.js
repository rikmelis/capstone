import React from 'react';
import translate from './translate';
import {Question} from 'styled-icons/evil';
import {Close} from 'styled-icons/evil';

export default class HowToRead extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
  }

	render() {
		return (
      <div className={'how-to-read'}>
        <Question className={'question-icon'} onClick={(event) => this.setState({open: true})}/>
        {this.state.open &&
        	<div className={'pop-up-container'} onClick={(event) => this.setState({open: false})}>
	        	<div className={'pop-up'} onClick={(event) => event.stopPropagation()}>
		          <div className={'title'}>
		          	{translate(['how_to_read', 'title'])}
		          	{<Close className={'close-icon'} onClick={() => this.setState({open: false})}/>}
		          </div>
		          <div className={'paragraph'}>{translate(['how_to_read', 'p1'])}</div>
		          <div className={'paragraph'}>{translate(['how_to_read', 'p2'])}</div>
		          <div className={'paragraph'}>{translate(['how_to_read', 'p3'])}</div>
		          <div className={'paragraph'}>{translate(['how_to_read', 'p4'])}</div>
		        </div>
	        </div>
	      }
      </div>
		)
	}
}