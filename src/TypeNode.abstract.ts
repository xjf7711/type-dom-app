import { ITypeNode } from './TypeNode.interface';

export abstract class TypeNode implements ITypeNode {
  abstract nodeName?: string;
  abstract nodeValue?: string;
  abstract childNodes?: TypeNode[];
  abstract dom?: Node;
  abstract render(): void;
}
