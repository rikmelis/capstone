import {Node, Edge} from 'test-graph';

const red = '#C2514F';
const blue = '#1D487A';
const orange = '#F9964F';

const n1 = new Node('region of exploitation', 400, 60);
const n2 = new Node('initial contact to recruiter', 200, 230);
const n3 = new Node('region of exploitation', 600, 230);
n1.id = 1;
n2.id = 2;
n3.id = 3;

const roundNodesStyle = {
  padding: '15px',
  borderRadius: '50%',
}

const n4 = new Node('FL', 100, 400, orange, '0.98 | 58%', roundNodesStyle);
const n5 = new Node('FL', 300, 400, blue, '0.62 | 9%', roundNodesStyle);
const n6 = new Node('FL', 500, 400, blue, '0.94 | 6%', roundNodesStyle);
const n7 = new Node('SE', 700, 400, red, '0.83 | 27%', roundNodesStyle);

export const nodes = [
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

export const edges = [
  e1,
  e2,
  e3,
  e4,
  e5,
  e6,
];