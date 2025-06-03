export default function Fruits() {
  const fruits = ["apple", "mango", "orange", "pineapple"];
  return (
    <div>
      {fruits.map((fruit) => (
        <li key={fruit} className=" list-none text-2xl">
          {fruit}
        </li>
      ))}
    </div>
  );
}
