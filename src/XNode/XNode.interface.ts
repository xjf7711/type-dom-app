import { ITypeNode } from '../TypeNode.interface';
import { TypeNode } from '../TypeNode.abstract';


export interface IXNode extends ITypeNode {
  dom?: Node;
}
