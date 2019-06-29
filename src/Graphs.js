import React from 'react';
import classNames from 'classnames';
import {Graph} from 'test-graph';
import {nodes as nodes1, edges as edges1} from './graph1.js';
import {nodes as nodes2, edges as edges2} from './graph2.js';
import {nodes as nodes3, edges as edges3} from './graph3.js';
import {ExpandMore, ExpandLess} from 'styled-icons/material';

const explanation1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis. Fames ac turpis egestas integer. Et magnis dis parturient montes nascetur ridiculus mus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Tincidunt arcu non sodales neque sodales ut. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu risus quis varius quam quisque id. Ultrices vitae auctor eu augue ut lectus. Ultrices tincidunt arcu non sodales neque. Elementum tempus egestas sed sed risus pretium quam. Dictum sit amet justo donec enim diam. Aliquam faucibus purus in massa tempor. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Consequat mauris nunc congue nisi. Vitae semper quis lectus nulla at volutpat diam ut.';
const explanation2 = 'Varius quam quisque id diam vel quam elementum pulvinar. Ultrices dui sapien eget mi proin sed libero enim. Ante metus dictum at tempor. Blandit massa enim nec dui nunc mattis enim. Libero nunc consequat interdum varius sit. Urna neque viverra justo nec ultrices dui sapien eget. Sodales ut etiam sit amet nisl purus in mollis. Orci dapibus ultrices in iaculis. Quis enim lobortis scelerisque fermentum. Platea dictumst quisque sagittis purus sit.';
const explanation3 = 'Enim blandit volutpat maecenas volutpat blandit. Viverra adipiscing at in tellus. Integer feugiat scelerisque varius morbi enim nunc. Accumsan lacus vel facilisis volutpat. Pretium fusce id velit ut tortor pretium viverra. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Id faucibus nisl tincidunt eget nullam non. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Ut aliquam purus sit amet luctus. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Turpis tincidunt id aliquet risus feugiat in. Ut sem nulla pharetra diam sit amet nisl suscipit. Pulvinar elementum integer enim neque volutpat ac tincidunt. Aliquam ut porttitor leo a diam sollicitudin tempor. Pellentesque massa placerat duis ultricies. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Quam nulla porttitor massa id neque. Ut morbi tincidunt augue interdum. Hac habitasse platea dictumst quisque sagittis purus sit amet.';

const graphs = [
  {
    title: 'SEE & Central Asia',
    key: 'graph1',
    nodes: nodes1,
    edges: edges1,
    width: 800,
    height: 620,
    explanation: explanation1,
  },
  {
    title: 'Asia & The Pacific',
    key: 'graph2',
    nodes: nodes2,
    edges: edges2,
    width: 800,
    height: 800,
    explanation: explanation2,
  },
  {
    title: 'West & Central Africa',
    key: 'graph3',
    nodes: nodes3,
    edges: edges3,
    width: 800,
    height: 480,
    explanation: explanation3,
  },
];

export default class Graphs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGraph: 0,
      showExplanation: false,
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

    const {
      selectedGraph,
      showExplanation,
    } = this.state;

    const {
      key,
      nodes,
      edges,
      width,
      height,
      explanation,
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
        <Graph key={key} nodes={nodes} edges={edges} width={width} height={height}/>
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