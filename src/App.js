
import './App.css';
import {Button} from './button/Button';
import { Display } from './display/Display';

function App() {
  //const p = "123ABC"
  const buttonName = "Generate"
  
  function ranLetter(){
    var answer = ''
    const letters = "ABCDEFGHIJLKMNOPQRSTUVWXYZ"
    for(var i = 0; i<5; i++){
      answer += letters.charAt(Math.floor(Math.random() * letters.length)) 
    }
    return(answer);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
            C and G's Password Producer
        </h1>  
      </header>
      <main>
        <Button buttonName={buttonName}    />
        <div> " " </div>
        <Display password={ranLetter()}/>
      </main>
    </div>
  );
}

export default App;
