import { Card } from "./Card";
import { useState, useEffect } from "react";

/*eslint array-callback-return: "error"*/

function CardContainer() {
  const [pokemonList, setPokemonList] = useState(null);

  async function getPokemon() {
    // give the api a random starting point so that every page refresh creates a new
    // set of pokemon for the new game.
    const randomNum = Math.floor(Math.random() * 1000);
    const tempArr = [];

    for (let i = randomNum; i < randomNum + 12; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const json = await response.json();
      console.log(`my json ${json}`);
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
    <div className="card-container">
      {pokemonList &&
        pokemonList.map((item) => {
          return (
            <Card
              key={item.name}
              imgSrc={item.sprite}
              name={item.name}
              onClick={() => alert(item.name)}
            />
          );
        })}
    </div>
  );
}

export { CardContainer };
