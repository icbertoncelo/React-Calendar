import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export function Button({ onClick, children }: IButtonProps) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
}
