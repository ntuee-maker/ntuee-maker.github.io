const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectTemplate = path.resolve('src/templates/project-detail.js');

  return graphql(`{
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
            path
            title
          }
        }
      }
    }
  }`) // eslint-disable-next-line consistent-return
    .then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: projectTemplate,
            context: {},
          });
        });
    });
};
