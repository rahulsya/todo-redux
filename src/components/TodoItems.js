import { useDispatch } from "react-redux";
import { DeleteTodo, CompleteTodo } from "../Redux/Todo/action";

const TodoItems = ({ data }) => {
  const dispatch = useDispatch();
  const { todo, id, completed } = data;
  return (
    <div className="list-todo">
      <div
        className={`list-title ${completed == true ? "list-completed" : ""}`}
      >
        {todo}
      </div>
      <div className="list-action">
        {completed == false && (
          <button
            className="success"
            onClick={() => dispatch(CompleteTodo(id))}
          >
            Completed
          </button>
        )}
        <button className="danger" onClick={() => dispatch(DeleteTodo(id))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
