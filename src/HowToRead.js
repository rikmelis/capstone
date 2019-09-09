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

		this.closeOnEscapePress = this.closeOnEscapePress.bind(this);
  }

  open() {
  	document.addEventListener('keydown', this.closeOnEscapePress);
  	this.setState({open: true});
  }

  close() {
  	document.removeEventListener('keydown', this.closeOnEscapePress);
  	this.setState({open: false});
  }

  closeOnEscapePress(event) {
  	if (event.key === 'Escape') {
  		this.close();
  	}
  }

	render() {
		return (
      <div className={'how-to-read'}>
        <Question className={'question-icon'} onClick={() => this.open()}/>
        {this.state.open &&
        	<div className={'pop-up-container'} onClick={(event) => this.close()}>
	        	<div className={'pop-up'} onClick={(event) => event.stopPropagation()}>
		          <div className={'title'}>
		          	{translate(['how_to_read', 'title'])}
		          	<Close className={'close-icon'} onClick={() => this.close()}/>
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
