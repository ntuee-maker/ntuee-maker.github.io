const { createFilePath } = require('gatsby-source-filesystem');

// eslint-disable-next-line no-multi-assign
module.exports = exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'content',
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
