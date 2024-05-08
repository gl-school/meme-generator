
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';


function App() {
  function print(){
    console.log("here");
  }

  return (
    <div>
      <Header></Header>
      <Meme></Meme>
      <button onMouseEnter={print}>Click Here</button>
    </div>
  );
}

export default App;
