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

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    	this.setState({open: false});
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
	}

	render() {
		const {
			open,
		} = this.state;

		return (
      <div className={'how-to-read'}>
        <Question className={'question-icon'} onClick={(event) => {
        	event.stopPropagation();
        	event.preventDefault();
        	this.setState({open: !open})
        }}/>
        {open &&
        	<div className={'pop-up'} ref={r => this.wrapperRef = r}>
	          <div className={'title'}>
	          	{translate(['how_to_read', 'title'])}
	          	{<Close className={'close-icon'} onClick={() => this.setState({open: false})}/>}
	          </div>
	          <div className={'paragraph'}>{translate(['how_to_read', 'p1'])}</div>
	          <div className={'paragraph'}>{translate(['how_to_read', 'p2'])}</div>
	          <div className={'paragraph'}>{translate(['how_to_read', 'p3'])}</div>
	          <div className={'paragraph'}>{translate(['how_to_read', 'p4'])}</div>
	        </div>
	      }
      </div>
		)
	}
}