import React from "react";
import ResyForm from "./ResyForm";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
const updateResys = jest.fn()

describe("Card", () => {
  render(
    <ResyForm updateResys={updateResys}
    />
  );
  it("should render a card", () => {
    expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
  });
});
