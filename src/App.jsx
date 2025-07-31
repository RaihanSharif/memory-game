import { useState } from "react";
import "./App.css";
import { ScoreBoard } from "./components/Scoreboard";
import { CardContainer } from "./components/CardContainer";
import { Header } from "./components/Header";

// testing to see if the score card values correctly update
function ScoreTest({ onClick }) {
  // show a button that, when clicked, updates scores
  return <button onClick={onClick}>+1</button>;
}

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  // the score updater will look something like this
  function handleScoreUpdate() {
    setCurrentScore((score) => score + 1);
    if (currentScore >= highestScore) {
      // + 1 or highestScore will always trail currentScore
      // when currentScore >= highestScore
      setHighestScore(currentScore + 1);
    }
    setHighestScore(
      currentScore >= highestScore ? currentScore + 1 : highestScore
    );
  }

  return (
    <>
      <Header />
      <ScoreBoard currentScore={currentScore} highestScore={highestScore} />
      <CardContainer setScore={handleScoreUpdate} />
      <ScoreTest onClick={handleScoreUpdate} />
    </>
  );
}

export default App;
