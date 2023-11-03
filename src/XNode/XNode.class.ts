import { TypeNode } from '../TypeNode.abstract';
import { IXNode } from './XNode.interface';

export class XNode extends TypeNode implements IXNode {
  nodeName?: string;
  nodeValue?: string;
  childNodes?: TypeNode[];
  dom?: Node;
  constructor(option: IXNode) {
    super();
    this.nodeName = option.nodeName;
    this.nodeValue = option.nodeValue;
    this.childNodes = option.childNodes as TypeNode[];
  }
  render() {
    // const dom = document.createElement(this.nodeName);
    // const textNode = document.createTextNode(this.nodeValue);
    if (this.nodeValue !== undefined) {
      this.dom = document.createTextNode(this.nodeValue);
    } else if (this.nodeName !== undefined) {
      this.dom = document.createElement(this.nodeName);
      if (this.childNodes !== undefined) {
        this.childNodes = this.childNodes.map(child => {
          console.log('child is ', child);
          const childNode = new XNode(child);
          childNode.render();
          if (childNode.dom) {
            this.dom!.appendChild(childNode.dom);
          }
          return childNode;
        });
      }
    }
  }
}
