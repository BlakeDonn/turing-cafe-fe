import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";
import {getAllReservations} from "../api";
jest.mock("../api.js");

it("Should mount with api reservations and be able to make new ones", async () => {
  getAllReservations.mockResolvedValue([
    {
      id: 1,
      name: "test",
      date: "05/23",
      time: "6:30",
      number: "4",
    },
  ]);
  render(<App />);
  userEvent.type(screen.getByPlaceholderText("name"), "Blake");
  userEvent.type(screen.getByPlaceholderText("date"), "05/23");
  userEvent.type(screen.getByPlaceholderText("time"), "6:00");
  userEvent.type(screen.getByPlaceholderText("number"), "3");
  await waitFor(() => expect(screen.getByText("test")).toBeInTheDocument());
  userEvent.click(screen.getByRole("button", {name: "Make a Reservation"}));
  expect(screen.getByText("Blake")).toBeInTheDocument()
});

