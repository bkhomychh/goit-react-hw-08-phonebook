import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  gap: 20px;
  padding: 10px 20px;

  border: none;

  &:not(:last-child) {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.bgSecondary}`};
  }
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.textPrimary};
  font-weight: 700;
  line-height: calc(24 / 20);
`;

export const Phone = styled.span`
  font-size: ${({ theme }) => theme.fontSize.textSecondary};
  font-weight: 500;
`;

export const Box = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const EditBtn = styled.button`
  padding: 5px;
  display: inline-flex;

  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  border-radius: 5px;
`;

export const DeleteBtn = styled.button`
  padding: 5px;
  display: inline-flex;

  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  border-radius: 5px;

  :hover,
  :focus {
    color: ${({ theme }) => theme.color.bgError};
  }
`;
