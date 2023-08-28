import { Br, Division, TypeRoot, XElement } from 'type-dom.ts';
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
    this.createItems(this, [ // 添加子节点
      {
        TypeClass: Division, // 具体类，TypeClass 指定对应的类，要显式的引用，即import进来。
        propObj: {
          attrObj: { // 设置属性参数
            name: 'first-item'
          },
          styleObj: { // 设置样式
            padding: '10px',
            color: '#F00',
            background: '#FF0'
          }
        },
        childNodes: [ // 第一项子节点的子元素
          {
            nodeValue: ' hello world ! ' // 文本
          },
        ]
      },
      {
        template: `<div data-name='second-item' style='padding: 20px;color: #00F; background: #ddd'>
          title is   {{title}}
            <input :value='user.name' @input="onInput" @change="onChange"/>
            name: {{ user.name }} age is {{ user.age }}
            </div>`,
        data: {
          user: {
            name: 'helen',
            age: 27,
          },
          title: 'I am ok. ',
          input: 'abc'
        },
        methods: {
          onInput(evt: Event, bindItem: XElement) {
            console.log('onInput evt is ', evt);
            console.log('onInput bindItem is ', bindItem);
            const domValue = (bindItem.dom as HTMLInputElement).value;
            bindItem.setAttrObj({
              value: domValue
            });
            bindItem.tempItem.data.user.name = domValue;
            bindItem.nextSibling && bindItem.nextSibling.render();
          },
          onChange(evt: Event, bindItem: XElement) {
            console.log('onChange evt is ', evt);
            console.log('onChange bindItem is ', bindItem);
          }
        }
      },
      {
        TypeClass: Br // 换行
      }
    ]);
    this.createItem<XElement>(this,
      {
        template: `<p data-name='third-item' style='border: 1px solid #FF0;'> paragraph </p>`
      });
    // this.render();
  }
}
