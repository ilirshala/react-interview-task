import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputField from "../components/input-field";

describe("InputField Component", () => {
  const mockOnChange = jest.fn();

  test("renders label and input field", () => {
    render(
      <InputField
        label="Test Label"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
      />
    );

    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText(/Enter text/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders number input when type is 'number'", () => {
    render(
      <InputField
        label="Number Input"
        placeholder="Enter number"
        value={1}
        onChange={mockOnChange}
        type="number"
      />
    );

    const inputElement = screen.getByPlaceholderText(/Enter number/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders textarea when type is 'textarea'", () => {
    render(
      <InputField
        label="Text Area"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
        type="textarea"
      />
    );

    const textareaElement = screen.getByPlaceholderText(/Enter text/i);
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveAttribute("rows", "4");
  });

  test("renders errors when provided", () => {
    const errors = "This field is required";
    render(
      <InputField
        label="Test Input"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
        errors={errors}
      />
    );

    const errorElement = screen.getByText(errors);
    expect(errorElement).toBeInTheDocument();
  });
});
