import React from "react";
import { styled } from "../stitches.config";
import copyImg from "../assets/copy-icon.png";

const Button = styled("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
  "&:active": {
    position: "relative",
    top: "2px",
    left: "2px",
  },
});

export default function CopyBtn({ text, setShowText }) {
  const copy = async () => {
    await navigator.clipboard.writeText(text);

    setShowText(true);

    setTimeout(() => {
      setShowText(false);
    }, 1500);
  };
  return (
    <Button onClick={copy} disabled={!text}>
      <img src={copyImg} alt="two papers" width="24px" />
    </Button>
  );
}
