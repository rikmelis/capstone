import Node from './graph/Node.js';
import Edge from './graph/Edge.js';

const red = '#C2514F';
const blue = '#1D487A';
const orange = '#F9964F';

const n1 = new Node('age', 320, 50);
const n2 = new Node('economic status', 150, 200);
const n3 = new Node('region of exploitation', 500, 200);
const n4 = new Node('gender', 650, 400);
const n5 = new Node('initial contact to recruiter', 450, 530);
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
const n9 = new Node('FL', 740, 530, blue, '0.90 | 2%', roundNodesStyle);
const n10 = new Node('FL', 270, 720, blue, '0.92 | <1%', roundNodesStyle);
const n11 = new Node('SE', 600, 720, red, '0.89 | 3%', roundNodesStyle);

export const nodes = [
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
const e2 = new Edge(n1, n3, blue, '> 38');
const e3 = new Edge(n2, n6, orange, 'very poor');
const e4 = new Edge(n2, n7, blue, 'poor / standard / well-off');
const e5 = new Edge(n3, n8, blue, 'Asia & P / North & Central America / America / East Africa / MENA / SEE & Central Asia');
const e6 = new Edge(n3, n4, red, 'EU & EEFA / Soutern Africa / West & Central Africa');
const e7 = new Edge(n4, n5, red, 'female');
const e8 = new Edge(n4, n9, blue, 'male');
const e9 = new Edge(n5, n10, blue, 'employment agency / internet advertisement / other');
const e10 = new Edge(n5, n11, red, 'personal contact');

export const edges = [
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
