import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.bgSecondary};
`;

export const Container = styled.div`
  padding: 24px 48px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  height: 100%;

  font-size: ${({ theme }) => theme.fontSize.textPrimary};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.bgSecondary};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.color.bgSecondary};
`;

export const Footer = styled.footer`
  padding: 8px;

  background-color: ${({ theme }) => theme.color.bgSecondary};
`;

export const Signature = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-weight: 500;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
