import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';

export const Title = styled.h1`
  margin-bottom: 24px;

  font-size: ${({ theme }) => theme.fontSize.title};
  letter-spacing: 0.05em;
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 auto 32px;
  padding: 48px 64px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 32px;
  background-color: ${({ theme }) => theme.color.bgPrimary};

  box-shadow: ${({ boxShadowHidden }) =>
    boxShadowHidden ? '' : '0px 0px 20px rgba(0, 0, 0, 0.25);'};

  @media screen and (min-width: 1200px) {
    width: 500px;
    max-width: 500px;
  }
`;

export const Label = styled.label`
  margin-bottom: 16px;
  width: 100%;

  font-size: ${({ theme }) => `${theme.fontSize.textPrimary}`};
  font-weight: 500;
`;

export const Box = styled.div`
  position: relative;

  margin-bottom: 32px;
  width: 100%;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const InputField = styled.input`
  padding: 0px 40px 10px 20px;
  width: 100%;

  font-size: ${({ theme }) => `${theme.fontSize.textSecondary}`};
  line-height: 1.5;

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
