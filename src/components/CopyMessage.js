import React from "react";
import { styled, keyframes } from "../stitches.config";

const wrapper = keyframes({
  "70%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const Wrapper = styled("div", {
  border: "4px solid $orange",
  borderRadius: 7,
  padding: "14px",
  width: "100%",
  overflowWrap: "break-word",
  backgroundColor: "$gray",
  color: "#ffffff",
  position: "fixed",
  top: -107,
  left: 0,
  textAlign: "center",
  fontSize: "24px",
  animation: `${wrapper} 2s`,
  "& span": {
    color: "$orange",
  },
});

export default function CopyMessage({ text }) {
  return (
    <Wrapper>
      <span>{text}</span> has been copied!
    </Wrapper>
  );
}
