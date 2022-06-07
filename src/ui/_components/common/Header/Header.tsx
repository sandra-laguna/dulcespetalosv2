import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../../_assets/images/logo.svg';

/* import './Header.css'; */

const StyledHeader = styled.header`
  display: flex;
  flex-basis: auto;
  padding: var(--padding-s) var(--padding-m);
  background-color: var(--color-secondary);
  border-bottom: var(--border-secondary);
`;

export const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
    </StyledHeader>
  );
};
