import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick1() {
    alert("Button Clicked");
  }

  const handleClick2 = () => {
    alert("Button Clicked");
  };

  const addFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1>React - 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/* <button onclick="handleClick()">Click Me</button> */}

      <button onClick={handleClick1}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("Button 3 clicked");
        }}
      >
        Click 3
      </button>
      <button onClick={() => addFive(10)}>Add 5</button>
    </>
  );
}

export default App;
