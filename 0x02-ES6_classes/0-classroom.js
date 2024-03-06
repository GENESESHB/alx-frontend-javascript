export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  set maxStudentsSize(newmaxStudentsSize) {
    if (typeof newmaxStudentsSize === 'number' && newmaxStudentsSize > 0) {
      this._maxStudentsSize = newmaxStudentsSize;
    }
  }
}
