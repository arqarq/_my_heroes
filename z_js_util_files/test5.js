let fse;
let fse2;
const A = fse = require('child_process');
const B = {fse2} = require('child_process');
const BB = {readFileSync} = require('fs-extra');

console.log(A);
console.log(B);
console.log(JSON.stringify(A) === JSON.stringify(B));

const C = Object.assign({}, require('fs'));

console.log(typeof C == 'function');
console.log(typeof readFileSync === 'function', typeof BB === 'object');

const {exec} = require('child_process');

console.log(typeof exec);
exec('start calc', (err, stdout, stderr) => {
  if (err) {
    console.log('Nie udało się! Komunikat:', stderr);
    return
  }
  console.log('Udało się! Komunikat:', stdout)
});

let {var2, var3} = {var2: (p) => console.log(p), var3: 3};
var2('-- abc');
console.log(var3);
var3 = 4;
console.log(var3);

const b = require('child_process');
b.execSync('start cmd');
