const translations = {
	en: require('./en.json'),
	de: require('./de.json'),
};

export const translate = (language, key) => {
	const path = typeof(key) === 'string' ? [key] : key;

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