// @flow

import React from 'react';
import Icon from './Icon';
import ghIcon from '../assets/images/ghIcon.svg';
import fbIcon from '../assets/images/fbIcon.svg';

const Footer = () => (
  <div className="footer__wrapper">
    <div className="footer__title">
      NTUEE saad
    </div>
    <div className="footer__link">
      <Icon href="https://github.com/ntuee-maker" src={ghIcon} alt="github" />
      <Icon href="https://www.facebook.com/makentu.ntuee" src={fbIcon} alt="facebook" />
    </div>
    <div className="footer__contact">
      EEI 205
    </div>
  </div>
);

export default Footer;
