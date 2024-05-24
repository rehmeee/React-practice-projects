import { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";





export default function App() {

const [foundResults, setFoundResults] = useState(0);
// this function is to handle how many results are found in search
function handleFoundResults(res){
  setFoundResults(res)
}
  return (
    <>
    {/* // nav bar component  */}
      <Nav foundResults={foundResults} />
      {/* // main component */}
    <Main />
          </>
  );
}
