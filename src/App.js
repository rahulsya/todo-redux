import "./styles/App.css";
import TodoItems from "./components/TodoItems";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div className="container todo-container">
      <div className="title-todo">#todo</div>
      <TodoInput />
      <TodoItems />
    </div>
  );
}

export default App;
