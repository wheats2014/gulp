let name = 'wheats';
let age = 10;
let sex = '男';

class Person {
  constructor() {}
  hello() { console.log('a') }
}
export function add(x, y) { console.log("x + y: " + (x + y)); }
export {name, age, sex, name as nnn}
