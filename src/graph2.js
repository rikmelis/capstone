import React from 'react';
import {Node, Edge, Graph} from 'react-graph-flow';
import {red, blue, orange} from './graph_colors';
import Legend from './Legend';
import translate from './translate';

const t = k => translate(['graph2', k]);

const n1 = new Node(t('age'), 320, 50);
const n2 = new Node(t('economic_status'), 130, 200);
const n3 = new Node(t('region_of_exploitation'), 530, 200);
const n4 = new Node(t('gender'), 665, 400);
const n5 = new Node(t('initial_contact'), 500, 550);
n1.showId = true;
n2.showId = true;
n3.showId = true;
n4.showId = true;
n5.showId = true;

const roundNodesStyle = {
  padding: '15px',
  borderRadius: '50%',
};

const n6 = new Node(t('FL'), 50, 400, orange, '0.80 | 4%', roundNodesStyle);
const n7 = new Node(t('FL'), 230, 400, blue, '0.75 | 15%', roundNodesStyle);
const n8 = new Node(t('FL'), 400, 400, blue, '0.92 | 75%', roundNodesStyle);
const n9 = new Node(t('FL'), 745, 550, blue, '0.90 | 2%', roundNodesStyle);
const n10 = new Node(t('FL'), 350, 740, blue, '0.92 | <1%', roundNodesStyle);
const n11 = new Node(t('SE'), 650, 740, red, '0.89 | 3%', roundNodesStyle);

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

const e1 = new Edge(n1, n2, blue, t('less_than_38'));
const e2 = new Edge(n1, n3, blue, t('more_than_38'));
const e3 = new Edge(n2, n6, orange, t('very_poor'));
const e4 = new Edge(n2, n7, blue, t('poor_standard'));
const e5 = new Edge(n3, n8, blue, t('asia_p'));
const e6 = new Edge(n3, n4, red, t('eu_eea'));
const e7 = new Edge(n4, n5, red, t('female'));
const e8 = new Edge(n4, n9, blue, t('male'));
const e9 = new Edge(n5, n10, blue, t('employment_agency'));
const e10 = new Edge(n5, n11, red, t('personal_contact'));

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

const legend = (
  <Legend style={{left: '5px', bottom: '5px'}}>
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
            <td>{t('sexual_exploitation')}</td>
          </tr>
          <tr>
            <td><b>{t('P')}</b></td>
            <td>{t('pacific')}</td>
          </tr>
          <tr>
            <td><b>{t('MENA')}</b></td>
            <td>{t('middle_east_and_north_africa')}</td>
          </tr>
          <tr>
            <td><b>{t('SEE')}</b></td>
            <td>{t('south_eastern_europe')}</td>
          </tr>
          <tr>
            <td><b>{t('EU')}</b></td>
            <td>{t('european_union')}</td>
          </tr>
          <tr>
            <td><b>{t('EEA')}</b></td>
            <td>{t('european_economic_area')}</td>
          </tr>
        </tbody>
      </table>
      {t('age_at_entry')}
    </div>
  </Legend>
);

export default {
  title: t('asia_and_the_pacific'),
  key: 'graph2',
  graph: new Graph(nodes, edges, 800, 800),
  explanation: t('explanation'),
  legend: legend,
};