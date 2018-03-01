// @flow

import React from 'react';
import Link, { withPrefix } from 'gatsby-link';

import styles from './Navbar.module.scss';

const Navbar = ({ pathname }: { pathname: string }) => {
  const links = [
    { id: 'About', to: '/about' },
    { id: 'Project', to: '/projects' },
    { id: 'Acativity', to: '/acativities' },
  ];

  let bar: ?HTMLInputElement;

  const Hamburger = () => (
    <label htmlFor="hamburger">
      <div className={`${styles.ham}`} />
      <div className={`${styles.ham}`} />
      <div className={`${styles.ham}`} />
    </label>
  );

  return (
    <div className={styles.wrapper}>
      <input type="checkbox" id="hamburger" ref={(input) => { bar = input; }} />
      <Hamburger />
      <div className={styles.links}>
        {
          links.map(link => (
            <Link
              className={`${styles.link} ${pathname.includes(withPrefix(link.to)) ? styles.active : ''}`}
              onClick={() => { if (bar) { bar.checked = false; } }}
              key={link.id}
              {...link}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Navbar;
