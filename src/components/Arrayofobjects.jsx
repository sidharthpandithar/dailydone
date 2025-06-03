import Fruit from "./Fruit";

export default function Arrayofobjects() {
  const fruits = [
    { name: "Apple", price: 150 },
    { name: "Orange", price: 100 },
    { name: "Mango", price: 200 },
    { name: "Banana", price: 130 },
    { name: "Pineapple", price: 110 },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <Fruit name={fruit.name} price={fruit.price} />
      ))}
    </div>
  );
}
