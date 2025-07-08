const Pizza = (props) => {
  return (
    <div className="Pizza">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Pizza;
