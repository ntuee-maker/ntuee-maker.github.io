// @flow

import React, { Component } from 'react';
import type { Node } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/style.scss';

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
      <div className="layout__wrapper">
        <Navbar pathname={location.pathname} />
        <div className="layout__children">{children()}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
