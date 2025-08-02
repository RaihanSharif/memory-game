import { useState, useEffect } from "react";
import "./App.css";
import { CardContainer } from "./components/CardContainer";

/**
 *
 * @param {number} quantity - how many numbers to generate
 * @param {number} max - range of numbers to generate
 * @returns a set containing the generated numbers
 */
function myRandomInts(quantity, max) {
  const set = new Set();
  while (set.size < quantity) {
    set.add(Math.floor(Math.random() * max) + 1);
  }
  return set;
}

// function to shuffle an array of pokemon objects
function shuffleArr(arr) {
  const array = [...arr];
  console.log(`shuffling a copy? ${arr !== array}`);
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemonList, setPokemonList] = useState(null);
  const [clickedList, setClickedList] = useState([]);

  function handleClick(clickedPokemonId) {
    const alreadyClicked = clickedList.includes(clickedPokemonId);

    if (alreadyClicked) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setClickedList([]);
      getPokemon();
    } else {
      setCurrentScore((prev) => prev + 1);
      setClickedList((prev) => [...prev, clickedPokemonId]);
    }
    setPokemonList(shuffleArr(pokemonList));
  }

  async function getPokemon() {
    console.log("rerender...");
    const randomNums = myRandomInts(12, 500);
    console.log(randomNums);
    const tempArr = [];

    for (let num of randomNums) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
      const json = await response.json();
      const {
        id,
        name,
        sprites: { front_default },
      } = json;
      const temp = { id, name, sprite: front_default };
      tempArr.push(temp);
    }
    setPokemonList(tempArr);
  }
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <div className="header-wrapper">
        <header>
          <div>
            <h1>Memory Game</h1>
            <span>Test your memory. Don't click the same card twice.</span>
          </div>
          <div className="scoreboard">
            <p className="score">Current Score: {currentScore} </p>
            <p className="score">Highest Score: {highScore} </p>
          </div>
        </header>
      </div>
      <CardContainer pokemonList={pokemonList} onClick={handleClick} />
    </>
  );
}

export default App;
