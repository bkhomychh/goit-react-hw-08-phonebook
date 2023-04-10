import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  text-align: center;

  svg {
    font-size: 160px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 32px;

  font-size: ${({ theme }) => theme.fontSize.title};
`;

export const Text = styled.p`
  margin-bottom: 32px;

  font-size: ${({ theme }) => theme.fontSize.textPrimary};
`;
