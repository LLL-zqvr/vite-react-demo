import { useState, useEffect, useRef } from "react";
import { useLatest } from "ahooks";
export function MyComponent() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const latestCountRef = useLatest(count);
  //相当于：
  const latestCountRef1 = useRef(count1);
  latestCountRef1.current = count1; 

  const countRef = useRef(count2);

  //latest1
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1); // ✅ 总是取最新 count
    }, 1000);
    return () => clearInterval(interval);
  }, []);

//latest2
  useEffect(() => {
    const interval = setInterval(() => {
      setCount1(latestCountRef1.current + 1); // ✅ 总是取最新 count
    }, 1000);
    return () => clearInterval(interval);
  })
  //ref
useEffect(
  () => {
    countRef.current = count2;
  },[count2]
)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(countRef.current + 1); // 不会手动增加
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //default
  useEffect(() => {
    const interval = setInterval(() => {
      setCount3(count3 + 1); // ✅ 总是取最新 count
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>count(useLatest): {count}</p>
      <p>count(latest2): {count1}</p>
      <p>count(useRef): {count2}</p>
      <p>count(default): {count3}</p>
    </>
  );
};
