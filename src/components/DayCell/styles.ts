import RModal from "react-modal";

import styled, { css } from "styled-components";

interface IDayContainerProps {
  disabled?: boolean;
}

export const DayContainer = styled.button<IDayContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: center;
  padding: 12px;
  height: 64px;
  border: none;
  background: ${({ theme }) => theme.tableBG};
  color: ${({ theme }) => theme.text};
  overflow: auto;

  ul {
    margin-top: 2px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2px;
    row-gap: 2px;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.background};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.text};
  }

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: auto;
        `
      : css`
          &:hover {
            background: ${({ theme }) => theme.background};
          }
        `}
`;

export const Modal = styled(RModal)`
  position: absolute;
  padding: 24px;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.background};
`;

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;

  text-align: center;
  width: 40vw;
  max-width: 360px;

  h2 {
    color: ${({ theme }) => theme.text};
    margin-bottom: 12px;
  }

  button {
    &:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 8px;
      top: 8px;
      height: 16px;
      width: 16px;

      background: none;
      color: ${({ theme }) => theme.text};
      border: none;

      &:hover {
        color: ${({ theme }) => theme.background};
      }
    }
  }
`;
