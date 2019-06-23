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
      selectedGraph: 2,
    };
  }

  render() {
    const graphs = [
    	{
    		title: 'SEE & Central Asia',
    		graph: <Graph key={'graph1'} width={800} height={750} nodes={nodes1} edges={edges1}/>,
    	},
    	{
    		title: 'Asia & The Pacific',
    		graph: <Graph key={'graph2'} width={800} height={800} nodes={nodes2} edges={edges2}/>,
    	},
    	{
    		title: 'West & Central Africa',
    		graph: <Graph key={'graph3'} width={800} height={500} nodes={nodes3} edges={edges3}/>,
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