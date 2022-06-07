import styled from 'styled-components';

interface Props {
  text: string;
}

const StyledTitle = styled.div`
  width: var(--width-full);
  padding: var(--padding-xs);
  border-bottom: var(--border-primary);
  color: var(--color-primary);
  font-size: var(--m);
  font-weight: bold;
  text-align: center;
`;

export const Title: React.FC<Props> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};
