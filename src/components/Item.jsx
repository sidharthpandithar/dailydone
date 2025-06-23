import { IoMdDoneAll } from "react-icons/io";
import { MdPendingActions, MdDeleteForever } from "react-icons/md";
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
    <div className="w-full flex justify-center items-center">
      <div className="mt-10 bg-white md:shadow-2xl shadow-lg rounded-md md:w-160 md:items-center px-[30px] py-[30px] flex flex-col md:flex-row gap-4 justify-between">
        <span
          onClick={() => handleclick(item.name)}
          className={`text-2xl font-semibold ${
            item.done ? "line-through" : ""
          }`}
        >
          {item.name}
        </span>
        <div className="flex gap-10  ">
          <button onClick={() => handleclick(item.name)}>
            {item.done ? (
              <span className="flex gap-3 justify-center items-center w-30 font-semibold h-10 rounded-md px-2 py-2 m-[-10px] bg-green-500 hover:bg-green-300 hover:scale-110 hover:cursor-pointer hover:font-semibold">
                Completed <IoMdDoneAll />
              </span>
            ) : (
              <span className="flex gap-3 justify-center items-center w-24 font-semibold h-10 rounded-md px-2 py-2 m-[-10px] bg-amber-300 hover:bg-amber-500 hover:scale-110 hover:cursor-pointer hover:font-semibold">
                Pending <MdPendingActions />
              </span>
            )}
          </button>
          <button
            onClick={() => handleDelete(item)}
            className="flex justify-center items-center w-10 h-10 rounded-md px-2 py-2 m-[-10px] bg-red-700 hover:bg-red-400 hover:scale-110 hover:cursor-pointer hover:font-semibold"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
