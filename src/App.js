import logo from './logo.svg';
import './App.css';
import Button from './components/button/button'
import {Input} from './components/input/input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rohan is good at surf
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button onClick={undefined} disabled={0}>this is a button</Button> 
      <Input/>
    </div>
  );
}

export default App;
