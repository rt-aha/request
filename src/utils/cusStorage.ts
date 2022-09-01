type setItemVal = string | number | boolean | Array<any> | {[key: string]: any}

type TypeCusStorage = {
  prefix: string,
  setItem: (key: string, val: setItemVal ) => void,
  getItem: (key: string) => any,
  removeItem: (key: string, callback: () => any) => void,
  clearAll: () => void,
}

const cusStorage: TypeCusStorage = {
  prefix: 'qiyu_',
  setItem(key: string, val: any) {
    const jsonVal = JSON.stringify(val);
    localStorage.setItem(`${this.prefix}${key}`, jsonVal);
  },
  getItem(key: string) {
    const parseVal = localStorage.getItem(`${this.prefix}${key}`) || '';
    return parseVal !== '' ? JSON.parse(parseVal) : null;
  },
  removeItem(key: string, callback: any) {
    localStorage.removeItem(`${this.prefix}${key}`);

    if (callback) {
      callback();
    }
  },
  clearAll() {
    localStorage.clearAll();
  },
};

export default cusStorage;
