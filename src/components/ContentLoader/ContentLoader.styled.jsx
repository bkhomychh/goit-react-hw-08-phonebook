import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(210, 210, 210, 0.3);

  & > div {
    width: 30%;
    height: 30%;
    min-width: 80px;
    min-height: 80px;
  }

  svg {
    stroke: ${({ theme }) => theme.color.bgSecondary};
    width: 100%;
    height: 100%;
  }
`;
