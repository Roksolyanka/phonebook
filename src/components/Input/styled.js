import styled, { css } from 'styled-components';

export const inputPlaceholderCommonStyle = css`
  font-size: 20px;
  padding: 0 15px;
`;

export const Text = styled.div`
  background-color: transparent;
  color: black;
  transform: translate(0);
  transition: transform 0.15s ease-out, font-size 0.15s ease-out,
    background-color 0.2s ease-out, color 0.15s ease-out;

  ${inputPlaceholderCommonStyle}
`;

export const PlaceholderText = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid transparent;
  background-color: transparent;
  display: flex;
  align-items: center;
  pointer-events: none;

  ${inputPlaceholderCommonStyle}
`;

export const Input = styled.input`
  height: 60px;
  width: 100%;
  font-weight: bold;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  ${inputPlaceholderCommonStyle}

  &:hover,
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => `${theme.colors.accentColor} 0px 5px 10px,
      ${theme.colors.accentColor} 0px 2px 5px`};
    transition: box-shadow 0.3s ease-in-out;
  }

  &:focus
    + ${PlaceholderText}
    ${Text},
    :not(input[value=''])
    + ${PlaceholderText}
    ${Text} {
    border-radius: 25px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryColor};
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    transform: translate(0, -140%);
    box-shadow: ${({ theme }) => theme.colors.boxShadowAccent};
  }

  &:focus + ${PlaceholderText} ${Text} {
    color: ${({ theme }) => theme.colors.primaryColor};
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

export const Visibility = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.primaryColor};
  }
`;
