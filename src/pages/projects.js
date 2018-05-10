// @flow

import React from 'react';
import ProjectCard from '../components/projects/ProjectCard';

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
      data.allMarkdownRemark.edges.map(({ node: { id, frontmatter, fields } }) => (
        <ProjectCard
          frontmatter={frontmatter}
          fields={fields}
          key={id}
        />
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
