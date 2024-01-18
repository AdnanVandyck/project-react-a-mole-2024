import React, { useState } from 'react';
import MoleContainer from './components/MoleContainer';
import './App.css';

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer 
        key={i}
        setScore={setScore}
        score={score}
        />
      )
    }
    return (
      <div>
        { hills }
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      <div className="mole-container-grid">
      {createMoleHill()}
      </div>
    </div>
  );
}

export default App;
