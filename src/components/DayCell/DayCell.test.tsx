import { fireEvent, render } from "@testing-library/react";

import { DayCell } from ".";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn().mockImplementation(() => ({})),
    useDispatch: () => mockDispatch,
  };
});

const renderWrapper = () => {
  return render(<DayCell date="2022-10-30">1</DayCell>);
};
describe("DayCell component", () => {
  it("should be render without crash", () => {
    const { container } = renderWrapper();
    expect(container).toBeTruthy();
  });

  it("should schedule a new reminder", () => {
    const { getByTestId } = renderWrapper();

    const dayCell = getByTestId("2022-10-30-day-container");
    fireEvent.click(dayCell);

    const descriptionInput = getByTestId("description-input");
    const cityInput = getByTestId("city-input");
    const modalSendButton = getByTestId("modal-send-button");

    fireEvent.change(descriptionInput, {
      target: { value: "Fake description" },
    });

    fireEvent.change(cityInput, {
      target: { value: "City" },
    });

    fireEvent.click(modalSendButton);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "ADD_REMINDER",
      })
    );
  });
});
