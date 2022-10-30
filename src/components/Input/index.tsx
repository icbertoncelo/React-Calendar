import { InputContainer } from "./styles";
import { IInputProps } from "./types";

export function Input({ name, onChange, type, value, ...rest }: IInputProps) {
  return (
    <InputContainer
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}
