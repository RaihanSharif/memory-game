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
      <Header />
      <ScoreBoard currentScore={2} highestScore={3} />
      <CardContainer />
    </>
  );
}

export default App;
