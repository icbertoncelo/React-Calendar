import { ReminderButton } from "./styles";
import { IReminderProps } from "./types";

export function Reminder({ children, ...rest }: IReminderProps) {
  return <ReminderButton {...rest}>{children}</ReminderButton>;
}
