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

const Projects = ({ data }: Props) => (
  <div className="projects__wrapper">
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="projects__project" key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
      ))
    }
  </div>
);

export default Projects;

// $FlowIgnore
export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/\/projects\//" } } }
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
