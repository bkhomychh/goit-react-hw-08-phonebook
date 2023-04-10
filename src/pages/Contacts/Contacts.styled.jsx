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

export const Box = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;

  font-size: ${({ theme }) => theme.fontSize.title};
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.headingPrimary};
`;
