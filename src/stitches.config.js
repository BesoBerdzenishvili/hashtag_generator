import { createStitches } from "@stitches/react";
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      orange: "#ef5227",
      gray: "#292a2e",
      black: "#141517",
    },
  },
  media: {
    bp1: "(max-width: 600px)",
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: { backgroundColor: "$black" },
});
