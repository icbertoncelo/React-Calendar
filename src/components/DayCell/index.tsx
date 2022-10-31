import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

import { getWeather } from "@actions";
import { useAppDispatch, useAppSelector } from "@hooks";
import { IFormData, IReminder } from "@utils";
import { v4 as uuid } from "uuid";

import { Modal } from "../Modal";
import { Reminder } from "../Reminder";
import { DayContainer } from "./styles";
import { IDayCellProps } from "./types";

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
  const [selectedReminder, setSelectedReminder] = useState<
    IReminder | undefined
  >(undefined);

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

  async function handleOpenEditModal(
    event: MouseEvent<HTMLButtonElement>,
    reminder: IReminder
  ) {
    event.stopPropagation();
    setSelectedReminder(reminder);

    const { id, description, date, city } = reminder;

    setFormData({
      id,
      datePicker: date,
      description,
      city,
    });

    await dispatch(
      getWeather({
        reminder,
      })
    );

    setIsEditModalOpen(true);
  }

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
      <DayContainer
        data-testid={`${date}-day-container`}
        onClick={() => setIsModalOpen(true)}
        {...rest}
      >
        <span>{children}</span>
        <ul>
          {reminders[date]?.map((reminder, index) => (
            <Reminder
              data-testid={`${reminder.date}-${index}-reminder`}
              key={reminder.id}
              onClick={(event) => handleOpenEditModal(event, reminder)}
            >
              {reminder.description}
            </Reminder>
          ))}
        </ul>
      </DayContainer>

      <Modal
        title="New reminder"
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        formData={formData}
        handleFormInput={handleFormInput}
        onSubmit={handleSubmitReminder}
      />

      <Modal
        title="Edit reminder"
        isOpen={isEditModalOpen}
        onRequestClose={handleCloseModal}
        formData={formData}
        handleFormInput={handleFormInput}
        onSubmit={handleEditReminder}
        reminder={selectedReminder}
      />
    </>
  );
}
