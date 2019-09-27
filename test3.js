function template(stringz, ...keyz) {
  return (function (...valuez) {
    var dict = valuez[valuez.length - 1] || {};
    console.log('-', dict);
    var result = [stringz[0]];
    keyz.forEach(function (key, i) {
      var value = Number.isInteger(key) ? valuez[key] : dict[key];
      result.push(value, stringz[i + 1])
    });
    return result.join('')
  })
}

var t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure('Y', 'A'));  // "YAY!"
console.log('------------------------');
var t2Closure = template`${0} ${'foo'}!`;
console.log(t2Closure('Hello', {foo: 'World'}));  // "Hello World!"
console.log('------------------------');
console.log(t2Closure({fooo: 'World'}));
console.log('------------------------');
console.log(t2Closure({foo: 'World'}));
console.log('------------------------');
console.log(t2Closure());
console.log('------------------------');

var string = String.raw`//\\\n\t\s\d\r\%`;
console.log(string.split('').join(','));
console.log('------------------------');

function tag(stringz) {
  console.log('cooked:', stringz[0], '\nraw:', stringz.raw[0]);
}

tag`aBc\nDeF\r
gHi`;
console.log('---');
tag`\unicode`;
console.log('------------------------');
