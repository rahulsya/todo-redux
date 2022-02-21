import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../Redux/Todo/action";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onSumbitTodo = () => {
    if (todo.length) {
      dispatch(AddTodo(todo));
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
