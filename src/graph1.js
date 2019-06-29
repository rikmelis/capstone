import {Node, Edge} from 'test-graph';

const red = '#C2514F';
const blue = '#1D487A';

const genderNode = new Node('gender', 180, 50);
const maritalStatusNode = new Node('marital status', 370, 200);
const recruitmentNode = new Node('recruitment', 180, 400);
const activityNode = new Node('believed activity: factory work', 580, 400);
genderNode.id = 1;
maritalStatusNode.id = 2;
recruitmentNode.id = 3;
activityNode.id = 4;
// activityNode.style = {maxWidth: '165px'};

const roundNodesStyle = {
  padding: '15px',
  borderRadius: '50%',
}

const genderFLNode = new Node('FL', 60, 200, blue, '0.98 | 35%', roundNodesStyle);
const recruitmentFLNode = new Node('FL', 60, 550, blue, '0.73 | 14%', roundNodesStyle);
const recruitmentSENode = new Node('SE', 300, 550, red, '0.80 | 2%', roundNodesStyle);
const activityFLNode = new Node('FL', 450, 550, blue, '0.89 | 2%', roundNodesStyle);
const activitySENode = new Node('SE', 700, 550, red, '0.81 | 48%', roundNodesStyle);

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
