import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  margin: 0 auto;
  width: 70%;

  background-color: ${({ theme }) => theme.color.bgPrimary};

  box-shadow: 0px 141px 200px -80px rgba(25, 58, 75, 0.3);
  border-radius: 50px;
`;

export const StyledList = styled.ul`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  font-size: ${({ theme }) => theme.fontSize.textSecondary};
`;
