import Item from "./Item";
export default function Todolist({ todos, settodos }) {
  return (
    <div
      className="h-[75vh] overflow-scroll  @utility no-scrollbar {
  @apply [scrollbar-width:none] [&::-webkit-scrollbar]:hidden;
}"
    >
      {todos.map((item) => (
        <Item key={item.name} item={item} todos={todos} settodos={settodos} />
      ))}
    </div>
  );
}
