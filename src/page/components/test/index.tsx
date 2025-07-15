import { useState, useEffect } from "react";

export function MyComponent() {
  const [count, setCount] = useState(0);

  const a = () => {
    setCount(c => c + 1);
  };

  useEffect(() => {
    a(); // 每次 effect 执行都会 +1
  }, []); // ❗ a 每次 render 都变 → useEffect 再次触发 → 死循环
  return <div>{}</div>;
}
