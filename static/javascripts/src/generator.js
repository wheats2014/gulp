function timeout(ms) {
  return new Promise((resolve) => { setTimeout(resolve, ms); });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 50);

//
// function * foo() {
//   yield 'a';
//   yield 'b';
// }
//
// function * bar() {
//   yield 'x';
//   yield * foo();
//   yield 'y';
// }
//
// for (let v of bar()) {
//   console.log(v);
// }

// var g = function * () {
//   try {
//     yield;
//   } catch (e) {
//     console.log('内部错误', e);
//   }
// }
// var i = g();
// i.next();
// try {
//   i.throw('a');
//   i.throw('b');
// } catch (e) {
//   console.log('外部错误', e);
// }

// function * foo() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return 6;
// }
//
// for (let v of foo()) {
//   console.log(v);
// }

// var myIterator = {};
// myIterator[Symbol.iterator] = function * () {
//   yield 1;
//   yield 2;
//   yield 3;
// };
// var g = [...myIterator ];
// console.log(g);

// function * helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }
//
// var hw = helloWorldGenerator();
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
