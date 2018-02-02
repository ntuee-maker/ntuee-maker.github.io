import React from 'react';

import styles from './projects.module.scss';

const data = [
  { title: 'P1' },
  { title: 'P2' },
  { title: 'P3' },
  { title: 'P4' },
  { title: 'P5' },
];

const Projects = () => (
  <div className={styles.wrapper}>
    {
      data.map(d => (
        <div className={styles.project}>
          {d.title}
        </div>
      ))
    }
  </div>
);

export default Projects;
