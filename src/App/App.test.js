import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

it("Should be able to add new reservation", () => {
  render(<App />);
  userEvent.type(screen.getByPlaceholderText("name"), "Blake");
  userEvent.type(screen.getByPlaceholderText("date"), "05/23");
  userEvent.type(screen.getByPlaceholderText("time"), "6:00");
  userEvent.type(screen.getByPlaceholderText("number"), "3");
  screen.debug();
});
