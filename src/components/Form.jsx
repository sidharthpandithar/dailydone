import { useState } from "react";
export default function Form({ todos, settodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form
      className=" mt-10 bg-zinc-50 shadow-2xl rounded-md inline-block ml-150 items-center px-[50px] py-[50px] "
      onSubmit={handleSubmit}
      action=""
    >
      <input
        className="  border-2 border-zinc-300 hover:border-zinc-600 w-100 h-10 rounded-md pl-4 "
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        type="text"
        value={todo.name}
        name=""
        id=""
        placeholder="Enter your task here"
      />
      <button
        className=" ml-5  w-20 px-5 h-10 rounded-full hover:font-semibold bg-zinc-300 hover:scale-110 hover:cursor-pointer hover:bg-zinc-500 "
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
