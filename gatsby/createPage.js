const { resolve } = require('path');

// eslint-disable-next-line no-multi-assign
module.exports = exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectTemplate = resolve('src/templates/project.js');
  const acativityTemplate = resolve('src/templates/acativity.js');

  const allMarkdown = await graphql(`{
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
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
    const { slug } = node.fields;
    let template;

    if (slug.includes('projects/')) {
      template = projectTemplate;
    } else if (slug.includes('acativities/')) {
      template = acativityTemplate;
    }

    createPage({
      path: slug,
      component: template,
      context: { slug },
    });
  });
};
