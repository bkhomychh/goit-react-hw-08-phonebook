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

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.textSecondary};
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
    position: relative;

    padding: 0 10px;
    display: flex;
    align-items: center;
    height: 100%;

    font-size: ${({ theme }) => theme.fontSize.textPrimary};
    font-weight: 500;
    letter-spacing: 0.02em;

    &:after {
      content: '';

      position: absolute;
      bottom: 0;
      left: 0;

      display: block;
      width: 100%;
      height: 2px;

      background-color: ${({ theme }) => theme.color.bgAccent};
      transform: scale(0);
      transform-origin: center right;
      transition: ${({ theme }) =>
        `transform 250ms ${theme.transition.primaryCubicBezier}`};
    }

    &:hover {
      &:after {
        transform: scale(1);
        transform-origin: center left;
      }
    }
  }
`;
