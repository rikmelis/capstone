import React from 'react';
import {Context} from './store';
import App from './App';

export default class AppContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			language: localStorage.getItem('language') || 'en',
		};
	}

	toggleLanguage() {
		const newLanguage = this.state.language === 'en' ? 'de' : 'en';
		localStorage.setItem('language', newLanguage);
		this.setState({
			language: newLanguage,
		});
	}

	render() {
	  return (
    	<Context.Provider value={{
    		...this.state,
    		toggleLanguage: () => this.toggleLanguage(),
    	}}>
	    	<App/>
	    </Context.Provider>
	 	)
	}
}