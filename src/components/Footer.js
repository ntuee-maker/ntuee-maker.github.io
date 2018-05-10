// @flow

import React from 'react';
import Icon from './Icon';
import ghIcon from '../assets/images/ghIcon.svg';
import fbIcon from '../assets/images/fbIcon.svg';

const Footer = () => (
  <div className="footer__wrapper">
    <h4>
      NTUEE saad
    </h4>
    <div className="footer__link">
      <Icon href="https://github.com/ntuee-maker" src={ghIcon} alt="github" />
      <Icon href="https://www.facebook.com/makentu.ntuee" src={fbIcon} alt="facebook" />
    </div>
    <h4>
      EEI 205
    </h4>
  </div>
);

export default Footer;
