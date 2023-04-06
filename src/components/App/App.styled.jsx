import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;

  background-color: ${({ theme }) => theme.color.bgSecondary};
`;

export const Container = styled.div`
  padding: 20px 50px;
  margin: 0 auto;
  max-width: 1200px;

  font-size: ${({ theme }) => theme.fontSize.textPrimary};
  background-color: ${({ theme }) => theme.color.bgSecondary};
`;

export const Title = styled.h1`
  margin-bottom: 20px;

  font-size: ${({ theme }) => theme.fontSize.title};
`;

export const Heading = styled.h2`
  margin-bottom: 15px;

  font-size: ${({ theme }) => theme.fontSize.headingPrimary};
`;
