import Modal from "react-modal";

import styled from "styled-components";

export const ModalContainer = styled(Modal)`
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
