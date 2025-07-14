"use client";
import { useState } from "react"
interface AddTaskProps {
  onAddTask: (text: string) => void;
}
export default function AddTask({onAddTask}:AddTaskProps) {
    const [input, setInput] = useState('');
    function handleInput(e:React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }
    function handleAdd() {
        onAddTask(input);
    }
    return(
        <>
        <input type="text" value={input} onChange={handleInput}/>
        <button onClick={handleAdd}>添加</button>
        </>
    )
}