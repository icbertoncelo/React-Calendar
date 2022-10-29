import { IButtonProps } from "./types";

export function Button({ onClick, children }: IButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
