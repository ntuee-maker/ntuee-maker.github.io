// @flow

import React from 'react';

const Template = ({ data }: { data: Object }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <div>{ post.frontmatter.title }</div>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export default Template;

// $FlowIgnore
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MM DD, YYYY")
        path
        title
      }
    }
  }
`;
