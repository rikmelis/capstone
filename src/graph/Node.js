export default class Node {
  constructor(text, x, y, color, label, style={}) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.color = color;
    this.label = label;
    this.style = style;
    this.id = null;
    this.width = 0;
    this.height = 0;
    this.highlighted = false;
  }

  highlight() {
    this.highlighted = true;
    if (this.parent) {
      this.parent.highlight();
    }
  }

  unhighlight() {
    this.highlighted = false;
    if (this.parent) {
      this.parent.unhighlight();
    }
  }

  getColor() {
    return this.color || 'gray';
  }

  getStyle() {
    return {
      left: `${this.x}px`,
      top: `${this.y}px`,
      opacity: this.highlighted ? 1.0 : 0.4,
      backgroundColor: this.getColor(),
      ...this.style,
    };
  }

  getLabelStyle() {
    return {
      opacity: this.highlighted ? 1.0 : 0.4,
      color: this.getColor(),
    }
  }
}
