import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.bgSecondary};
`;

export const Container = styled.div`
  padding: 0 48px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 480px;
  min-width: 480px;

  font-size: ${({ theme }) => theme.fontSize.textPrimary};

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Header = styled.header`
  position: relative;
  z-index: 10;

  padding: 24px 0;
  min-width: 480px;

  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => `0px 0px 3px ${theme.color.textSecondary}`};
`;

export const Main = styled.main`
  padding: 48px 0;
  flex-grow: 1;
  min-width: 480px;

  background-color: ${({ theme }) => theme.color.bgPrimary};
`;

export const Footer = styled.footer`
  padding: 32px 0;
  min-width: 480px;

  background-color: ${({ theme }) => theme.color.bgSecondary};
  box-shadow: ${({ theme }) => `0px 0px 3px ${theme.color.textSecondary}`};
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

    svg {
      transition: ${({ theme }) =>
        `transform 250ms ${theme.transition.primaryCubicBezier}`};
    }

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.textPrimary};

      svg {
        transform: scale(1.1);
      }
    }
  }
`;
