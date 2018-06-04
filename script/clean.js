const shell = require('shelljs');

const cleanPublic = () => {
  if (shell.test('-e', './public') === false) {
    shell.echo('Directory public doesn\'t exit, create one...');
    shell.mkdir('./public');
  } else {
    shell.echo('Cleaning public...');
    shell.rm('-rf', './public/*');
  }
};

const cleanCache = () => {
  if (shell.test('-e', './.cache') === true) {
    shell.echo('Cleaning cache...');
    shell.rm('-rf', './.cache');
  }
};

cleanPublic();
cleanCache();

shell.echo('Finish Cleaning!');
shell.exit(0);
