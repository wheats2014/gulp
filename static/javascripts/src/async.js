
let readFile =
    function({url = url, data = {}, type = 'get', dataType = 'json'}) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url : url,
      type : type,
      data : data,
      dataType : dataType,
      success : function(data) { resolve(data); },
      error : function(data) { reject(data); }
    });
  });
}

// let gen = function * () {
//   let f1 = yield readFile('/1.json');
//   let f2 = yield readFile('/2.json');
//   console.log(f1);
//   console.log(f2);
// }
//
// var it = gen();
// it.next();
// it.next();
// it.next();
//
//
let asyncReadFile =
    async function() {
      var f1 = await readFile({url : '/1.json'});
      var f2 = await readFile({url : '/2.json', data : f1});
      return f2;
    }

    asyncReadFile()
        .then((data) => { console.log(data); })
        .catch((err) => { console.log('系统繁忙，操作失败'); });
