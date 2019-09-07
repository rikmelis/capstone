import React from 'react';

export default class Pictures extends React.Component {
	render() {
		const row1 = [
		 	{
		 		name: 'Janine\nAlbiez',
		 		picture: require('./pictures/janine.jpeg'),
		 	},
		 	{
		 		name: 'Patrik\nAus der Au',
		 		picture: require('./pictures/patrik.jpeg'),
		 	},
		 	{
		 		name: 'Saro\nGibilisco',
		 		picture: require('./pictures/saro.jpeg'),
		 	},
		 	{
		 		name: 'Théoda\nWoeffray',
		 		picture: require('./pictures/theoda.jpg'),
		 	},
		 	{
		 		name: 'Jenny\nYin',
		 		picture: require('./pictures/jenny.jpeg'),
		 	},
		];

		const row2 = [
		 	{
		 		name: 'Prof. Dr.\nMarco\nSteenbergen',
		 		picture: require('./pictures/marco.jpeg'),
		 	},
		 	{
		 		name: 'Dr.\nJudith\nSpirig',
		 		picture: require('./pictures/judith.jpeg'),
		 	},
		];

		return (
      <div className={'pictures'}>
      	<div className={'row'}>
	        {row1.map(person =>
	        	<div className={'picture'} key={person.name}>
		          <div className={'text'}>{person.name}</div>
		          <img src={person.picture} alt={''}/>
		          <div className={'background-layer'}/>
		        </div>
		      )}
		     </div>
		     <div className={'row'}>
	        {row2.map(person =>
	        	<div className={'picture'} key={person.name}>
		          <div className={'text'}>{person.name}</div>
		          <img src={person.picture} alt={''}/>
		          <div className={'background-layer'}/>
		        </div>
		      )}
		    </div>
      </div>
		);
	}
}
