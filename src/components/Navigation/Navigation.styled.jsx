import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 8px;
`;

export const Logo = styled(Link)`
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 700;

  svg {
    height: 100%;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 16px;

  li {
    height: 100%;
  }

  a {
    padding: 0 10px;
    display: flex;
    height: 100%;
    align-items: center;

    font-size: ${({ theme }) => theme.fontSize.textPrimary};
    font-weight: 500;
  }
`;
