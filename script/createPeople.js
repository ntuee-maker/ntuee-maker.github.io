const shell = require('shelljs');
const { argv } = require('yargs');
const { error, done } = require('./log');

const { id, name, studentId } = argv;

if (id === undefined) {
  error('please specify your id');
  shell.exit(1);
}

if (shell.test('-e', `./content/people/${id}`) === true) {
  error('user already exists');
  shell.exit(1);
}

if (name === undefined) {
  error('please specify your name');
  shell.exit(1);
}

if (studentId === undefined) {
  error('please specify your studentId');
  shell.exit(1);
}

const md = `\
---
id: "${id}"
name: "${name}"
studentId: "${studentId || ''}"
---\
`;

shell.mkdir(`./content/people/${id}`);
shell.echo(md).to(`./content/people/${id}/index.md`);
done('Creating people successfully');
shell.exit(0);

