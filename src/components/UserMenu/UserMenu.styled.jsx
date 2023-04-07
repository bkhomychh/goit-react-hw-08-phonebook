import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Username = styled.p`
  font-weight: 500;
`;

export const AuthLinks = styled.ul`
  display: flex;
  gap: 16px;

  li {
    display: flex;
    height: 100%;
  }

  a {
    padding: 8px 24px;
    height: 100%;

    font-size: ${({ theme }) => theme.fontSize.textSecondary};
    font-weight: 500;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.color.bgPrimary};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.bgPrimary};
      background-color: ${({ theme }) => theme.color.bgAccent};
    }
  }
`;
