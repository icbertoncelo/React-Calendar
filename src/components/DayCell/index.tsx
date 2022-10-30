import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

import { useAppDispatch, useAppSelector } from "@hooks";
import { IReminder } from "src/utils";
import { v4 as uuid } from "uuid";

import { Button } from "../Button";
import { Input } from "../Input";
import { Reminder } from "../Reminder";
import { DayContainer, Modal, ModalContent } from "./styles";
import { IDayCellProps, IFormData } from "./types";

function ReminderModal({
  isOpen,
  onRequestClose,
  formData,
  handleFormInput,
  onSubmit,
}: any) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <ModalContent onSubmit={onSubmit}>
        <button onClick={onRequestClose}>x</button>
        <h2>Reminder</h2>

        <Input
          name="description"
          maxLength={30}
          placeholder="description"
          value={formData.description}
          onChange={handleFormInput}
        />
        <Input
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleFormInput}
        />
        <Input
          name="date"
          type="date"
          value={formData.datePicker}
          onChange={handleFormInput}
        />

        <Button onClick={onSubmit}>Send</Button>
      </ModalContent>
    </Modal>
  );
}

export function DayCell({ children, date = "", ...rest }: IDayCellProps) {
  const INITIAL_FORM_DATA: IFormData = {
    id: uuid(),
    datePicker: date,
    description: "",
    city: "",
  };

  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState<IFormData>(INITIAL_FORM_DATA);

  function handleCloseModal() {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
    setFormData(INITIAL_FORM_DATA);
  }

  const reminders = useAppSelector((state) => state.reminders);

  function handleSubmitReminder(event: FormEvent) {
    event.preventDefault();
    const { id, description, city, datePicker } = formData;

    dispatch({
      type: "ADD_REMINDER",
      payload: {
        id,
        description,
        city,
        date: datePicker,
      },
    });
    handleCloseModal();
  }

  function handleFormInput(event: ChangeEvent<HTMLInputElement>) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleBtn = (
    event: MouseEvent<HTMLButtonElement>,
    reminder: IReminder
  ) => {
    event.stopPropagation();

    const { id, description, date, city } = reminder;

    setFormData({
      id,
      datePicker: date,
      description,
      city,
    });

    setIsEditModalOpen(true);
  };

  function handleEditReminder(event: FormEvent) {
    event.preventDefault();
    const { id, description, city, datePicker } = formData;

    dispatch({
      type: "EDIT_REMINDER",
      payload: {
        id,
        description,
        city,
        date: datePicker,
      },
    });
    handleCloseModal();
  }

  return (
    <>
      <DayContainer {...rest} onClick={() => setIsModalOpen(true)}>
        <span>{children}</span>
        <ul>
          {reminders[date]?.map((reminder) => (
            <Reminder
              key={reminder.id}
              onClick={(event) => handleBtn(event, reminder)}
            >
              {reminder.description}
            </Reminder>
          ))}
        </ul>
      </DayContainer>

      <ReminderModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        formData={formData}
        handleFormInput={handleFormInput}
        onSubmit={handleSubmitReminder}
      />
      <ReminderModal
        isOpen={isEditModalOpen}
        onRequestClose={handleCloseModal}
        formData={formData}
        handleFormInput={handleFormInput}
        onSubmit={handleEditReminder}
      />
    </>
  );
}
