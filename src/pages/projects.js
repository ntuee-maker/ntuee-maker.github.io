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
            path: string,
            title: string,
            date: string,
          }
        }
      }>
    }
  }
};

const Projects = ({ data }: Props) => (
  <div className={styles.wrapper}>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <div className={styles.project} key={node.id}>
          <Link to={node.frontmatter.path}>{ node.frontmatter.title }</Link>
        </div>
      ))
    }
  </div>
);

export default Projects;

// $FlowIgnore
export const query = graphql`
  query ProjectQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MM, YYYY")
            path
          }
        }
      }
    }
  }
`;
