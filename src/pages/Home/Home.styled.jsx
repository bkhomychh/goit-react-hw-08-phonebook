import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
`;
