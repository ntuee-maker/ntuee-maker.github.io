const { resolve } = require('path');

// eslint-disable-next-line no-multi-assign
module.exports = exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectTemplate = resolve('src/templates/project.js');
  const eventTemplate = resolve('src/templates/event.js');
  const peopleTemplate = resolve('src/templates/people.js');

  const allMarkdown = await graphql(`{
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            authors
          }
          fields {
            slug
          }
        }
      }
    }
  }`);

  if (allMarkdown.errors) {
    // eslint-disable-next-line no-console
    console.error(allMarkdown.errors);
    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug: path } = node.fields;
    let component;
    let context;

    if (path.includes('/projects/')) {
      component = projectTemplate;
      context = { authors: `/(${node.frontmatter.authors.join('|')})/` };
    } else if (path.includes('/events/')) {
      component = eventTemplate;
      context = {};
    } else if (path.includes('/people/')) {
      component = peopleTemplate;
      context = {};
    } else {
      return;
    }

    Object.assign(context, { slug: path });

    createPage({
      path,
      component,
      context,
    });
  });
};
