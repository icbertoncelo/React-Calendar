import { Button } from "../Button";
import { Input } from "../Input";
import { ModalContainer, ModalContent, Weather } from "./styles";
import { IModalProps } from "./types";

export function Modal({
  title,
  isOpen,
  onRequestClose,
  formData,
  handleFormInput,
  onSubmit,
  reminder,
}: IModalProps) {
  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <ModalContent onSubmit={onSubmit}>
        <button onClick={onRequestClose}>x</button>
        <h2>{title}</h2>

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

        {reminder?.weather ? (
          <Weather>
            <p>{reminder.weather.description}</p>
            <div>
              <strong>Min:</strong>
              <span>{reminder.weather.tempMin}</span>
            </div>
            <div>
              <strong>Max:</strong>
              <span>{reminder.weather.tempMax}</span>
            </div>
          </Weather>
        ) : (
          <p>No weather information</p>
        )}

        <Button onClick={onSubmit}>Send</Button>
      </ModalContent>
    </ModalContainer>
  );
}
