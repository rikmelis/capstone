import React from 'react';

export default class Pictures extends React.Component {
	render() {
		const team = [
		 	{
		 		name: 'Janine Albiez',
		 		picture: require('./pictures/placeholder.png'),
		 	},
		 	{
		 		name: 'Patrik Aus der Au',
		 		picture: require('./pictures/patrik.jpeg'),
		 	},
		 	{
		 		name: 'Saro Gibilisco',
		 		picture: require('./pictures/saro.jpeg'),
		 	},
		 	{
		 		name: 'Théoda Woeffray',
		 		picture: require('./pictures/theoda.jpg'),
		 	},
		 	{
		 		name: 'Jenny Yin',
		 		picture: require('./pictures/placeholder.png'),
		 	},
		];

		return (
      <div className={'pictures'}>
        {team.map(person =>
        	<div className={'picture'} key={person.name}>
	          <div className={'text'}>{person.name}</div>
	          <img src={person.picture} alt={''}/>
	          <div className={'background-layer'}/>
	        </div>
	      )}
      </div>
		);
	}
} 