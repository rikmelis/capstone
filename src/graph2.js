import React from 'react';
import {Node, Edge} from 'test-graph';
import {red, blue, orange} from './graph_colors';
import Legend from './Legend';

const n1 = new Node('age*', 320, 50);
const n2 = new Node('economic status', 150, 200);
const n3 = new Node('region of exploitation', 500, 200);
const n4 = new Node('gender', 660, 400);
const n5 = new Node('initial contact to recruiter', 500, 550);
n1.id = 1;
n2.id = 2;
n3.id = 3;
n4.id = 4;
n5.id = 5;

const roundNodesStyle = {
  padding: '15px',
  borderRadius: '50%',
}

const n6 = new Node('FL', 50, 400, orange, '0.80 | 4%', roundNodesStyle);
const n7 = new Node('FL', 250, 400, blue, '0.75 | 15%', roundNodesStyle);
const n8 = new Node('FL', 350, 400, blue, '0.92 | 75%', roundNodesStyle);
const n9 = new Node('FL', 745, 550, blue, '0.90 | 2%', roundNodesStyle);
const n10 = new Node('FL', 350, 740, blue, '0.92 | <1%', roundNodesStyle);
const n11 = new Node('SE', 650, 740, red, '0.89 | 3%', roundNodesStyle);

const nodes = [
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  n8,
  n9,
  n10,
  n11,
];

const e1 = new Edge(n1, n2, blue, '< 38');
const e2 = new Edge(n1, n3, blue, '≥ 38');
const e3 = new Edge(n2, n6, orange, 'very poor');
const e4 = new Edge(n2, n7, blue, 'poor / standard / well-off');
const e5 = new Edge(n3, n8, blue, 'Asia & P / North & Central America / America / East Africa / MENA / SEE & Central Asia');
const e6 = new Edge(n3, n4, red, 'EU & EEA / Soutern Africa / West & Central Africa');
const e7 = new Edge(n4, n5, red, 'female');
const e8 = new Edge(n4, n9, blue, 'male');
const e9 = new Edge(n5, n10, blue, 'employment agency / internet advertisement / other');
const e10 = new Edge(n5, n11, red, 'personal contact');

const edges = [
  e1,
  e2,
  e3,
  e4,
  e5,
  e6,
  e7,
  e8,
  e9,
  e10,
];

const explanation = 'Varius quam quisque id diam vel quam elementum pulvinar. Ultrices dui sapien eget mi proin sed libero enim. Ante metus dictum at tempor. Blandit massa enim nec dui nunc mattis enim. Libero nunc consequat interdum varius sit. Urna neque viverra justo nec ultrices dui sapien eget. Sodales ut etiam sit amet nisl purus in mollis. Orci dapibus ultrices in iaculis. Quis enim lobortis scelerisque fermentum. Platea dictumst quisque sagittis purus sit.';

const legend = (
  <Legend style={{maxWidth: '250px', left: '5px', bottom: '5px'}}>
    <div className={'content'}>
      <table>
        <tbody>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: orange}}>FL</div></td>
            <td>forced labour in country of citizenship</td>
          </tr>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: blue}}>FL</div></td>
            <td>forced labour in foreign country</td>
          </tr>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: red}}>SE</div></td>
            <td>sexual exploitation in foreign country</td>
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
        </tbody>
      </table>
      * age at entry into process
    </div>
  </Legend>
);

export default {
  title: 'Asia & The Pacific',
  key: 'graph2',
  nodes: nodes,
  edges: edges,
  width: 800,
  height: 800,
  explanation: explanation,
  legend: legend,
}