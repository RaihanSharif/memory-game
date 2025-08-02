function Card({ imgSrc, name, onClick }) {
  return (
    <div
      className="card"
      onClick={(e) => {
        e.stopPropagation(); // prevent non-card clicks from registering
        onClick();
      }}
    >
      <img className="card-img" src={imgSrc} alt={name} />
      <span className="card-text">{name}</span>
    </div>
  );
}

export { Card };
