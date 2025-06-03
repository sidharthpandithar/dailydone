export default function Message() {
  function handleClick() {
    console.log("Clicked me");
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Click Me
      </button>
    </div>
  );
}
