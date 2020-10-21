import React from "react";
import ResyForm from "./ResyForm";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
const updateResys = jest.fn();

describe("Card", () => {
  render(<ResyForm updateResys={updateResys} />);
  it("should render with input fields and submit button", () => {
    expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("date")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("time")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("number")).toBeInTheDocument();
  });
  it("should be able to enter user info", () => {
    render(<ResyForm updateResys={updateResys} />);
    userEvent.type(screen.getByPlaceholderText("name"), "Blake");
    userEvent.type(screen.getByPlaceholderText("date"), "05/23");
    userEvent.type(screen.getByPlaceholderText("time"), "6:00");
    userEvent.type(screen.getByPlaceholderText("number"), "3");
    expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
    expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
    expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
    expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
  });
});
