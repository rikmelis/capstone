import React from 'react';
import classnames from 'classnames';
import {Diagram} from 'react-graph-flow';
import graph1 from './graph1';
import graph2 from './graph2';
import graph3 from './graph3';
import {ExpandMore, ExpandLess} from 'styled-icons/material';
import translate from './translate';

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
      graph,
      explanation,
      legend,
    } = graphs[selectedGraph];

    return (
      <div className={'graphs'}>
      	<div className={'selector'}>
      		{graphs.map((g, index) =>
      			<div
      				key={`selector-${index}`}
      				className={classnames('select-button', {selected: selectedGraph === index})}
      				onClick={() => this.setState({selectedGraph: index})}
      				>
      				{g.title}
      			</div>
      		)}
      	</div>
        <Diagram key={key} graph={graph} editMode={false}>{legend}</Diagram>
        <div className={'explanation-container'}>
          <div className={'show-explanation-button'} onClick={() => this.setState({showExplanation: !showExplanation})}>
            {translate('what_does_this_mean')}
            <div className={'expand-icon'}>{showExplanation ? <ExpandMore/> : <ExpandLess/>}</div>
          </div>
          {showExplanation && <div className={'explanation'}>{explanation}</div>}
        </div>
      </div>
    );
  }
}
