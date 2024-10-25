import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DropdownInput from "../components/dropdown-input";

describe("tests for DropdownInput component", () => {
  const mockToggleDropdown = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders dropdown input with placeholder", () => {
    render(
      <DropdownInput
        openDropdown={false}
        placeholder={"Hello Placeholder"}
        toggleDropdown={mockToggleDropdown}
      />
    );
    const placeholderText = screen.getByText("Hello Placeholder");
    const caretDownIcon = screen.getByRole("img", { hidden: true });

    expect(placeholderText).toBeInTheDocument();
    expect(caretDownIcon).toBeInTheDocument();
    expect(caretDownIcon).toHaveClass("anticon-caret-down");
  });

  test("handles dropdown toggle", () => {
    render(
      <DropdownInput
        placeholder="Select one"
        openDropdown={false}
        toggleDropdown={mockToggleDropdown}
      />
    );

    const dropdownInput = screen.getByText(/Select one/i);
    fireEvent.click(dropdownInput);
    expect(mockToggleDropdown).toHaveBeenCalledTimes(1);
  });

  test("displays the correct icon based on the openDropdown prop", () => {
    const { rerender } = render(
      <DropdownInput
        placeholder="Select one"
        openDropdown={false}
        toggleDropdown={mockToggleDropdown}
      />
    );

    let caretIcon = screen.getByRole("img", { hidden: true });
    expect(caretIcon).toHaveClass("anticon-caret-down");

    rerender(
      <DropdownInput
        placeholder="Select one"
        openDropdown={true}
        toggleDropdown={mockToggleDropdown}
      />
    );

    caretIcon = screen.getByRole("img", { hidden: true });
    expect(caretIcon).toHaveClass("anticon-caret-up");
  });
});
