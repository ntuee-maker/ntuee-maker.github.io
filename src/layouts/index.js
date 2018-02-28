// @flow

import React, { Node, Component } from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import helmet from '../helmet.json';
import './index.scss';
import styles from './index.module.scss';

type Props = {
  children: void => Node,
  location: Object,
};

type State = {
};

class Layout extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { children, location } = this.props;

    return (
      <div className={styles.wrapper}>
        <Helmet {...helmet} />
        <Navbar pathname={location.pathname} />
        <div className={styles.children}>{children()}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
