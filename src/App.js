import { useState } from "react";
import { styled } from "./stitches.config";
import CopyBtn from "./components/CopyBtn";
import CopyMessage from "./components/CopyMessage";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "$gray",
  color: "$orange",
  maxWidth: 564,
  width: "100%",
  height: 310,
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: 7,
});

const Inputs = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Input = styled("input", {
  border: "none",
  backgroundColor: "$black",
  height: 24,
  color: "$orange",
});

const Outputs = styled("div", {
  display: "flex",
  alignItems: "end",
});

const Output = styled("div", {
  backgroundColor: "$black",
  maxWidth: 175,
  width: "100%",
  minHeight: 24,
  margin: "24px 4px 0 0",
  overflowWrap: "break-word",
  padding: 3,
});

function App() {
  const [hashtag, setHashtag] = useState("");
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const hashtagGenerator = (text) => {
    if (text.length > 140) {
      alert("Text must less that 140 characters");
      setHashtag("");
      return "";
    } else {
      return (
        "#" +
        text
          .replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          })
          .split(" ")
          .join("")
      );
    }
  };
  return (
    <Wrapper>
      {showCopyMessage && <CopyMessage text={hashtag} />}
      <h2>Hashtag Generator</h2>
      <Inputs>
        <Input
          type="text"
          value={hashtag}
          autoFocus
          onChange={(e) => setHashtag(e.target.value)}
        />
        <Outputs>
          <Output>{hashtag && hashtagGenerator(hashtag)}</Output>
          <CopyBtn text={hashtag} setShowText={setShowCopyMessage} />
        </Outputs>
      </Inputs>
    </Wrapper>
  );
}

export default App;
