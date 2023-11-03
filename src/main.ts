import { fromEvent } from 'rxjs';
import { XNode, XElement } from 'type-dom.ts';
import { AppElement } from './app-element';
import './styles/index.scss';
// import {XElement} from "./x-element/XElement.class";
// import {XNode} from "./XNode/XNode.class";
fromEvent(document, 'DOMContentLoaded').subscribe(() => {
  // console.log('document DOMContentLoaded, e is ', e);
  const el = document.querySelector('#app-ref') as HTMLElement;
  console.log('el is ', el);
  if (el) {
    const app = new AppElement({ el });
    app.render();

    const xEl = new XElement({
      nodeName: 'div',
      childNodes: [
        {
          nodeValue: 'first text . '
        },
        {
          nodeName: 'div',
          childNodes: [
            { nodeValue: 'second text . ' },
          ]
        }
      ]
    });
    console.log('xEl is ', xEl);
    xEl.render();
    if (xEl.dom) {
      document.body.append(xEl.dom);
    }

    const xNode = new XNode({
      nodeName: 'div',
      childNodes: [
        { nodeValue: 'hello postcss in xNode . ' },
        {
          nodeName: 'div',
          childNodes: [
            { nodeValue: 'child xNode . ' }
          ]
        }
      ]
    });
    xNode.render();
    console.log('xNode is ', xNode);
    if (xNode.dom) {
      document.body.append(xNode.dom);
    }
  }
});
