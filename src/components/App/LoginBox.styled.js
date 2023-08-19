import styled from 'styled-components';

export const LoginBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(46, 47, 66, 0.4);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
//   display: none;

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;

export const LoginBox = styled.div`
  background-color: #8c8377;
  position: relative;
  box-shadow: 1px 1px 14px 4px #ffe724;
  border-radius: 16px;
  width: 400px;
  height: 270px;
  padding: 20px 20px 20px 20px;
  animation-name: modalopen;
  animation-duration: 1.75s;
  
`;
