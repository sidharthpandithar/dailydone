import { useState } from "react";
export default function Form({ todos, settodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div className="md:flex justify-center items-center">
      <form
        className="mt-10 flex-col md:gap-20 md:flex-row md:w-160 w-80 bg-zinc-50 shadow-2xl rounded-md inline-block items-center px-[50px] py-[30px] md:py-[50px] "
        onSubmit={handleSubmit}
        action=""
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <input
            className="  border-2 border-zinc-300 hover:border-zinc-600 md:w-100  md:h-10 w-70 h-12 rounded-md pl-4 "
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            name=""
            id=""
            placeholder="Enter your task here"
          />
          <button
            className=" w-20 px-5 h-10 rounded-md hover:font-semibold bg-zinc-300 hover:scale-110 hover:cursor-pointer hover:bg-zinc-500 "
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
