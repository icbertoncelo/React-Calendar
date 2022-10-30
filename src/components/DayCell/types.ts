import { ButtonHTMLAttributes } from "react";

export interface IDayCellProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  date?: Date;
}
