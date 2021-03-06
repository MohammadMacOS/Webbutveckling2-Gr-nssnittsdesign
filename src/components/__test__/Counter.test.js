import Counter from "../Counter";
import Profile from "../Profile";
//import Child from '../Child'
import { render, fireEvent, getByTestId } from "@testing-library/react";

test("check if something is true", () => {
  render(<Counter />);
  const something = true;
  expect(something).toBe(true);
});

test("check if something is true", () => {
  render(<Counter />);
  const something = true;
  expect(something).toBe(true);
});

test("header renders with correct text", () => {
  const component = render(<Counter />);
  const headerElement = component.getByTestId("header");
  expect(headerElement.textContent).toBe("");
});

test("header renders with correct text", () => {
  const component = render(<Profile />);
  const headerElement = component.getByTestId("header");
  expect(headerElement.textContent).toBe("Förbrukning(L/MIL)");
});

test("change value of input works correctly", () => {
    const component = render(<Profile/>);
  const inputElement = component.getByTestId("input-1");

  expect(inputElement.value).toBe('');

  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });

  expect(inputElement.value).toBe("5");
});

//test('header renders with correct text', () =>{
//const component = render(<Profile/>);
//const headerElement = component.getByTestId('header');
//expect(headerElement.textContent).toBe('Sträckan(MIL)')
//})
