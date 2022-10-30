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
    width: 100%;
    margin-top: 2px;
    display: grid;
    grid-template-columns: 1fr;
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
