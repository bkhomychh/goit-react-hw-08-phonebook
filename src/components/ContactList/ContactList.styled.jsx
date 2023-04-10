import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  margin: 0 auto;
  width: 70%;

  background-color: ${({ theme }) => theme.color.bgPrimary};

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
`;

export const StyledList = styled.ul`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  font-size: ${({ theme }) => theme.fontSize.textSecondary};
`;
