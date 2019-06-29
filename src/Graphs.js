import React from 'react';
import classNames from 'classnames';
import {Graph} from 'test-graph';
import graph1 from './graph1';
import graph2 from './graph2';
import graph3 from './graph3';
import {ExpandMore, ExpandLess} from 'styled-icons/material';


export default class Graphs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGraph: 0,
      showExplanation: false,
      showLegend: true,
    };
  }

  render() {
    const {
      selectedGraph,
      showExplanation,
    } = this.state;
    
    const graphs = [graph1, graph2, graph3];

    const {
      key,
      nodes,
      edges,
      width,
      height,
      explanation,
      legend,
    } = graphs[selectedGraph];

    return (
      <div className={'graphs'}>
      	<div className={'selector'}>
      		{graphs.map((g, index) =>
      			<div
      				key={`selector-${index}`}
      				className={classNames('select-button', {selected: selectedGraph === index})}
      				onClick={() => this.setState({selectedGraph: index})}
      				>
      				{g.title}
      			</div>
      		)}
      	</div>
        <Graph key={key} nodes={nodes} edges={edges} width={width} height={height}>{legend}</Graph>
        <div className={'explanation-container'}>
          <div className={'show-explanation-button'} onClick={() => this.setState({showExplanation: !showExplanation})}>
            {'What does this mean?'}
            <div className={'expand-icon'}>{showExplanation ? <ExpandMore/> : <ExpandLess/>}</div>
          </div>
          {showExplanation && <div className={'explanation'}>{explanation}</div>}
        </div>
      </div>
    );
  }
}
