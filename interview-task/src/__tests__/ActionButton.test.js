import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActionButton from "../components/action-button";
import { CheckOutlined } from "@ant-design/icons";

describe("tests for ActionButton Component", () => {
  const mockOnClickPrimaryButton = jest.fn();
  const mockOnClickCancelButton = jest.fn();
  const mockOnClickBackButton = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("render primary button with text and icon", () => {
    render(
      <ActionButton
        type="primary"
        primaryText={"Save"}
        primaryIcon={<CheckOutlined />}
        onClickPrimary={mockOnClickPrimaryButton}
      />
    );
    const primaryButton = screen.getByRole("button", { name: /Save/i });
    expect(primaryButton).toBeInTheDocument();
    fireEvent.click(primaryButton);
    expect(mockOnClickPrimaryButton).toHaveBeenCalledTimes(1);
  });

  test("renders cancel button with text and icon", () => {
    render(
      <ActionButton type="cancel" onClickCancel={mockOnClickCancelButton} />
    );

    const cancelButton = screen.getByRole("button", {
      name: /Cancel Changes/i,
    });
    expect(cancelButton).toBeInTheDocument();
    fireEvent.click(cancelButton);
    expect(mockOnClickCancelButton).toHaveBeenCalledTimes(1);
  });

  test("renders back button with text and icon", () => {
    render(<ActionButton type="back" onClickBack={mockOnClickBackButton} />);

    const backButton = screen.getByRole("button", {
      name: /Go Back/i,
    });
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
    expect(mockOnClickBackButton).toHaveBeenCalledTimes(1);
  });

  test("returns null for unknown action type", () => {
    const { container } = render(<ActionButton type="unknown" />);
    expect(container).toBeEmptyDOMElement();
  });
});
