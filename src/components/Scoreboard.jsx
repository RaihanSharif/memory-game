function ScoreBoard({ currentScore, highestScore }) {
  return (
    <section className="scoreboard">
      <span className="score">Current Score: {currentScore} </span>
      <span className="score">Highest Score: {highestScore} </span>
    </section>
  );
}

export { ScoreBoard };
