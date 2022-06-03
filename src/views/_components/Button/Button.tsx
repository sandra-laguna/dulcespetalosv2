import { ReactNode } from 'react';

import styled, { css } from 'styled-components';

import './Button.css';

/* interface Props {
  text: string;
  type: 'primary' | 'secondary';
} */

/* export const Button: React.FC<Props> = ({ text, type }) => {
  return <button className={`button ${type}`}>{text}</button>;
};
 */

interface Props {
  text: ReactNode;
  model: 'primary' | 'secondary';
}

export const Button: React.FC<Props> = ({ text, model }) => (
  <StyledButton model={model}>{text}</StyledButton>
);

const StyledButton = styled.button<{ model: 'primary' | 'secondary' }>`
  display: inline-block;
  padding: var(--padding-xs) var(--padding-xs);
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: var(--border-radius-s);
  cursor: pointer;
  &:first-letter {
    text-transform: capitalize;
  }

  ${(props) =>
    props.model === 'primary' &&
    css`
      color: var(--color-primary-contrast);
      background-color: var(--color-primary);
      &:hover {
        background: var(--color-primary-shade);
      }
    `}

  ${(props) =>
    props.model === 'secondary' &&
    css`
      color: var(--color-black);
      background-color: var(--color-secondary-tint);
      &:hover {
        background: var(--color-secondary-shade);
      }
    `}
`;
