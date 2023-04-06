import styled from 'styled-components';

export const Form = styled.form`
  padding: 50px 100px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.textPrimary};
  color: ${({ theme }) => theme.color.textSecondary};
  background-color: ${({ theme }) => theme.color.bgPrimary};

  box-shadow: 0px 141px 200px -80px rgba(25, 58, 75, 0.3);
  border-radius: 50px;
`;

export const Label = styled.label`
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: ${({ theme }) => `3px solid ${theme.fontSize.headingPrimary}`};

  input {
    padding: 10px 20px;

    outline: none;
    border: none;
    border-bottom: ${({ theme }) => `2px solid ${theme.color.bgSecondary}`};

    transition: ${({ theme }) =>
      `all 250ms ${theme.transition.primaryCubicBezier}`};

    &:focus {
      border-color: ${({ theme }) => theme.color.bgAccent};
    }
  }
`;

export const AddBtn = styled.button`
  padding: 10px 20px;
  width: 150px;
  margin: 0 auto;

  text-transform: uppercase;
  font-weight: 700;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  border: ${({ theme }) => `2px solid ${theme.color.bgSecondary}`};
  border-radius: 20px;

  cursor: pointer;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.bgSuccess};
    color: ${({ theme }) => theme.color.textAccent};
  }
`;
