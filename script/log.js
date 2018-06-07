const shell = require('shelljs');
const { bgGreen, black, green, red } = require('chalk');

const done = (log) => {
  shell.echo(`${bgGreen(black(' DONE '))} ${green(log)}`);
};

const error = (log) => {
  shell.echo(`${red('error')} ${log}`);
};

const success = (log) => {
  shell.echo(`${green('success')} ${log}`);
};

module.exports = { done, error, success };
