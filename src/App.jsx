// import { useEffect, useState } from "react";
import "./App.css";
import { ScoreBoard } from "./components/Scoreboard";
import { CardContainer } from "./components/CardContainer";
import { Header } from "./components/Header";

function App() {
  // const [currentScore, setCurrentScore] = useState(0);
  // const [highestScore, setHighestScore] = useState(0);

  return (
    <>
      <div className="header-wrapper">
        <header>
          <div>
            <h1>Memory Game</h1>
            <span>Test your memory. Don't click the same card twice.</span>
          </div>
          <section className="scoreboard">
            <p className="score">Current Score: {2} </p>
            <p className="score">Highest Score: {2} </p>
          </section>
        </header>
      </div>
      <CardContainer />
    </>
  );
}

export default App;
