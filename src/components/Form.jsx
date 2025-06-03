import { useState } from "react";

// export default function Form() {
//   const [name, newname] = useState("");
//   function handleChange(e) {
//     newname(e.target.value);
//   }
//   return (
//     <div>
//       <form action="">
//         <input
//           className=" border-2"
//           onChange={(e) => handleChange(e)}
//           type="text"
//           value={name}
//         />
//       </form>
//     </div>
//   );
// }

// export default function Form() {
//   const [name, newname] = useState("");
//   return (
//     <div>
//       <form action="">
//         <input
//           className=" border-2"
//           onChange={(e) => newname(e.target.value)}
//           type="text"
//           value={name}
//         />
//       </form>
//     </div>
//   );
// }

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  const [name, newname] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="">
        <input
          className=" border-2"
          onChange={(e) => newname({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          className=" border-2"
          onChange={(e) => newname({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <button onClick={(e) => handleSubmit(e)} className=" btn">
          Add
        </button>
      </form>
    </div>
  );
}
