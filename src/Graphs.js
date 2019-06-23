import React from 'react';
import classNames from 'classnames'
import Graph from './graph/Graph.js';
import {nodes as nodes1, edges as edges1} from './config_graph1.js'
import {nodes as nodes2, edges as edges2} from './config_graph2.js'
import {nodes as nodes3, edges as edges3} from './config_graph3.js'

export default class Graphs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGraph: 0,
    };
  }

  render() {
    const legend1 = (
      <div className={'legend'}>
        <table className={'legend'}>
          <tr>
            <td>FL</td>
            <td>forced labour in country of citizenship</td>
          </tr>
          <tr>
            <td>FL</td>
            <td>forced labour in foreign country</td>
          </tr>
          <tr>
            <td>SE</td>
            <td>secual exploitation in foreign country</td>
          </tr>
          <tr>
            <td><b>P</b></td>
            <td>Pacific</td>
          </tr>
          <tr>
            <td><b>MENA</b></td>
            <td>Middle East & North Africa</td>
          </tr>
          <tr>
            <td><b>SEE</b></td>
            <td>South Eastern Europe</td>
          </tr>
          <tr>
            <td><b>EU</b></td>
            <td>European Union</td>
          </tr>
          <tr>
            <td><b>EEA</b></td>
            <td>European Economic Area</td>
          </tr>
        </table>
        * age at entry into process
      </div>
    );

    const graphs = [
    	{
    		title: 'SEE & Central Asia',
    		graph: <Graph key={'graph1'} width={800} height={620} nodes={nodes1} edges={edges1}/>,
    	},
    	{
    		title: 'Asia & The Pacific',
    		graph: <Graph key={'graph2'} width={800} height={800} nodes={nodes2} edges={edges2}/>,
    	},
    	{
    		title: 'West & Central Africa',
    		graph: <Graph key={'graph3'} width={800} height={480} nodes={nodes3} edges={edges3}/>,
    	},
    ];

    return (
      <div className={'graphs'}>
      	<div className={'selector'}>
      		{graphs.map((g, index) =>
      			<div
      				key={`selector-${index}`}
      				className={classNames('select-button', {selected: this.state.selectedGraph === index})}
      				onClick={() => this.setState({selectedGraph: index})}
      				>
      				{g.title}
      			</div>
      		)}
      	</div>
        {graphs[this.state.selectedGraph].graph}
      </div>
    );
  }
}