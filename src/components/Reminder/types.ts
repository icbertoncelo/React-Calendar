import { ButtonHTMLAttributes } from "react";

export interface IReminderProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}
