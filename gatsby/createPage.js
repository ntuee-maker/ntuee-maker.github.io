/* eslint-disable no-multi-assign */
const { resolve } = require('path');

module.exports = exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectTemplate = resolve('src/templates/project-detail.js');

  const allMarkdown = await graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            title
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
    const { slug } = node.fields;
    let template;

    if (slug.includes('projects/')) {
      template = projectTemplate;
    }

    createPage({
      path: node.fields.slug,
      component: template,
      context: { slug: node.fields.slug },
    });
  });
};
