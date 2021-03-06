import React, {useContext} from 'react';
import {Context} from './store';

const translations = {
	en: require('./en.json'),
	de: require('./de.json'),
};

const Translation = (props) => {
  const {language} = useContext(Context);
	const {translationKey} = props;

	const path = typeof(translationKey) === 'string' ? [translationKey] : translationKey;

	let t = translations[language];
	try {
		path.forEach(k => {
			if (!(k in t)) {
				throw new Error();
			}
			t = t[k];
		});
	} catch (e) {
		return 'missing translation';
	}
	return t;
}

const translate = (translationKey) => {
	return <Translation translationKey={translationKey}/>;
}

export default translate;
