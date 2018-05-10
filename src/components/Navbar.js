// @flow

import React from 'react';
import Link, { withPrefix } from 'gatsby-link';

type Props = {
  pathname: string,
};

const Navbar = ({ pathname }: Props) => {
  const links = [
    { id: 'About', to: '/about' },
    { id: 'Projects', to: '/projects' },
    // { id: 'Events', to: '/events' },
  ];

  return (
    <div className="navbar__wrapper">
      <div className="navbar__links">
        {
          links.map(({ id, to }) => (
            <Link
              className="navbar__link"
              data-active={pathname.includes(withPrefix(to))}
              key={id}
              to={to}
            >
              {id}
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Navbar;
