import { Card } from "./Card";

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

function CardContainer(itemList, setScore) {
  // todo: randomizer function that shuffles
  // the itemList, from that create the cards grid
  // should be a local var, not a state ??
  return (
    <section className="card-container">
      {itemList.forEach((element) => {
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
