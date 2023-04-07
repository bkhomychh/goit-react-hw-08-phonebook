import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';

export const Title = styled.h1`
  margin-bottom: 24px;

  font-size: ${({ theme }) => theme.fontSize.title};
  letter-spacing: 0.05em;
  text-align: center;
`;

export const LoginForm = styled.form`
  margin: 0 auto 32px;
  padding: 48px 64px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 32px;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  box-shadow: 0px 0px 32px 4px rgba(25, 58, 75, 0.2);
`;

export const Label = styled.label`
  margin-bottom: 16px;
  width: 100%;

  font-size: ${({ theme }) => `${theme.fontSize.textPrimary}`};
  font-weight: 500;
`;

export const Box = styled.div`
  position: relative;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const InputField = styled.input`
  padding: 0px 40px 10px 20px;
  width: 100%;

  font-size: ${({ theme }) => `${theme.fontSize.textSecondary}`};
  border-bottom: ${({ theme }) => `2px solid ${theme.color.bgSecondary}`};
  transition: ${({ theme }) =>
    `all 250ms ${theme.transition.primaryCubicBezier}`};

  &:focus {
    border-color: ${({ theme }) => theme.color.bgAccent};
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: 110%;
  left: 0;

  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.bgError};
`;

export const PasswordToggle = styled.button`
  position: absolute;
  top: 50%;
  right: 0;

  padding: 4px;
  display: flex;

  background-color: transparent;
  transform: translateY(-50%);
`;

export const Check = styled(BsCheckLg)`
  position: absolute;
  top: 50%;
  left: 102%;

  color: ${({ theme }) => theme.color.bgSuccess};
  transform: translateY(-50%);
`;
