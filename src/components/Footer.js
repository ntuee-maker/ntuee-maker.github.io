// @flow

import React from 'react';
import Icon from './Icon';
import ghIcon from '../../asset/img/ghIcon.svg';
import fbIcon from '../../asset/img/fbIcon.svg';

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      NTUEE saad
    </div>
    <div className={styles.link}>
      <Icon href="https://github.com/ntuee-maker" src={ghIcon} alt="github" />
      <Icon href="https://www.facebook.com/makentu.ntuee" src={fbIcon} alt="facebook" />
    </div>
    <div className={styles.contact}>
      EEI 205
    </div>
  </div>
);

export default Footer;
