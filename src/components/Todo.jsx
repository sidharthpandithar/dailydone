import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";
import Todolist from "./Todolist";
export default function Todo() {
  const [todos, settodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const remainingTodos = todos.filter((todo) => todo.done == false).length;
  return (
    <div>
      <div className="bg-zinc-200">
        <Form todos={todos} settodos={settodos} />
        <Todolist todos={todos} settodos={settodos} />
        <Footer
          completedTodos={completedTodos}
          remainingTodos={remainingTodos}
        />
      </div>
    </div>
  );
}
