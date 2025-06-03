export default function Item({ item, todos, settodos }) {
  function handleclick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    settodos(newArray);
  }

  function handleDelete(item) {
    settodos(todos.filter((todo) => todo != item));
  }
  return (
    <div className="mt-10 bg-white shadow-2xl rounded-md block ml-150 w-150 items-center px-[30px] py-[30px] ">
      <span
        onClick={() => handleclick(item.name)}
        className={`text-2xl font-semibold ${item.done ? "line-through" : ""}`}
      >
        {item.name}{" "}
      </span>
      <span>
        <button
          onClick={() => handleDelete(item)}
          className="float-right w-12 h-12 rounded-md px-2 py-2 m-[-10px] bg-zinc-300 hover:bg-zinc-500 hover:scale-110 hover:cursor-pointer hover:font-semibold"
        >
          X
        </button>
      </span>
    </div>
  );
}
