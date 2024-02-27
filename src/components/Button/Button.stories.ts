import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
  tags: ["autodocs", "button", "form"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Sign In",
    onClick: () => {},
  },
};
