import { Card } from "./Card";
import { useEffect, useState } from "react";
//TODO: a randomizer function

// TODO: what to do when card is clicked
function cardClickHandler(cardId, updateScore) {
  // if cardId exists in previously clicked card list
  // reset score, else updateScore
  if (cardId === true) {
    updateScore(true);
  } else {
    updateScore(false);
  }

  // or more simply updateScore(cardId)
}

// function shuffleItemList(list) {
//     // somehow randomize the cards, and return a
//     // new list.
//     return;
// }

async function fetchPokemon(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`fetch error status ${response.status}`);
    }

    return response.json();
  } catch (e) {
    console.error(e.message);
  }
}

function CardContainer(setScore) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const tempList = [];
    for (let i = 35; i < 47; i++) {
      fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${i}`).then((result) => {
        const {
          id,
          name,
          sprites: { front_default },
        } = result;
        const tempObj = { id, name, sprite: front_default };
        tempList.push(tempObj);
      });
    }
    setPokemonList(tempList); // will this actually create the full list of pokemon?
  }, []);
  console.log(pokemonList);

  return (
    <section className="card-container">
      {pokemonList.forEach((element) => {
        return (
          <Card
            key={element.id}
            imgSrc={element.url}
            name={element.name}
            onClick={() => cardClickHandler(element.id, setScore)}
          />
        );
      })}
    </section>
  );
}

export { CardContainer };
