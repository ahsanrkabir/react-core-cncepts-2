import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{ border: "2px solid tomato", margin: "20px", padding: "20px" }}
    >
      <h3>Count: {count}</h3>
      <button style={{ margin: "20px" }} onClick={handleAdd}>
        Add
      </button>
      <button style={{ margin: "20px" }} onClick={handleReduce}>
        Reduce
      </button>
    </div>
  );
}
