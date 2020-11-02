import { render, fireEvent} from '@testing-library/react';
import App from '../App';

//Test usign React testing Library

test('The app should render the corrent content', () => {
 const { getByText, getByLabelText, getByDisplayValue} = render(<App/>)
  getByText("Rover Navigator");
  getByText("Mars Plateau");
  getByLabelText("Rover starting position:");
  getByDisplayValue("00N")
});

test("The app should allow users passing the right inputs", () => {
  const { getByText, getByLabelText } = render(<App/>)

  const input = getByLabelText("Inputs:");
  fireEvent.change(input, {target: { value: "MMRMMLMMRM"}})
  fireEvent.click(getByText("MMRMMLMMRM"));
  fireEvent.change(input, {target: { value: "RMMMLMRMLM"}})
  fireEvent.click(getByText("RMMMLMRMLM"));
  fireEvent.change(input, {target: { value: "R"}})
  fireEvent.click(getByText("R"));
  fireEvent.change(input, {target: { value: "M"}})
  fireEvent.click(getByText("M"));
  fireEvent.change(input, {target: { value: "L"}})
  fireEvent.click(getByText("L"));
})

