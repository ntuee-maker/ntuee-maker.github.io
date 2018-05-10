// @flow

import React from 'react';
import Link from 'gatsby-link';

type Props = {
  data: {
    project: {
      html: string,
      frontmatter: {
        title: string,
        date: string,
      },
    },
    authors: {
      edges: Array<{
        node: {
          frontmatter: {
            name: string,
            id: string,
          }
        }
      }>
    },
  },
};

const Project = ({ data: { project, authors } }: Props) => {
  const { html, frontmatter: { title, date } } = project;

  return (
    <div className="project__wrapper">
      <div className="project__section">
        <h1 className="project__title">{title}</h1>
        <div className="project__date">{date}</div>
      </div>
      <div
        className="project__section"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="project__section">
        <h2>Authors</h2>
        <div className="project__authors">
          {
            authors.edges.map(({ node: { frontmatter: { name, id } } }) => (
              <div className="project__author" key={id}>
                <img alt="" title={name} />
                <Link to={`/${id}`}>{name}</Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Project;

// $FlowIgnore
export const query = graphql`
  query ProjectDetailQuery($slug: String!, $authors: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MM DD, YYYY")
      }
    }
    authors: allMarkdownRemark(
      filter: { frontmatter: { id: { regex: $authors } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            id
          }
        }
      }
    }
  }
`;
