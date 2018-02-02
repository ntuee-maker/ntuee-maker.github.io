// @flow

import React, { Node } from 'react';
import Link, { withPrefix } from 'gatsby-link';

import styles from './Nav.module.scss';

const Hamburger = ({ children }: Node) => (
  <div className={styles['hamburger-wrapper']}>
    <input type="checkbox" id="hamburger-form" />
    <label htmlFor="hamburger-form" className={styles.hamburger}>
      <div className={styles.dummy} />
      {children}
      <div className={`${styles.spinner} ${styles.diagonal} ${styles.part1}`} />
      <div className={`${styles.spinner} ${styles.horizontal}`} />
      <div className={`${styles.spinner} ${styles.diagonal} ${styles.part2}`} />
    </label>
  </div>
);

type LinkProps = {
  links: Array<{ show: string, to: string }>,
  pathname: string,
}

const Links = ({ links, pathname }: LinkProps) => (
  <div className={styles.links}>
    {
      links.map(link => (
        <Link
          className={`${styles.link} ${withPrefix(link.to) === pathname ? styles.active : ''}`}
          to={link.to}
          id={link.show}
          key={link.show}
        />
      ))
    }
  </div>
);

type Props = {
  pathname: string,
};

const Nav = ({ pathname }: Props) => {
  const links = [
    { show: '', to: '/' },
    { show: 'About', to: '/' },
    { show: 'Project', to: '/projects' },
    { show: 'Acativity', to: '/acativitys' },
  ];

  return (
    <Hamburger>
      <Links links={links} pathname={pathname} />
    </Hamburger>
  );
};

export default Nav;
