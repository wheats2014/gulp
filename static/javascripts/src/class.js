class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() { return `(${this.x}, ${this.y})`; }
  mm() {}
}

Object.assign(Point.prototype, {
  info() { console.log('this is info'); },
  toValue() { console.log('this is toValue'); }
});

let p = new Point(5, 6);
console.log(p);
p.info();
p.toValue();
