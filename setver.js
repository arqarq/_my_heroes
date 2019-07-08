'use strict';
const fs = require('fs');
const P = 'package.json';
const N = 'ngsw-config.json';
const Opcje = Object.freeze({
  MAJOR: 'major',
  MINOR: 'minor',
  PATCH: 'patch'
});

const majorOpt = function () {
  tabOfNumbers[0]++;
  tabOfNumbers[1] = 0;
  tabOfNumbers[2] = 0;
  tabOfNumbers = tabOfNumbers.join('.');
};

const minorOpt = function () {
  tabOfNumbers[1]++;
  tabOfNumbers[2] = 0;
  tabOfNumbers = tabOfNumbers.join('.');
};

const patchOpt = function () {
  tabOfNumbers[2]++;
  tabOfNumbers = tabOfNumbers.join('.');
};

process.argv.forEach((val, index, obj) => {
  console.log(`${index}: ${val} / ${obj}`);
});
let param = process.argv.slice(2);
if (param.length) {
  param = param[0].toLowerCase();
}
const pkgData = fs.readFileSync(P, {encoding: 'utf8'});
const pkgObj = JSON.parse(pkgData);
const pkgVer = pkgObj.version;
console.log('wersja w \x1b[33m[%s]\x1b[0m: \x1b[33m\x1b[1m%s\x1b[0m', P, pkgVer);
const ngswData = fs.readFileSync(N, {encoding: 'utf8'});
const ngswObj = JSON.parse(ngswData);
const ngswVer = ngswObj.appData.ver;
console.log('wersja w \x1b[33m[%s]\x1b[0m: \x1b[33m\x1b[1m%s\x1b[0m', N, ngswVer);
console.log('wersje równe? \x1b[33m\x1b[1m%s\x1b[0m', pkgVer === ngswVer ? 'tak' : 'nie');
let tabOfNumbers = pkgVer.split('.');
switch (param) {
  case Opcje.MAJOR:
    majorOpt();
    console.log('zwiększono o jeden \x1b[33mMAJOR\x1b[0m, wyzerowano resztę: \x1b[33m\x1b[1m%s\x1b[0m', tabOfNumbers);
    break;
  case Opcje.MINOR:
    minorOpt();
    console.log('zwiększono o jeden \x1b[33mMINOR\x1b[0m, wyzerowano resztę: \x1b[33m\x1b[1m%s\x1b[0m', tabOfNumbers);
    break;
  case Opcje.PATCH:
    patchOpt();
    console.log('zwiększono o jeden \x1b[33mPATCH\x1b[0m: \x1b[33m\x1b[1m%s\x1b[0m', tabOfNumbers);
    break;
  default:
    patchOpt();
    console.log('nie podano parametru, więc zwiększono o jeden \x1b[33mPATCH\x1b[0m: \x1b[33m\x1b[1m%s\x1b[0m', tabOfNumbers);
}
pkgObj.version = tabOfNumbers;
fs.writeFileSync(P, JSON.stringify(pkgObj, null, 2) + '\r\n', {encoding: 'utf8'});
ngswObj.appData.ver = tabOfNumbers;
fs.writeFileSync(N, JSON.stringify(ngswObj, null, 2) + '\r\n', {encoding: 'utf8'});
