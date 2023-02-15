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
  function renderMessage() {
    if (reminder?.isError) return <p>Api Error</p>;

    if (reminder?.isLoading) return <p>Loading ...</p>;

    if (!reminder?.weather) return <p>No Weather information</p>;

    return (
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
    );
  }

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
          data-testid="description-input"
          name="description"
          maxLength={30}
          placeholder="description"
          value={formData.description}
          onChange={handleFormInput}
        />
        <Input
          data-testid="city-input"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleFormInput}
        />
        <Input
          data-testid="date-input"
          name="date"
          type="date"
          value={formData.datePicker}
          onChange={handleFormInput}
        />

        {renderMessage()}

        <Button data-testid="modal-send-button" onClick={onSubmit}>
          Send
        </Button>
      </ModalContent>
    </ModalContainer>
  );
}
