import "./ItemsList.css";

const ItemsList = ({ list }) => {
  return (
    <div className="listContainer">
      <h3>{list.name}</h3>
      <div className="list">
        {list.items.map((item) => {
          return (
            <div key={item.id} className="itemWrapper">
              <span>{`${item.title} - ${item.timer}:00 minutes`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsList;
