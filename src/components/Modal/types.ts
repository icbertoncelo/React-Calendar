import { ChangeEvent, FormEvent } from "react";

import { IReminder } from "@utils";

export interface IModalProps {
  title: string;
  isOpen: boolean;
  onRequestClose: (event: React.MouseEvent | React.KeyboardEvent) => void;
  formData: any;
  handleFormInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
  reminder?: IReminder;
}
