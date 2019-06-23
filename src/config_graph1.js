import Node from './graph/Node.js';
import Edge from './graph/Edge.js';

const red = '#C2514F';
const blue = '#1D487A';

const genderNode = new Node('gender', 100, 20);
const maritalStatusNode = new Node('marital status', 300, 250);
const recruitmentNode = new Node('recruitment', 100, 500);
const activityNode = new Node('believed activity', 480, 500);
genderNode.id = 1;
maritalStatusNode.id = 2;
recruitmentNode.id = 3;
activityNode.id = 4;

const roundNodesStyle = {
  padding: '15px',
  borderRadius: '50%',
}

const genderFLNode = new Node('FL', 30, 250, blue, '0.98 | 35%', roundNodesStyle);
const recruitmentFLNode = new Node('FL', 50, 650, blue, '0.73 | 14%', roundNodesStyle);
const recruitmentSENode = new Node('SE', 300, 650, red, '0.80 | 2%', roundNodesStyle);
const activityFLNode = new Node('FL', 450, 650, blue, '0.89 | 2%', roundNodesStyle);
const activitySENode = new Node('SE', 700, 650, red, '0.81 | 48%', roundNodesStyle);

export const nodes = [
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

export const edges = [
	genderToFL,
	genderToMarital,
	maritalToRecruitment,
	maritalToActivity,
	recruitmentToFL,
	recruitmentToSE,
	activityToFL,
	activityToSE,
];
