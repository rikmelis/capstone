import React from 'react';
import {Diagram as ReactDiagram} from 'react-graph-flow';

const isMobile = 'ontouchstart' in document.documentElement;

export default class Diagram extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevNode: null,
    };
  }

  componentWillUnmount() {
    if (this.state.prevNode) {
      this.state.prevNode.unhighlight();
    }
  }

  activate(node) {
    if (isMobile) {
      return {
        onClick: () => {
          if (this.state.prevNode) {
            this.state.prevNode.unhighlight();
          }
          node.highlight();
          this.setState({prevNode: node});
        }
      }
    } else {
      return {
        onMouseEnter: () => {
          node.highlight();
          this.forceUpdate();
        },
        onMouseLeave: () => {
          node.unhighlight();
          this.forceUpdate();
        },
      }
    }
  }

  render() {
    return (
      <ReactDiagram
        nodeProps={(node) => this.activate(node)}
        edgeProps={(edge) => this.activate(edge.to)}
        {...this.props}
      />
    );
  }
}