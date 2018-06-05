const { argv } = require('yargs');
const shell = require('shelljs');

const { id, name, studentId } = argv;

if (id === undefined) {
  shell.echo('Error: Please specify your id');
  shell.exit(1);
}

if (shell.test('-e', `./content/people/${id}`) === true) {
  shell.echo('Error: User already exists');
  shell.exit(1);
}

if (name === undefined) {
  shell.echo('Error: Please specify your name');
  shell.exit(1);
}

if (studentId === undefined) {
  shell.echo('Error: Please specify your studentId');
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
shell.exit(0);

