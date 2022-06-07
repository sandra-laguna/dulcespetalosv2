import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: var(--m);
  padding: var(--padding-m);
`;
