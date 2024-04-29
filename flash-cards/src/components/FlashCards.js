import { useState } from "react";
import "../styles/flashCards.css";

export default function FlashCards({ question, handleClickinApp, selectedId }) {
  let [text, setText] = useState(question.question);
  let [bgcolor, setColor] = useState("yellow");
  function handleClick() {
    // this way is only to rotate the question card
    // if (text === question.question) {
    //   setText((text = question.answer));
    //   setColor((bgcolor = "red"));
    // } else {
    //   setText((text = question.question));
    //   setColor((bgcolor = "yellow"));
    // }
    handleClickinApp(question.id);
  }
  return (
    <div
      className="flash-card"
      onClick={handleClick}
      style={
        question.id === selectedId
          ? { backgroundColor: "red" }
          : { backgroundColor: "rgb(239, 228, 217)" }
      }
    >
      <p>{question.id === selectedId ? question.answer : question.question}</p>
    </div>
  );
}
