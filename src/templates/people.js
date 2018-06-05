// @flow

import React from 'react';

const People = ({ data }: { data: Object }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <div>{post.frontmatter.name}</div>
      <div>{post.frontmatter.id}</div>
      <div>{post.frontmatter.studentId}</div>
    </div>
  );
};

export default People;

// $FlowIgnore
export const query = graphql`
  query PeopleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        name
        studentId
      }
    }
  }
`;
