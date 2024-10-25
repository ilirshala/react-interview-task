import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import EditButton from "../components/edit-button";

jest.mock("../store/actions/modals.action");

const mockStore = configureStore([]);
const category = "Test Category";

describe("Tests for EditButton Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <EditButton category={category} />
      </Provider>
    );

  test("renders the EditButton with the EditTwoTone icon", () => {
    renderComponent();

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });

  test("renders the button with the correct background color", () => {
    renderComponent();

    const editButton = screen.getByRole("button");
    expect(editButton).toHaveStyle("background-color: blue");
  });
});
