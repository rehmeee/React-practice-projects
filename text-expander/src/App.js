import './App.css';
import TextExpander from './components/TextExpander';
function App() {
  return (
    <div className = "">
      <TextExpander wordsNumCollaps ={20} byDefaultShow={false} showText = "show Text" hideText = "Show Less  " >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium recusandae eligendi animi corporis iusto amet aspernatur libero, enim at, magni eum temporibus 
      </TextExpander>
    </div>
  );
}

export default App;
