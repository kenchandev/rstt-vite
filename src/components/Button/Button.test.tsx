import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("<Button /> component", () => {
  it("renders the button with default props", async () => {
    render(<Button label="Test Button" />);

    await screen.findByText("Test Button");

    expect(screen.getByText("Test Button")).toHaveTextContent("Test Button");
  });
});
