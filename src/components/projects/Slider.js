// @flow

import React, { Component } from 'react';
import type { Node } from 'react';

import Arrow from './Arrow';

type Props = {
  children: Array<Node>,
};

type State = {
  curr: number
};

class Slider extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      curr: 0,
    };
  }

  slide = (dest: number) => { this.setState({ curr: dest }); }

  render() {
    const { slide } = this;
    const { children } = this.props;
    const { curr } = this.state;

    if (children.length === 0) return <div />;

    return (
      <div className="slider__wrapper">
        <button className="slider__arrow" onClick={() => { if (curr - 1 >= 0) slide((curr - 1)); }}><Arrow /></button>
        <button className="slider__arrow" onClick={() => { if (curr + 1 < children.length) slide((curr + 1)); }}><Arrow /></button>
        <div className="slider__window">
          <div className="slider__children" style={{ marginLeft: `calc(${-100 * curr}% - ${50 * curr}px)` }}>
            {children}
          </div>
        </div>
        <div className="slider__dots">
          {
            children.map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <button key={index} onClick={() => slide(index)} data-active={index === curr} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Slider;
