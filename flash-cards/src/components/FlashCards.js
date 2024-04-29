import { useState } from "react";
import "../styles/flashCards.css";

export default function FlashCards({ question }) {
  let [text, setText] = useState(question.question);
  let [bgcolor, setColor] = useState("yellow");
  function handleClick() {
    if (text === question.question) {
      setText((text = question.answer));
      setColor((bgcolor = "red"));
    } else {
      setText((text = question.question));
      setColor((bgcolor = "yellow"));
    }
  }
  return (
    <div
      className="flash-card"
      onClick={handleClick}
      style={{ backgroundColor: `${bgcolor}` }}
    >
      <p>{text}</p>
    </div>
  );
}
