// @flow

import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import Slider from '../components/projects/Slider';

type Props = {
  data: {
    project: {
      html: string,
      frontmatter: {
        title: string,
        date: string,
      },
    },
    projectImage: {
      edges: Array<{
        node: {
          sizes: Object,
          id: string,
        }
      }>
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
    authorsImage: {
      edges: Array<{
        node: {
          sizes: Object,
          id: string,
        }
      }>
    }
  },
};

const Project = ({ data }: Props) => {
  const { project: { html, frontmatter: { title, date } } } = data;
  let authors = [];
  let projectImage = [];
  const authorsImage = {};

  if (data.projectImage) {
    projectImage = data.projectImage.edges.map(({ node: { id, sizes } }) => ({ id, sizes }));
  }
  if (data.authorsImage) {
    for (let i = 0, l = data.authorsImage.edges.length; i < l; i += 1) {
      const { node } = data.authorsImage.edges[i];
      authorsImage[node.id.substr(node.id.indexOf('people')).split('/')[1]] = node.sizes;
    }
  }
  if (data.authors) {
    authors = data.authors.edges.map(({ node: { frontmatter: { name, id } } }) => ({
      name, id, sizes: authorsImage[id],
    }));
  }

  return (
    <div className="project__wrapper">
      <div className="project__section">
        <h1 className="project__title">{title}</h1>
        <h3 className="project__date">{date}</h3>
      </div>
      {
        projectImage.length !== 0 ? (
          <div className="project__section">
            <Slider>
              {projectImage.map(({ id, sizes }) => <Img sizes={sizes} key={id} />)}
            </Slider>
          </div>
        ) : <div />
      }
      <div className="project__section">
        <div
          className="project__md"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div className="project__section">
        <h2>Authors</h2>
        <div className="project__authors">
          {
            authors.map(({ name, id, sizes }) => (
              <div className="project__author" key={id}>
                <Img sizes={sizes} outerWrapperClassName="project__author__img" />
                <Link to={`/people/${id}`}>{name}</Link>
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
    projectImage: allImageSharp (
      filter: { id: { regex: $slug } }
    ) {
      edges {
        node {
          id
          sizes {
            base64
            tracedSVG
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
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
    authorsImage: allImageSharp (
      filter: { id: { regex: $authors } }
    ) {
      edges {
        node {
          id
          sizes {
            base64
            tracedSVG
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  }
`;
