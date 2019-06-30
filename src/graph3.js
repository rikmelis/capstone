import React from 'react';
import {Node, Edge} from 'test-graph';
import {red, blue, orange} from './graph_colors';
import Legend from './Legend';
import translate from './translate';

const t = k => translate(['graph3', k])

const n1 = new Node(t('region_of_exploitation'), 350, 60);
const n2 = new Node(t('initial_contact'), 150, 250);
const n3 = new Node(t('region_of_exploitation'), 550, 250);
n1.id = 1;
n2.id = 2;
n3.id = 3;

const roundNodesStyle = {
  padding: '15px',
  borderRadius: '50%',
}

const n4 = new Node(t('FL'), 50, 420, orange, '0.98 | 58%', roundNodesStyle);
const n5 = new Node(t('FL'), 250, 420, blue, '0.62 | 9%', roundNodesStyle);
const n6 = new Node(t('FL'), 450, 420, blue, '0.94 | 6%', roundNodesStyle);
const n7 = new Node(t('SE'), 650, 420, red, '0.83 | 27%', roundNodesStyle);

const nodes = [
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
];

const e1 = new Edge(n1, n2, orange, t('region_of_citizenship'));
const e2 = new Edge(n1, n3, red, t('foreign_region'));
const e3 = new Edge(n2, n4, orange, t('sold_by_family_member'));
const e4 = new Edge(n2, n5, blue, t('personal_contact_other'));
const e5 = new Edge(n3, n6, blue, t('african_continent'));
const e6 = new Edge(n3, n7, red, t('foreign_continent'));

const edges = [
  e1,
  e2,
  e3,
  e4,
  e5,
  e6,
];

const legend = (
  <Legend style={{right: '5px', top: '5px'}}>
    <div className={'content'}>
      <table>
        <tbody>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: orange}}>{t('FL')}</div></td>
            <td>{t('forced_labour_in_country_of_citizenship')}</td>
          </tr>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: blue}}>{t('FL')}</div></td>
            <td>{t('forced_labour_in_foreign_country')}</td>
          </tr>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: red}}>{t('SE')}</div></td>
            <td>{t('sexual_exploitation_in_foreign_country')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Legend>
);

export default {
  title: t('west_and_central_africa'),
  key: 'graph3',
  nodes: nodes,
  edges: edges,
  width: 800,
  height: 480,
  explanation: t('explanation'),
  legend: legend,
};
