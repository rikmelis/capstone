import React from 'react';
import janine from './pictures/janine.jpeg';
import patrik from './pictures/patrik.jpeg';
import saro from './pictures/saro.jpeg';
import theoda from './pictures/theoda.jpg';
import jenny from './pictures/jenny.jpeg';
import marco from './pictures/marco.jpeg';
import judith from './pictures/judith.jpeg';


export default class Pictures extends React.Component {
	render() {
		const row1 = [
		 	{
		 		name: 'Janine\nAlbiez',
		 		picture: janine,
		 	},
		 	{
		 		name: 'Patrik\nAus der Au',
		 		picture: patrik,
		 	},
		 	{
		 		name: 'Saro\nGibilisco',
		 		picture: saro,
		 	},
		 	{
		 		name: 'Théoda\nWoeffray',
		 		picture: theoda,
		 	},
		 	{
		 		name: 'Jenny\nYin',
		 		picture: jenny,
		 	},
		];

		const row2 = [
		 	{
		 		name: 'Prof. Dr.\nMarco\nSteenbergen',
		 		picture: marco,
		 	},
		 	{
		 		name: 'Dr.\nJudith\nSpirig',
		 		picture: judith,
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
