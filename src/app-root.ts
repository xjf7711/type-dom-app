import { Division, TypeRoot } from 'type-dom.ts';
/**
 * 应用类，挂载全局属性和方法。
 * 根节点，继承 TypeRoot;
 * 因为属性和方法要全局调用，所以全部设置为静态 static; 包括get也设置为静态
 */
export class AppRoot extends TypeRoot {
  className: 'AppRoot';
  static el: HTMLElement;
  constructor(editorEl: HTMLElement) {
    super(editorEl);
    this.className = 'AppRoot';
    this.addStyleObj({
      padding: '30px',
      border: '20px solid #dddddd'
    });
    AppRoot.el = editorEl;
    this.events = [];
    this.createItem(this, {
      TypeClass: Division,
      childNodes: [
        {
          nodeValue: 'Hello world ! ' // 文本节点
        }
      ]
    });
    this.render();
  }
}
