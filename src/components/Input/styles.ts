import styled from "styled-components";

export const InputContainer = styled.input`
  margin-bottom: 12px;
  padding: 0.8rem 1.2rem;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.tableBG};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: 0.0325rem;
  text-transform: lowercase;
  text-decoration: none;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.background};
  border-radius: 0.8rem;
  transition: all ease-in-out 0.3s;
  transition-property: background, transform;

  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.52);
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.5;
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.5;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.5;
  }

  &:active,
  &:focus,
  &:hover {
    outline: none;
    background: ${({ theme }) => theme.tableBG};
  }
  &:hover {
    transform: scale(1.1);
  }
`;
