import {fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const setup = () => {
  const utils = render(<BookingForm />)
  const input = utils.getByTestId('currentNumber')
  return {
    input,
    ...utils,
  }
}

test('the guests result is not null/empty', () => {
  render(<BookingForm />);
  const resultElement = screen.getByText(/Guests:/i);
  expect(resultElement).not.toBeNull();
});


test('that the date result is not empty', () => {
  render(<BookingForm />);
  const resultElement = screen.getByText(/Date:/i);
  expect(resultElement).not.toBeUndefined();
});

test('It should not allow letters', () => {

  const {input} = setup()
  expect(input.value).toBe('') 
  fireEvent.change(input, {target: {value: 'text random'}})
  expect(input.value).toBe('') 
})

test('Not to be more than 10', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: '11'}})
  expect(input.value).not.toBe('11')
})

//test the name field
test("Display the calendar", () => {
  render(<BookingForm />);
  const datePicker = screen.getByText("Choose date");
  expect(datePicker).toBeInTheDocument();
});

test("Submits with the correct data when submitted", () => {
  const testSubmit = jest.fn();

  const { getByLabelText, getByRole } = render(
    <BookingForm onSubmit={testSubmit} />
  );

  const dateInput = getByLabelText("Choose date");
  const timeSelect = getByLabelText("Choose time");
  const guestInput = getByLabelText("Number of guests");
  const occasionInput = getByLabelText("Occasion");

  fireEvent.change(dateInput, { target: { value: "2023-03-03" } });
  fireEvent.change(timeSelect, { target: { value: "17:00:00" } });
  fireEvent.change(guestInput, { target: { value: "5" } });
  fireEvent.change(occasionInput, { target: { value: "Birthday" } });

  const form = getByRole("test");
  fireEvent.submit(form);

  expect(testSubmit).toHaveBeenCalledWith({
    date: "2023-03-03",
    time: "17:00:00",
    numberOfGuests: "5",
    occasion: "Birthday",
  });
});
