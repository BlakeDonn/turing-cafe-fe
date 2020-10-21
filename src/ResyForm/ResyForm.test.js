import React from "react";
import ResyForm from "./ResyForm";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
const updateResys = jest.fn();
const deleteResy = jest.fn();

describe("Card", () => {
  render(<ResyForm deleteResy={deleteResy} updateResys={updateResys} />);
  it("should render with input fields and submit button", () => {
    expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("date")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("time")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("number")).toBeInTheDocument();
  });
  it("should be able to enter reservation info", () => {
    render(<ResyForm updateResys={updateResys} />);
    userEvent.type(screen.getByPlaceholderText("name"), "Blake");
    userEvent.type(screen.getByPlaceholderText("date"), "05/23");
    userEvent.type(screen.getByPlaceholderText("time"), "6:00");
    userEvent.type(screen.getByPlaceholderText("number"), "3");
    expect(screen.getByDisplayValue("Blake")).toBeInTheDocument();
    expect(screen.getByDisplayValue("05/23")).toBeInTheDocument();
    expect(screen.getByDisplayValue("6:00")).toBeInTheDocument();
    expect(screen.getByDisplayValue("3")).toBeInTheDocument();
  });
});
