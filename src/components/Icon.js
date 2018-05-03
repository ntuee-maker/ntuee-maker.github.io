// @flow

import React from 'react';

type Props = {
  href: string,
  src: string,
  alt: string,
};

const style = { display: 'flex', justifyContent: 'center', margin: '0 5px' };

const Icon = ({ href, src, alt }: Props) => (
  <a rel="noopener noreferrer" target="_blank" href={href} style={style}>
    <img
      src={src}
      alt={alt}
      style={{ width: '30px', height: '30px', marginBottom: '-4px' }}
    />
  </a>
);

export default Icon;
