/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectedCategories from "../components/categories-dropdown/selected-categories";

describe("Tests for SelectedCategories component", () => {
  const mockRemoveCategory = jest.fn();
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

  afterEach(() => {
    jest.clearAllMocks();
  });

  const dropdownItems = ["Sidewalk Shed", "Scaffold", "Shoring"];

  test("renders categories with their dots", () => {
    render(
      <SelectedCategories
        categories={dropdownItems}
        removeCategory={mockRemoveCategory}
        getBackgroundColor={mockGetBackgroundColor}
      />
    );

    dropdownItems.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();

      const dot = screen.getByText(cat).previousSibling;
      expect(dot).toHaveStyle(
        `background-color: ${mockGetBackgroundColor(cat)}`
      );
    });
  });

  test("renders the correct colors for each category", () => {
    render(
      <SelectedCategories
        categories={dropdownItems}
        removeCategory={mockRemoveCategory}
        getBackgroundColor={mockGetBackgroundColor}
      />
    );

    dropdownItems.forEach((cat) => {
      const color = mockGetBackgroundColor(cat);
      const dot = screen.getByText(cat).previousSibling;
      expect(dot).toHaveStyle(`background-color: ${color}`);
    });
  });
});
