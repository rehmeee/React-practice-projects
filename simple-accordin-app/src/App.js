import "./App.css";
import Item from "./components/Item";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  const [curOpen, setCurOpen] = useState(null);
  function handleCurrentOpen(no) {
    setCurOpen((prev) => (prev === no ? null : no));
  }
  // this is just for a key to reduce the error given by the react
  return (
    // now this is the simple way to pass the data to the children
    // ****** you can uncommit to check the changes
    // ### remember to add the html segement
    // <div className="accordion">
    //   {faqs.map((question, i) => (
    //     <Item
    //       curOpen={curOpen}
    //       onClick={handleCurrentOpen}
    //       title={question.title}
    //       text={question.text}
    //       key={i}
    //       itemNo={i}
    //     />
    //   ))}
    // </div>
    // here we are going to pass the data to the children components through the children props so
    <div className="accordion">
      {faqs.map((question, i) => (
        <Item
          curOpen={curOpen}
          onClick={handleCurrentOpen}
          title={question.title}
          key={i}
          itemNo={i}
        >
          {question.text}
        </Item>
      ))}
      {/* // so here i like to create a new question by children props */}
      <Item
        curOpen={curOpen}
        onClick={handleCurrentOpen}
        title="Test 1"
        key="test 1"
        itemNo={12}
      >
       <p>Test 1</p>
       <ul>
        <li>Rehman ali</li>
        <li>Usman </li>
        <li>Maan</li>
       </ul>
      </Item>
    </div>
  );
}

export default App;
