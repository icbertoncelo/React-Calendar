import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

export function Button({ onClick, children, ...rest }: IButtonProps) {
  return (
    <ButtonContainer onClick={onClick} {...rest}>
      {children}
    </ButtonContainer>
  );
}
