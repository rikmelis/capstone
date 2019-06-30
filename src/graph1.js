import React from 'react';
import {Node, Edge} from 'test-graph';
import {red, blue} from './graph_colors';
import Legend from './Legend';
import translate from './translate';

const t = k => translate(['graph1', k])

const genderNode = new Node(t('gender'), 180, 50);
const maritalStatusNode = new Node(t('marital_status'), 370, 220);
const recruitmentNode = new Node(t('recruitment'), 180, 400);
const activityNode = new Node(t('believed_activity'), 580, 400);
genderNode.id = 1;
maritalStatusNode.id = 2;
recruitmentNode.id = 3;
activityNode.id = 4;
activityNode.style = {width: '190px', maxWidth: '190px'};

const roundNodesStyle = {
  padding: '15px',
  borderRadius: '50%',
}

const genderFLNode = new Node(t('FL'), 60, 220, blue, '0.98 | 35%', roundNodesStyle);
const recruitmentFLNode = new Node(t('FL'), 60, 550, blue, '0.73 | 14%', roundNodesStyle);
const recruitmentSENode = new Node(t('SE'), 300, 550, red, '0.80 | 2%', roundNodesStyle);
const activityFLNode = new Node(t('FL'), 450, 550, blue, '0.89 | 2%', roundNodesStyle);
const activitySENode = new Node(t('SE'), 700, 550, red, '0.81 | 48%', roundNodesStyle);

const nodes = [
  genderNode,
  maritalStatusNode,
  recruitmentNode,
  activityNode,
  genderFLNode,
  recruitmentFLNode,
  recruitmentSENode,
  activityFLNode,
  activitySENode,
];

const genderToFL = new Edge(genderNode, genderFLNode, blue, t('male_unknown'));
const genderToMarital = new Edge(genderNode, maritalStatusNode, red, t('female'));
const maritalToRecruitment = new Edge(maritalStatusNode, recruitmentNode, blue, t('married_widowed'));
const maritalToActivity = new Edge(maritalStatusNode, activityNode, red, t('common_law_divorced'));
const recruitmentToFL = new Edge(recruitmentNode, recruitmentFLNode, blue, t('yes'));
const recruitmentToSE = new Edge(recruitmentNode, recruitmentSENode, red, t('no'));
const activityToFL = new Edge(activityNode, activityFLNode, blue, t('yes'));
const activityToSE = new Edge(activityNode, activitySENode, red, t('no'));

const edges = [
	genderToFL,
	genderToMarital,
	maritalToRecruitment,
	maritalToActivity,
	recruitmentToFL,
	recruitmentToSE,
	activityToFL,
	activityToSE,
];

const legend = (
  <Legend style={{maxWidth: '360px', right: '5px', top: '5px'}}>
    <div className={'content'}>
      <table>
          <tbody>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: blue}}>{t('FL')}</div></td>
            <td>{t('forced_labour')}</td>
          </tr>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: red}}>{t('SE')}</div></td>
            <td>{t('sexual_exploitation')}</td>
          </tr>
          <tr>
            <td><b>{t('SEE')}</b></td>
            <td>{t('south_eastern_europe')}</td>
          </tr>
        </tbody>
      </table>
      {t('activity_at_destination')}
    </div>
  </Legend>
);

export default {
  title: t('SEE_and_central_asia'),
  key: 'graph1',
  nodes: nodes,
  edges: edges,
  width: 800,
  height: 620,
  explanation: t('explanation'),
  legend: legend,
};
