import {type Task } from "@/page/hooks/useReducer/useStoreComparison"
import { useState } from "react"
interface ChangeTaskProps {
    tasks:Task[],
    onChangeTask:(obj:Task) => void,
    onDeleteTask: (id:number) => void
}
interface TaskProps {
    task:Task,
    onChange:(obj:Task) => void,
    onDelete: (id:number) => void
}
export default function TaskList({ tasks, onChangeTask, onDeleteTask }:ChangeTaskProps) {
  return (
    <ul>
      {tasks.map((task ) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }:TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div>
      {isEditing ? (
        <>
          <input
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value,
              });
            }}
          />
          <button onClick={() => setIsEditing(false)}>保存</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              onChange({
                ...task,
                done: e.target.checked,
              });
            }}
          />
          {task.text}
          <button onClick={() => setIsEditing(true)}>编辑</button>
        </>
      )}
      <button onClick={() => onDelete(task.id)}>删除</button>
    </div>
  );
}