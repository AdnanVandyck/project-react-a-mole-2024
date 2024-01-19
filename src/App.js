import React, { useState } from "react";
import MoleContainer from "./components/MoleContainer";
import "./App.css";

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    return <>{hills}</>;
  };

  return (
    <div className="App">
      <div className="header">
        <h1>React-a-Mole!</h1>
        <h2>{score}</h2>
      </div>

      <div className="mole-container">{createMoleHill()}</div>
    </div>
  );
}

export default App;
