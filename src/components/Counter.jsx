import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h2>{count}</h2>
      <button>-</button>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}
