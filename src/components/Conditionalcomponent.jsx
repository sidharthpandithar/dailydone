import Return1 from "./Return1";
import Return2 from "./Return2";

export default function Conditionalcomponent() {
  let messageOne = <h1>This is message 1</h1>;
  let messageTwo = <h1>This is message 2</h1>;
  let message;
  const display = false;
  //   if (display) {
  //     message = messageOne;
  //   } else {
  //     message = messageTwo;
  //   }
  //   return message;

  return (message = display ? <Return1 /> : <Return2 />);
}
