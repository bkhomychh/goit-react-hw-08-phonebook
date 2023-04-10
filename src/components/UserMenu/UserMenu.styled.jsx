import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Username = styled.p`
  font-weight: 500;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
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
    color: ${({ theme }) => theme.color.textPrimary};
    background-color: ${({ theme }) => theme.color.bgPrimary};
    border-radius: 12px;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.bgPrimary};
      background-color: ${({ theme }) => theme.color.bgAccent};
    }
  }
`;
