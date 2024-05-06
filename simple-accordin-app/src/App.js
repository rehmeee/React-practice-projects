import './App.css';
import Item from './components/Item';
import { useState } from 'react';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function App() {
 // this is just for a key to reduce the error given by the react
  let j = 1;
  return (
    <div className = "accordion">
     {faqs.map((question) => <Item title={question.title} text = {question.text} key={Date.now()} itemNo = {j++}/>)}
    </div>
  );
}

export default App;
