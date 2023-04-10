import styled from 'styled-components';

export const Label = styled.label`
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 350px;

  font-size: ${({ theme }) => `${theme.fontSize.textPrimary}`};
  font-weight: 500;
  text-align: center;
`;

export const SearchField = styled.input`
  padding: 15px 30px;

  font-size: ${({ theme }) => `${theme.fontSize.textSecondary}`};
  background-color: ${({ theme }) => `${theme.color.bgTertiary}`};
  box-shadow: ${({ theme }) => `0 0 2px  ${theme.color.textSecondary}`};
  border-radius: 16px;
`;
