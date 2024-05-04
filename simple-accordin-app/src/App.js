import logo from './logo.svg';
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
  const [checkClicked, setCheckeClicked] = useState(false);
  function handleSetCheckeClick(id){
    console.log(id);
  }
  let i = 10;
  let j = 1;
  return (
    <div className = "accordion">
      {faqs.map((question)=> <Item key={i++} title = {question.title} id = {j++} checkClicked={checkClicked} handleCheckclicked = {handleSetCheckeClick} text = {question.text}/>)}
    
    </div>
  );
}

export default App;
