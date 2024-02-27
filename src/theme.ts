import { css } from "@linaria/core";

// Create class names for different themes
export const lightTheme = css`
  --color-background: #fff;
  --color-text: #454c52;
  --color-primary: #6200ee;
  --color-accent: #03dac4;
  --color-accent: #fff;
  --color-error: #cd3636;
  --color-success: #2f9461;
`;

export const darkTheme = css`
  --color-background: #121212;
  --color-text: #fff;
  --color-primary: #03a9f4;
  --color-accent: #e91e63;
  --color-accent: #000;
  --color-error: #cd3636;
  --color-success: #2f9461;
`;
