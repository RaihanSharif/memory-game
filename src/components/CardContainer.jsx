import { Card } from "./Card";
import { useState, useEffect } from "react";

/*eslint array-callback-return: "error"*/

function CardContainer() {
  const [pokemonList, setPokemonList] = useState(null);

  async function getPokemon() {
    const tempArr = [];
    for (let i = 34; i < 47; i++) {
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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {pokemonList &&
        pokemonList.map((item) => {
          return (
            <Card
              key={item.name}
              imgSrc={item.sprite}
              name={item.name}
              onClick={() => console.log(item.name)}
            />
          );
        })}
    </div>
  );
}

export { CardContainer };
