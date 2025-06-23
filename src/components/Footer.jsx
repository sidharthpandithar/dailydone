export default function Footer({ completedTodos, remainingTodos }) {
  return (
    <div className="flex justify-around pb-5 pt-5 fixed bottom-0 text-xl font-semibold bg-zinc-500 w-[100%]">
      <span>Completed Tasks : {completedTodos}</span>{" "}
      <span>Remaining Tasks: {remainingTodos}</span>
    </div>
  );
}
