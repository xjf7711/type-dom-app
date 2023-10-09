/**
 * 引用类型与非引用类型 深拷贝方法
 * @param data
 */
export function deepClone<T>(data: T): T {
  if (typeof data !== 'object' || typeof data === 'function' || data === null) {
    return data;
  }
  let item: T;
  if (Array.isArray(data)) {
    item = [] as T;
  } else {
    item = {} as T;
  }
  for (const i in data) {
    if (Object.prototype.hasOwnProperty.call(data, i)) {
      (item as T)[i] = deepClone(data[i]);
    }
  }
  return item;
}
