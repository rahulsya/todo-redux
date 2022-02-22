import { useState } from "react";

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const onSumbitTodo = () => {
    if (todo.length) {
      setTodo("");
    }
    return;
  };
  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="What Should You do ?"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
      />
      <button onClick={onSumbitTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
