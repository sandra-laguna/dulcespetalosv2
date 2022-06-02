import { NavLink } from 'react-router-dom';
import logo from '../../_assets/images/logo.svg';

import './Header.css';

export const Header = () => {
  return (
    <header className="main-header">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
    </header>
  );
};
