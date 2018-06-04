const { argv } = require('yargs');
const shell = require('shelljs');

const { id, name, github } = argv;

if (id === undefined) {
  shell.echo('Error: Please specify your student ID');
  shell.exit(1);
}

if (shell.test('-e', `./content/users/${id}`) === true) {
  shell.echo('Error: User already exists');
  shell.exit(1);
}

if (name === undefined) {
  shell.echo('Error: Please specify your name');
  shell.exit(1);
}

const md = `\
---
id: ${id}
name: ${name}
github: ${github || '""'}
---\
`;


shell.mkdir(`./content/users/${id}`);
shell.echo(md).to(`./content/users/${id}/index.md`);
shell.exit(0);

