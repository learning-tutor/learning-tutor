import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  argTypes: {
    handleChange: { action: "changed" },
    value: {
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs", "input", "form"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Email",
    placeholder: "Email",
    handleChange: () => {},
  },
};

export const Positive: Story = {
  args: {
    label: "Email",
    placeholder: "Email",
    handleChange: () => {},
    positive: true,
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Email",
    handleChange: () => {},
    errorMessage: "Erro ao validar senha",
    error: true,
  },
};

export const Small: Story = {
  args: {
    label: "Email",
    size: "small",
    placeholder: "Email",
    handleChange: () => {},
  },
};

export const Large: Story = {
  args: {
    label: "Email",
    size: "large",
    placeholder: "Email",
    handleChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "Email",
    handleChange: () => {},
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Email",
    placeholder: "Email",
    handleChange: () => {},
    readOnly: true,
  },
};
