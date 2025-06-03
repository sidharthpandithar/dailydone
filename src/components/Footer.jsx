export default function Footer({ completedTodos, remainingTodos }) {
  return (
    <div className="flex gap-80 px-150 pb-5 pt-5 fixed bottom-0 text-xl font-semibold bg-zinc-500 w-[100%]">
      <span>Completed Tasks : {completedTodos}</span>{" "}
      <span>Remaining Tasks: {remainingTodos}</span>
    </div>
  );
}
