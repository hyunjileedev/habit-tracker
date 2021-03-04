import React, { memo } from 'react';

const Header = memo(props => {
  return (
    <header className="header">
      <span className="header-title">Habit Tracker</span>
      <span className="header-count">{props.tracked}</span>
    </header>
  );
});

export default Header;
