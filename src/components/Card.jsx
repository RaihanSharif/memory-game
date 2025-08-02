function Card({ imgSrc, name, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-img" src={imgSrc} alt={name} />
      <span className="card-text">{name}</span>
    </div>
  );
}

export { Card };
