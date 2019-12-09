const {exec} = require('child_process');
const fse = require('fs-extra');
const cmd1 = 'start npm run build-i18n:en:watch';
const cmd2 = 'start npm run build-i18n:pl:watch';
const cmd3 = 'start http-server -p 80 -c-1 dist';
const MAX_WAIT_MS = 60000;

function run1() {
  exec(cmd1, (err) => {
    if (err) printError(err, run1.name)
  });
}

function run2() {
  exec(cmd2, (err) => {
    if (err) printError(err, run2.name)
  });
}

function run3() {
  exec(cmd3, (err) => {
    if (err) printError(err, run3.name)
  });
}

function printError(err, funcName) {
  console.log('node couldn\'t execute the command: "' + err.cmd + '" (' + funcName + ')')
}

run1();
console.log('run1: "' + cmd1 + '"');
const timeout = setTimeout(() => {
  const del = function () {
    clearTimeout(timeout);
    console.log('run2: "' + cmd2 + '"')
  };

  run2();
  del()
}, 1000);
const interval = setInterval(() => {
  if (fse.existsSync('dist\\en') && fse.existsSync('dist\\pl')) {
    run3();
    clearInterval(interval);
    console.log('run3: "' + cmd3 + '"')
  }
}, 1000);
const timeout2 = setTimeout(() => {
  clearInterval(interval);
  clearTimeout(timeout2)
}, MAX_WAIT_MS);
