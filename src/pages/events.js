// @flow

import React from 'react';
import Link from 'gatsby-link';

type Props = {
  data: {
    allMarkdownRemark: {
      totalCount: number,
      edges: Array<{
        node: {
          id: string,
          frontmatter: {
            title: string,
            date: string,
          },
          fields: {
            slug: string,
          },
        }
      }>
    }
  }
};

const Events = ({ data }: Props) => (
  <div className="events__wrapper">
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="events_event" key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
      ))
    }
  </div>
);

export default Events;

// $FlowIgnore
export const query = graphql`
  query EventsQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/\/events\//" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
