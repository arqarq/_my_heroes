const fse = require('fs-extra');
const P = 'package.json';
const N = 'ngsw-config.json';
const Params = Object.freeze({
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

const otherOpt = function () {
  tabOfNumbers = param.toString();
};

process.argv.forEach((val, index, obj) => {
  console.log(`${index}: ${val} / ${obj}`);
});
let param = process.argv.slice(2);
if (param.length) {
  param = param[0].toLowerCase();
}
const pkgData = fse.readFileSync(P, 'utf8');
const pkgObj = JSON.parse(pkgData);
const pkgVer = pkgObj.version;
console.log('wersja w \x1b[33m[%s]\x1b[0m: \x1b[33m\x1b[1m%s\x1b[0m', P, pkgVer);
const ngswData = fse.readFileSync(N, 'utf8');
const ngswObj = JSON.parse(ngswData);
const ngswVer = ngswObj.appData.ver;
console.log('wersja w \x1b[33m[%s]\x1b[0m: \x1b[33m\x1b[1m%s\x1b[0m', N, ngswVer);
console.log('wersje równe? \x1b[33m\x1b[1m%s\x1b[0m', pkgVer === ngswVer ? 'tak' : 'nie');
let tabOfNumbers = pkgVer.split('.');
if (tabOfNumbers.length !== 3) {
  tabOfNumbers = [0, 0, 0];
} else {
  if (!tabOfNumbers.every((el) => !Number.isNaN(+el))
  ) {
    tabOfNumbers = [0, 0, 0];
  }
}
switch (param) {
  case Params.MAJOR:
    majorOpt();
    console.log('zwiększono o jeden \x1b[33mMAJOR\x1b[0m, wyzerowano \x1b[33mMINOR\x1b[0m i' +
      ' \x1b[33mPATCH\x1b[0m: \x1b[33m\x1b[1m%s\x1b[0m', tabOfNumbers);
    break;
  case Params.MINOR:
    minorOpt();
    console.log('zwiększono o jeden \x1b[33mMINOR\x1b[0m, wyzerowano \x1b[33mPATCH\x1b[0m:' +
      ' \x1b[33m\x1b[1m%s\x1b[0m', tabOfNumbers);
    break;
  case Params.PATCH:
    patchOpt();
    console.log('zwiększono o jeden \x1b[33mPATCH\x1b[0m: \x1b[33m\x1b[1m%s\x1b[0m', tabOfNumbers);
    break;
  default:
    otherOpt();
    console.log('nie podano pasującej opcji, więc ustawiono to, co \x1b[33mpodano\x1b[0m: \x1b[33m\x1b[1m%s\x1b[0m',
      tabOfNumbers);
}
pkgObj.version = tabOfNumbers;
fse.writeFileSync(P, JSON.stringify(pkgObj, null, 2) + '\n', {encoding: 'utf8'});
ngswObj.appData.ver = tabOfNumbers;
fse.writeFileSync(N, JSON.stringify(ngswObj, null, 2) + '\n', {encoding: 'utf8'});
