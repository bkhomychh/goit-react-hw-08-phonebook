import styled from 'styled-components';

export const StyledBtn = styled.button`
  padding: 8px 24px;

  font-size: ${({ theme }) => theme.fontSize.textSecondary};
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  border-radius: 12px;
  box-shadow: ${({ theme }) => `0 0 0px 2px ${theme.color.bgSecondary}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.bgPrimary};
    background-color: ${({ theme }) => theme.color.bgAccent};
    box-shadow: none;
  }
`;
