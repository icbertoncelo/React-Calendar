import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.8rem 1.2rem;
  overflow: hidden;
  color: ${({ theme }) => theme.buttonText};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: 0.0325rem;
  text-transform: lowercase;
  text-decoration: none;
  height: 48px;

  background: ${({ theme }) => theme.primary};
  border: none;
  border-color: none;
  border-radius: 0.8rem;
  -webkit-box-shadow: 4px 2px 5px 0px rgba(0, 0, 0, 0.52);
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.52);

  cursor: pointer;
  transition: all ease-in-out 0.3s;
  transition-property: background, transform;

  &:active,
  &:focus,
  &:hover {
    outline: none;
    background: ${({ theme }) => theme.secondary};
  }
  &:hover {
    transform: scale(1.1);
  }
`;
