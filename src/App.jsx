import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Arrayofobjects from "./components/Arrayofobjects";
import Conditionalcomponent from "./components/Conditionalcomponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";

const person = {
  name: "Sidharth",
  job: "Developer",
  salary: "1 Crore",
};

function App() {
  return (
    <div className="App">
      {/* <Hello person={person} />
      <Fruits />
      <Arrayofobjects />
      <Conditionalcomponent /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      <Form />
    </div>
  );
}
export default App;
