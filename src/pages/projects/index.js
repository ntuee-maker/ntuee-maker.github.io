// @flow

import React from 'react';
import Link from 'gatsby-link';

import styles from './projects.module.scss';

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

const filter = ({ edges }) => (
  edges.filter(({ node }) => (
    new RegExp('^/projects/*').test(node.fields.slug)
  ))
);

const Projects = ({ data }: Props) => (
  <div className={styles.wrapper}>
    {
      filter(data.allMarkdownRemark).map(({ node }) => (
        <div className={styles.project} key={node.id}>
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
