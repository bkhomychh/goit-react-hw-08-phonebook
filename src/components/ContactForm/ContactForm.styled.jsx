import styled from 'styled-components';

export const Form = styled.form`
  padding: 30px 50px;
  margin: 0 auto 20px;
  max-width: 550px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.textPrimary};
  color: ${({ theme }) => theme.color.textSecondary};
  background-color: ${({ theme }) => theme.color.bgPrimary};

  box-shadow: 0px 0px 32px 4px rgba(25, 58, 75, 0.2);
  border-radius: 32px;
`;

export const Label = styled.label`
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  font-size: ${({ theme }) => `3px solid ${theme.fontSize.headingPrimary}`};

  input {
    padding: 10px 20px;

    font-size: ${({ theme }) => `${theme.fontSize.textSecondary}`};
    border-bottom: ${({ theme }) => `2px solid ${theme.color.bgSecondary}`};
    transition: ${({ theme }) =>
      `all 250ms ${theme.transition.primaryCubicBezier}`};

    &:focus {
      border-color: ${({ theme }) => theme.color.bgAccent};
    }
  }
`;
