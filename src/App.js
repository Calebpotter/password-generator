
import './App.css';
import {Button} from './button/Button';
import { Display } from './display/Display';

function App() {
  const p = "123ABC"
  const buttonName = "Generate"
  return (
    <div className="App">
      <header className="App-header">
        <h1>
            C and G's Password Producer
        </h1>  
      </header>
      <main>
        <Button buttonName={buttonName}  />
        <Display password={p}/>
      </main>
    </div>
  );
}

export default App;
