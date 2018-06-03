// @flow

import React, { Component } from 'react';
import type { Node } from 'react';

import Arrow from './Arrow';

type Props = {
  children: Array<Node>,
};

type State = {
  curr: number,
  startX: number,
};

class Slider extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      curr: 0,
      startX: 0,
    };
  }

  onTouchStart = (e: TouchEvent) => {
    this.setState({ startX: e.touches[0].pageX });
  }

  onTouchMove = (e: TouchEvent) => {
    const { curr, startX } = this.state;
    const delta = (e.touches[0].pageX - startX) / window.innerWidth;
    this.setState({ curr: curr - delta, startX: e.touches[0].pageX });
  }

  onTouchEnd = () => {
    this.slide(Math.round(this.state.curr));
  }

  slide = (dest: number) => {
    if (dest < 0) {
      this.setState({ curr: 0 });
    } else if (dest >= this.props.children.length) {
      this.setState({ curr: this.props.children.length - 1 });
    } else {
      this.setState({ curr: dest });
    }
  }

  render() {
    const { slide, onTouchStart, onTouchMove, onTouchEnd } = this;
    const { children } = this.props;
    const { curr } = this.state;

    if (children.length === 0) return <div />;

    return (
      <div className="slider__wrapper">
        <button className="slider__arrow" onClick={() => slide((curr - 1))}><Arrow /></button>
        <button className="slider__arrow" onClick={() => slide((curr + 1))}><Arrow /></button>
        <div className="slider__window">
          <div
            className="slider__children"
            style={{ transform: `translateX(calc(${-100 * curr}% - ${50 * curr}px))`, transitionDuration: curr % 1 === 0 ? '0.5s' : '0s' }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
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
