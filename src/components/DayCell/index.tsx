import { FormEvent, FormEventHandler, useState } from "react";

import { format } from "date-fns";

import { Button } from "../Button";
import { Input } from "../Input";
import { DayContainer, Modal, ModalContent } from "./styles";
import { IDayCellProps } from "./types";

export function DayCell({
  children,
  date = new Date(),
  ...rest
}: IDayCellProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [datePicker, setDatePicker] = useState(format(date, "yyyy'-'MM'-'dd"));
  const [reminder, setReminder] = useState("");
  const [city, setCity] = useState("");

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleSubmitReminder(event: FormEvent) {
    event.preventDefault();
    console.log(reminder, city, datePicker);
  }

  return (
    <>
      <DayContainer {...rest} onClick={handleOpenModal}>
        <span>{children}</span>
      </DayContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Example Modal"
      >
        <ModalContent onSubmit={handleSubmitReminder}>
          <button onClick={handleCloseModal}>x</button>
          <h2>Reminder</h2>

          <Input
            name="reminder"
            maxLength={30}
            placeholder="description"
            value={reminder}
            onChange={(event) => setReminder(event.target.value)}
          />
          <Input
            name="city"
            placeholder="City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <Input
            name="date"
            type="date"
            value={datePicker}
            onChange={(event) => setDatePicker(event.target.value)}
          />

          <Button onClick={handleSubmitReminder}>Send</Button>
        </ModalContent>
      </Modal>
    </>
  );
}
