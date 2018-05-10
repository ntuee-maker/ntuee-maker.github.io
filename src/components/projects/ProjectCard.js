// @flow

import React from 'react';
import Link from 'gatsby-link';

type Props = {
  frontmatter: {
    title: string,
    date: string,
  },
  fields: {
    slug: string,
  },
}

const ProjectCard = ({ frontmatter, fields }: Props) => (
  <div className="projects__card">
    <Link to={fields.slug}>{frontmatter.title}</Link>
  </div>
);

export default ProjectCard;
