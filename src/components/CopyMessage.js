import React from "react";
import { styled } from "../stitches.config";

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
