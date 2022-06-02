import styled from 'styled-components';

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
  model: string;
}

export const Button = styled.button<Props>`
  display: inline-block;
  padding: var(--padding-xs) var(--padding-xs);
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: var(--border-radius-s);
  cursor: pointer;
  color: ${(props) =>
    props.model === 'primary'
      ? 'var(--color-primary-contrast)'
      : 'var(--color-black)'};
  background-color: ${(props) =>
    props.model === 'primary'
      ? 'var(--color-primary)'
      : 'var(--color-secondary-shade)'};
`;
