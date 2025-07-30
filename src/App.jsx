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
  // updating score re-renders the whole app.
  // should score be inside a more specific component
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  /* stores the list of pokemon object from API call 
  could be a global variable? */
  /* if this was inside the CardContainer component
  changing it wouldn't re-render the whole app
  no other component needs it, so should be in the CardContainer
  */
  // const [itemList, setItemList] = useState([]);
  // setItemList([{ id: 0, name: "asdf", imgSrc: "asdasasda" }]);

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
      {/* <CardContainer itemList={itemList} setScore={handleScoreUpdate} /> */}
      <ScoreTest onClick={handleScoreUpdate} />
    </>
  );
}

export default App;
