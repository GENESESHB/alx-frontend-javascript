export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string' && typeof code === 'string') {
      this._name = name;
      this._code = code;
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
