import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 8px;

  font-size: 48px;
  letter-spacing: 0.05em;
`;

export const Text = styled.b`
  font-size: ${({ theme }) => theme.fontSize.textPrimary};
`;
