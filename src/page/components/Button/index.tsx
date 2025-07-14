// (父子通信练习)实现一个组件，组件内有h1：hello World 0;下面有一个自定义按钮，每点击一次，数字都自增1
import { useState } from "react";

interface MyButtonProps {
    onClick: () => void
}
function MyButton(props: MyButtonProps) {
    const { onClick } = props;
    return (
        <button onClick={onClick}>Click me</button>
    )

}
function App() {
    const [count, setCount] = useState(0);
    function add() {
        setCount(count + 1);
    };
    return (
        <>
            <h1>Hello World {count}</h1>
            <MyButton onClick={add}></MyButton>
        </>
    )
}
export default App; 