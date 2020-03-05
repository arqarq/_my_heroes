const {exec, execSync} = require('child_process');
const fse = require('fs-extra');
const cmd00 = {cmd: 'if exist dist rmdir /q/s dist', opis: 'usunięcie folderu dist'};
const cmd0 = {cmd: 'xcopy src\\assets_common dist\\assets\\ /e', opis: 'kopiowanie assetów wspólnych'};
const cmd1 = {cmd: 'start npm run build-i18n:en:watch', opis: 'build en and watch'};
const cmd2 = {cmd: 'start npm run build-i18n:pl:watch', opis: 'build pl and watch'};
const cmd3 = {cmd: 'start http-server -p 80 -c-1 dist', opis: 'start server'};

function run(cmd) {
  const process = exec(cmd.cmd, (err) => printError(err, cmd.opis));
  console.log('"' + cmd.cmd + '", pid:', process.pid + ',', cmd.opis)
}

function runSync(cmd) {
  execSync(cmd.cmd);
  console.log('"' + cmd.cmd + '",', cmd.opis)
}

function printError(err, name) {
  err && console.log('node couldn\'t execute the command: "' + err.cmd + '" (' + name + ')');
}

runSync(cmd00);
runSync(cmd0);
run(cmd1);
const timeout1 = setTimeout(() => {
  clearTimeout(timeout1);
  run(cmd2)
}, 1000);
const interval = setInterval(() => {
  if (fse.existsSync('dist\\en') && fse.existsSync('dist\\pl') && fse.existsSync('dist\\assets')) {
    clearInterval(interval);
    run(cmd3)
  }
}, 2000);
