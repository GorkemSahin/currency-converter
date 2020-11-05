import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [response, setResponse] = useState();

  useEffect(()=>{
    console.log("fetch from node js")
    fetch("http://localhost:3010")
        .then(res => res.text())
        .then(res => {
          setResponse(res)
          console.log(res)
        });
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro"> RESPONSE FROM NODEJS: {response}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
