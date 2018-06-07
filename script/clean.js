const shell = require('shelljs');
const { success, done } = require('./log');

const cleanPublic = () => {
  if (shell.test('-e', './public') === true) {
    shell.rm('-rf', './public/*');
    success('cleaning public');
  }
};

const cleanCache = () => {
  if (shell.test('-e', './.cache') === true) {
    shell.rm('-rf', './.cache/*');
    success('cleaning cache');
  }
};

cleanPublic();
cleanCache();

done('Finish cleaning!\n');
shell.exit(0);
