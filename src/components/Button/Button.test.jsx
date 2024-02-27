import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { it } from "vitest";
import { Button } from "./Button";
import { render } from "../../../tests/utilities";
import { axe, toHaveNoViolations } from "jest-axe";
import { vi } from "vitest";

expect.extend(toHaveNoViolations);

it("render Button correctly", () => {
  render(<Button>Click</Button>);
  const result = screen.getByRole("button", { name: /Click/i });
  expect(result).toBeDefined();
});

it("should not have basic accessibility issues", async () => {
  const { container } = render(<Button>Click</Button>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it("Click", async () => {
  const ClickFn = vi.fn();
  const { user } = render(
    <Button
      onClick={() => {
        ClickFn();
      }}
    >
      Click
    </Button>,
  );
  const result = screen.getByRole("button", { name: /Click/i });

  await user.click(result);

  expect(ClickFn).toHaveBeenCalledTimes(1);
});

it("should be disabled", () => {
  render(
    <Button onClick={() => {}} disabled>
      Click
    </Button>,
  );
  const result = screen.getByRole("button");
  expect(result).toBeDisabled();
});
