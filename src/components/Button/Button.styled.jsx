import styled from 'styled-components';

export const StyledBtn = styled.button`
  padding: 8px 24px;

  font-size: ${({ theme }) => theme.fontSize.textSecondary};
  font-weight: 500;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.bgPrimary};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.bgPrimary};
    background-color: ${({ theme }) => theme.color.bgAccent};
  }
`;
