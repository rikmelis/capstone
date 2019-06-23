export default class Edge {
	constructor(fromNode, toNode, color, label) {
		this.from = fromNode;
		this.to = toNode;
		this.color = color;
		this.label = label;
    this.edgeLabelHeight = 18;

		this.to.parent = this.from;
	}

  isLeftEdge() {
    return this.from.x > this.to.x;
  }

  getX1() {
    return this.from.x + this.from.width / 2 - 10 + (this.isLeftEdge() ? 0 : 20);
  }

  getY1() {
    return this.from.y + this.from.height + 5;
  }

  getX2() {
    return this.isLeftEdge() ? this.to.x + this.to.width + 20 : this.to.x - 20;
  }

  getY2() {
    return this.to.y + this.to.height / 2;
  }

  getStyle() {
    return {stroke: this.color, opacity: this.to.highlighted ? 1.0 : 0.4};
  }

  getArrowStyle() {
    return {fill: this.color, opacity: this.to.highlighted ? 1.0 : 0.4};
  }

  getLabelStyle() {
    const style = {
      top: `${(this.getY1() + this.getY2()) / 2}px`,
      opacity: this.to.highlighted ? 1.0 : 0.4,
    };
    if (this.isLeftEdge()) {
      return {
        ...style,
        left: `${this.getX1() - 20 - 150}px`,
      }
    } else {
      return {
        ...style,
        left: `${this.getX1() + 20}px`,
      }
    }
  }

  getLabelBoxStyle() {
    return {
      textAlign: this.isLeftEdge() ? 'right' : 'left',
      top: `-${this.edgeLabelHeight / 2}px`,
    };
  }
}