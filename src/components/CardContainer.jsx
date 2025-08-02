import { Card } from "./Card";

/*eslint array-callback-return: "error"*/

function CardContainer({ pokemonList, onClick }) {
  return (
    <div className="card-container">
      {pokemonList &&
        pokemonList.map((item) => {
          return (
            <Card
              key={item.id}
              imgSrc={item.sprite}
              name={item.id + " " + item.name}
              onClick={() => {
                onClick(item.id);
              }}
            />
          );
        })}
    </div>
  );
}

export { CardContainer };
