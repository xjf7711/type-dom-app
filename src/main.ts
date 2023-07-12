import { debounce, debounceTime, switchMap, fromEvent, map, filter, Observable, Subscription, merge } from 'rxjs';
import './styles/index.scss';
import { AppRoot } from './app-root';
// 在页面中调用时

fromEvent(document, 'DOMContentLoaded').subscribe(e => {
  // console.log('document DOMContentLoaded, e is ', e);
  const el = document.querySelector('#app-ref') as HTMLElement;
  console.log('el is ', el);
  if (el) {
    const app = new AppRoot(el);
  }
});
