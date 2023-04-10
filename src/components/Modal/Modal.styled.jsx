import styled, { keyframes } from 'styled-components';

const showComponent = keyframes`
  0%{
    transform: scale(0.2)
  }
  100%{
    transform: scale(1)
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1200;

  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalWindow = styled.div`
  width: max-content;
  height: max-content;

  animation: ${showComponent} 500ms both;
  overflow: hidden;
`;
