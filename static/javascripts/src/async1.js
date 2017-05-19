async function f() {
  // return 'hello world!';
  throw new Error('出错了');
}

f().then(v => console.log(v), e => console.log(e));
