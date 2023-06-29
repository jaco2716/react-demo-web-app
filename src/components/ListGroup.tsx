function ListGroup() {
  let items = ["1", "2", "3", "4"];
  items = [];

  if (items.length === 0) return <h1>No Item Found</h1>;

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
