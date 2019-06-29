import React from 'react';
import {Node, Edge} from 'test-graph';
import {red, blue} from './graph_colors';
import Legend from './Legend';

const genderNode = new Node('gender', 180, 50);
const maritalStatusNode = new Node('marital status', 370, 220);
const recruitmentNode = new Node('recruitment', 180, 400);
const activityNode = new Node('believed activity**: factory work', 580, 400);
genderNode.id = 1;
maritalStatusNode.id = 2;
recruitmentNode.id = 3;
activityNode.id = 4;
activityNode.style = {width: '170px', maxWidth: '170px'};

const roundNodesStyle = {
  padding: '15px',
  borderRadius: '50%',
}

const genderFLNode = new Node('FL', 60, 220, blue, '0.98 | 35%', roundNodesStyle);
const recruitmentFLNode = new Node('FL', 60, 550, blue, '0.73 | 14%', roundNodesStyle);
const recruitmentSENode = new Node('SE', 300, 550, red, '0.80 | 2%', roundNodesStyle);
const activityFLNode = new Node('FL', 450, 550, blue, '0.89 | 2%', roundNodesStyle);
const activitySENode = new Node('SE', 700, 550, red, '0.81 | 48%', roundNodesStyle);

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

const genderToFL = new Edge(genderNode, genderFLNode, blue, 'male / unknown');
const genderToMarital = new Edge(genderNode, maritalStatusNode, red, 'female');
const maritalToRecruitment = new Edge(maritalStatusNode, recruitmentNode, blue, 'married / widowed');
const maritalToActivity = new Edge(maritalStatusNode, activityNode, red, 'common law / divorced / separated / single');
const recruitmentToFL = new Edge(recruitmentNode, recruitmentFLNode, blue, 'yes');
const recruitmentToSE = new Edge(recruitmentNode, recruitmentSENode, red, 'no');
const activityToFL = new Edge(activityNode, activityFLNode, blue, 'yes');
const activityToSE = new Edge(activityNode, activitySENode, red, 'no');

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

const explanation = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo in vitae turpis. Fames ac turpis egestas integer. Et magnis dis parturient montes nascetur ridiculus mus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Tincidunt arcu non sodales neque sodales ut. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Arcu risus quis varius quam quisque id. Ultrices vitae auctor eu augue ut lectus. Ultrices tincidunt arcu non sodales neque. Elementum tempus egestas sed sed risus pretium quam. Dictum sit amet justo donec enim diam. Aliquam faucibus purus in massa tempor. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Consequat mauris nunc congue nisi. Vitae semper quis lectus nulla at volutpat diam ut.';

const legend = (
  <Legend style={{maxWidth: '360px', right: '5px', top: '5px'}}>
    <div className={'content'}>
      <table>
          <tbody>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: blue}}>FL</div></td>
            <td>forced labour</td>
          </tr>
          <tr>
            <td><div className={'circle'} style={{backgroundColor: red}}>SE</div></td>
            <td>sexual exploitation</td>
          </tr>
          <tr>
            <td><b>SEE</b></td>
            <td>South Eastern Europe</td>
          </tr>
        </tbody>
      </table>
      ** Activity at destination the victim believed to undertake (prior to entering the trafficking process)
    </div>
  </Legend>
);

export default {
  title: 'SEE & Central Asia',
  key: 'graph1',
  nodes: nodes,
  edges: edges,
  width: 800,
  height: 620,
  explanation: explanation,
  legend: legend,
};
