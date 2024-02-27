import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { render } from "../../../tests/utilities";
import { axe, toHaveNoViolations } from "jest-axe";
import { Input } from "./Input";

expect.extend(toHaveNoViolations);

describe("Input", () => {
  it("renders the Input", () => {
    render(
      <Input
        label="Email"
        placeholder="Email"
        value=""
        handleChange={() => {}}
      />,
    );
  });

  it("should not have basic accessibility issues", async () => {
    const { container } = render(
      <Input
        label="Email"
        placeholder="Email"
        value=""
        handleChange={() => {}}
      />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("should render the label", () => {
    render(
      <Input
        label="Email"
        placeholder="Email"
        value=""
        handleChange={() => {}}
      />,
    );
    screen.getByText("Email");
  });

  it("should render the typing value", async () => {
    const { user } = render(<Input label="Email" placeholder="Email" />);
    const input = screen.getByRole("textbox");
    await user.type(input, "test@test.com");
    expect(input).toHaveValue("test@test.com");
  });

  it("should be disabled", () => {
    render(<Input label="Email" placeholder="Email" value="" disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it.todo("should be error", () => {
    render(<Input label="Email" placeholder="Email" error />);
    const input = screen.getByRole("textbox");
    const style = window.getComputedStyle(input);
    expect(style["border-color"]).toBe("rgb(255, 255, 255)");
  });

  it.todo("should be success", () => {
    render(<Input label="Email" placeholder="Email" positive />);
    const input = screen.getByRole("textbox");
    const style = window.getComputedStyle(input);
    expect(style["border-color"]).toBe("rgb(255, 255, 255)");
  });

  it("should render large input", () => {
    render(<Input label="Email" placeholder="Email" size="large" />);
    const input = screen.getByRole("textbox");

    const style = window.getComputedStyle(input);

    expect(style["font-size"]).toBe("1.2rem");
  });

  it("should render small input", () => {
    render(<Input label="Email" placeholder="Email" size="small" />);
    const input = screen.getByRole("textbox");
    const style = window.getComputedStyle(input);
    expect(style["font-size"]).toBe("0.6rem");
  });
});
