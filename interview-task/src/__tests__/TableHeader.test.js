import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TableHeader from "../components/table-header";

describe("Tests for TableHeader Component", () => {
  test("renders the title passed as a prop", () => {
    const title = "Test Title";
    render(<TableHeader title={title} />);

    const headingElement = screen.getByRole("heading", { name: title });
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the title correctly", () => {
    const title = "Another Title";
    render(<TableHeader title={title} />);

    const headingElement = screen.getByText(title);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe("H3");
  });
});
