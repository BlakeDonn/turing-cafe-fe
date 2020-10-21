import React from "react";
import {ResyContainer} from "./ResyContainer";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ResyContainer", () => {
  it("should render a loading screen if no reservations provided ", () => {
    render(<ResyContainer reservations={{}} />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
  it("should display reservations if provided", () => {
    render(
      <ResyContainer
        reservations={[
          {id: 1, name: "Blake", date: "05/23", time: "6:30", number: "4"},
        ]}
      />
    );
    expect(screen.getByText("Blake")).toBeInTheDocument();
  });
});
