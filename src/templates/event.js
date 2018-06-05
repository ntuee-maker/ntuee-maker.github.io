// @flow

import React from 'react';

const Event = ({ data }: { data: Object }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <div>{post.frontmatter.title}</div>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export default Event;

// $FlowIgnore
export const query = graphql`
  query EventQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MM DD, YYYY")
      }
    }
  }
`;
