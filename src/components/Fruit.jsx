export default function Fruit({ name, price }) {
  return (
    <div>
      {/* {name} {price} */}

      {price > 100 ? (
        <h1>
          {name} {price}
        </h1>
      ) : (
        ""
      )}
    </div>
  );
}
