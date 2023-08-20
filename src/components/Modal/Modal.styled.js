import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: rgba(46, 47, 66, 0.4);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
  }
`;

export const Box = styled.div`
  background-color: #8c8377;
  position: relative;
  box-shadow: 1px 1px 14px 4px #ffe724;
  border-radius: 16px;
  width: 400px;
  height: 400px;
  padding: 20px 20px 20px 20px;
  animation-name: modalopen;
  animation-duration: 1.75s;

  @keyframes modalopen {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const ModalTitle = styled.h1`
  text-align: center;
  color: #120c07;
`;

export const ModalForm = styled.form`
  text-align: center;
`;

export const ModalTitleInitiated = styled.p`
  color: #120c07;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 5px;
`;

export const ModalInput = styled.input`
  width: 300px;
  height: 25px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  background-color: #e2e2e2;

  &: hover {
    box-shadow: #ffe724 0px 5px 10px, #ffe724 0px 2px 5px;
  }
`;
