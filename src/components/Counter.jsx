import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  

  return (
    <div>
      <h2>{count}</h2>
      <button>-</button>
      <button>+</button>
    </div>
  );
}
