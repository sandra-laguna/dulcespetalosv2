import styled from 'styled-components';

/* import './Footer.css'; */

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: auto;
  padding: var(--padding-s) 0;
  text-align: center;
  font-size: var(--m);
  background-color: var(--color-primary);
`;

const StyledFooterText = styled.footer`
  color: var(--color-white);
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterText>Dulces pétalos</StyledFooterText>
    </StyledFooter>
  );
};
