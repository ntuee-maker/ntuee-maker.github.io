// @flow

import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import Icon from './Icon';
import ghIcon from '../../asset/img/ghIcon.svg';

import styles from './Nav.module.scss';

type Props = {
  pathname: string,
};

const Nav = ({ pathname }: Props) => {
  const links = {
    right: [
      {
        show: 'About',
        to: '/',
      }, {
        show: 'Project',
        to: '/projects',
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to="/" />
      <div className={styles.link}>
        <Icon href="https://github.com/ntuee-maker" src={ghIcon} alt="githun" />
      </div>
      {
        links.right.map(link => (
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
};

export default Nav;
