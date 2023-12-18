import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  collapseButtonText = "Show less",
  expandButtonText = "Show more",
  buttonColor = "blue",
  expanded = false,
  className = "",
}) {
  const btnStyle = {
    padding: 0,
    border: "none",
    background: "none",
    color: buttonColor,
    fontWeight: "bold",
    font: "inherit",
  };

  const text = children;
  const [clicked, setClicked] = useState(expanded);

  return (
    <div className={className}>
      <span>
        {!clicked ? (
          <HideText
            text={text}
            collapsedNumWords={collapsedNumWords}
            className={className}
          />
        ) : (
          text
        )}{" "}
        <button style={btnStyle} onClick={() => setClicked(!clicked)}>
          {!clicked ? expandButtonText : collapseButtonText}
        </button>
      </span>
    </div>
  );
}

function HideText({ collapsedNumWords, text }) {
  let spaces = 0;
  let i;
  for (i = 0; i < text.length; i++) {
    if (spaces === collapsedNumWords) break;
    if (text[i] === " ") spaces++;
  }
  let str = text.slice(0, i - 1) + "...";
  return <>{str}</>;
}
