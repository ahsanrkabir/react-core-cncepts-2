import { useState } from "react";

export default function Team() {
  const [count, setCount] = useState(11);

  const handleAdd = () => {
    if (count < 15) {
      setCount(count + 1);
    } else {
      alert("Maximum Player Capacity is 15");
    }
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert("You have to select at least 1 player");
    }
  };

  const teamStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid yellow",
    borderRadius: "10px",
  };

  return (
    <div style={teamStyle}>
      <h3>Players Available: {count}</h3>
      <button onClick={handleAdd} style={{ margin: "10px" }}>
        +
      </button>
      <button onClick={handleRemove} style={{ margin: "10px" }}>
        -
      </button>
    </div>
  );
}
