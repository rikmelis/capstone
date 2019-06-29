import React from 'react';
import {Node, Edge} from 'test-graph';
import {red, blue, orange} from './graph_colors.js';
import Legend from './Legend.js';

const n1 = new Node('region of exploitation', 350, 60);
const n2 = new Node('initial contact to recruiter', 150, 250);
const n3 = new Node('region of exploitation', 550, 250);
n1.id = 1;
n2.id = 2;
n3.id = 3;

const roundNodesStyle = {
  padding: '15px',
  borderRadius: '50%',
}

const n4 = new Node('FL', 50, 420, orange, '0.98 | 58%', roundNodesStyle);
const n5 = new Node('FL', 250, 420, blue, '0.62 | 9%', roundNodesStyle);
const n6 = new Node('FL', 450, 420, blue, '0.94 | 6%', roundNodesStyle);
const n7 = new Node('SE', 650, 420, red, '0.83 | 27%', roundNodesStyle);

const nodes = [
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
];

const e1 = new Edge(n1, n2, orange, 'region of citizenship');
const e2 = new Edge(n1, n3, red, 'foreign region');
const e3 = new Edge(n2, n4, orange, 'sold by family member');
const e4 = new Edge(n2, n5, blue, 'personal contact / other');
const e5 = new Edge(n3, n6, blue, 'African continent');
const e6 = new Edge(n3, n7, red, 'foreign continent');

const edges = [
  e1,
  e2,
  e3,
  e4,
  e5,
  e6,
];

const explanation = 'Enim blandit volutpat maecenas volutpat blandit. Viverra adipiscing at in tellus. Integer feugiat scelerisque varius morbi enim nunc. Accumsan lacus vel facilisis volutpat. Pretium fusce id velit ut tortor pretium viverra. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Id faucibus nisl tincidunt eget nullam non. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Ut aliquam purus sit amet luctus. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Turpis tincidunt id aliquet risus feugiat in. Ut sem nulla pharetra diam sit amet nisl suscipit. Pulvinar elementum integer enim neque volutpat ac tincidunt. Aliquam ut porttitor leo a diam sollicitudin tempor. Pellentesque massa placerat duis ultricies. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Quam nulla porttitor massa id neque. Ut morbi tincidunt augue interdum. Hac habitasse platea dictumst quisque sagittis purus sit amet.';

const legend = (
  <Legend style={{right: '5px', top: '5px'}}>
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
        </tbody>
      </table>
    </div>
  </Legend>
);

export default {
  title: 'West & Central Africa',
  key: 'graph3',
  nodes: nodes,
  edges: edges,
  width: 800,
  height: 480,
  explanation: explanation,
  legend: legend,
};
