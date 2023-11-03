import { TypeNode } from '../TypeNode.abstract';
import { IXElement } from './XElement.interface';
import { TextNode } from '../text-node/TextNode.class';

export class XElement extends TypeNode implements IXElement {
  nodeName: string;
  nodeValue: undefined;
  childNodes?: TypeNode[];
  dom?: Node;
  constructor(option: IXElement) {
    super();
    console.log('XElement constructor . ');
    this.nodeName = option.nodeName;
    this.childNodes = option.childNodes
      ?.map(child => {
        if (child.nodeValue !== undefined) {
          return new TextNode(child.nodeValue);
        } else {
          return new XElement({
            nodeName: child.nodeName || 'div',
            childNodes: child.childNodes
          });
        }
      });
  }
  render() {
    this.dom = document.createElement(this.nodeName);
    if (this.childNodes !== undefined) {
      for (const child of this.childNodes) {
        child.render();
        if (child.dom) {
          this.dom.appendChild(child.dom);
        }
      }
    }
  }
}
