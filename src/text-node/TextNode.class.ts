import { TypeNode } from '../TypeNode.abstract';
import { ITextNode } from './TextNode.interface';
export class TextNode extends TypeNode implements ITextNode {
  nodeName: undefined;
  childNodes: undefined;
  nodeValue: string;
  dom?: Text;
  constructor(text = '') {
    super();
    this.nodeValue = text;
  }
  render() {
    this.dom = document.createTextNode(this.nodeValue);
  }
}
