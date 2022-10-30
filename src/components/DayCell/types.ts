import { ButtonHTMLAttributes } from "react";

export interface IDayCellProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  date?: string;
}

export interface IFormData {
  id: string;
  datePicker: string;
  description: string;
  city: string;
}
