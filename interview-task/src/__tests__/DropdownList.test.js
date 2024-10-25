/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DropdownList from "../components/dropdown-list";

describe("Tests for Dropdown List component", () => {
  const items = ["Sidewalk Shed", "Scaffold", "Shoring"];
  const mockToggleCategory = jest.fn();
  const mockOnClickStatus = jest.fn();
  const mockGetBackgroundColor = jest.fn((cat) => {
    switch (cat) {
      case "Sidewalk Shed":
        return "#67AA3C";
      case "Scaffold":
        return "#EFD652";
      default:
        return "#9640BE";
    }
  });

  const mockGetTextColor = jest.fn((item) => {
    return items.includes(item) && "#fff";
  });

  const renderComponent = (props) =>
    render(
      <DropdownList
        openDropdown={props.openDropdown}
        items={items}
        toggleCategory={mockToggleCategory}
        categories={props.categories}
        getBackgroundColor={mockGetBackgroundColor}
        getTextColor={mockGetTextColor}
        isInStatus={props.isInStatus}
        onClickStatus={mockOnClickStatus}
      />
    );
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders dropdown items correctly", () => {
    renderComponent({ openDropdown: true, categories: [] });

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("calls toggleCategory when a non-status item is clicked", () => {
    renderComponent({ openDropdown: true, categories: [], isInStatus: false });

    const itemElement = screen.getByText("Scaffold");
    fireEvent.click(itemElement);

    expect(mockToggleCategory).toHaveBeenCalledWith("Scaffold");
  });

  test("calls onClickStatus when a status item is clicked", () => {
    renderComponent({ openDropdown: true, categories: [], isInStatus: true });

    const itemElement = screen.getByText("Shoring");
    fireEvent.click(itemElement);

    expect(mockOnClickStatus).toHaveBeenCalledWith("Shoring");
  });

  test("shows CheckOutlined icon next to selected category", () => {
    renderComponent({
      openDropdown: true,
      categories: ["Scaffold"],
      isInStatus: false,
    });

    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });
});
