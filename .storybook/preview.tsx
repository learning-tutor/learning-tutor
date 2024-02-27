import React from "react";
import type { Preview } from "@storybook/react";
import { PreferencesProvider } from "../src/contexts/Preferences/PreferencesProvider";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story, context) => (
    <PreferencesProvider>
      <Story />
    </PreferencesProvider>
  ),
];

export default preview;
